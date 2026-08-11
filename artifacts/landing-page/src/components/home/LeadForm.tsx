import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSubscribe } from "@workspace/api-client-react"

const formSchema = z.object({
  firstName: z.string().min(2, "Name is required"),
  businessName: z.string().min(2, "Business name is required"),
  category: z.string().min(1, "Please select a category"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  agreedToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
})

type FormData = z.infer<typeof formSchema>

const CATEGORIES = [
  "Dentist", "HVAC", "Restaurant/Pizzeria", "Auto Repair", 
  "Plumber", "Electrician", "Landscaping", "Salon/Spa", 
  "Chiropractor", "Real Estate Agent", "Insurance Agent", 
  "Gym/Fitness", "Other"
]

interface LeadFormProps {
  prefilledCategory?: string;
}

export function LeadForm({ prefilledCategory = "" }: LeadFormProps) {
  const [success, setSuccess] = useState(false)
  const subscribe = useSubscribe()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: prefilledCategory
    }
  })

  useEffect(() => {
    if (prefilledCategory) {
      setValue("category", prefilledCategory)
    }
  }, [prefilledCategory, setValue])

  const onSubmit = (data: FormData) => {
    subscribe.mutate({ data }, {
      onSuccess: () => {
        setSuccess(true)
        reset()
      }
    })
  }

  if (success) {
    return (
      <section id="lead-form" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white p-12 rounded-2xl shadow-xl text-center border border-slate-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-black mb-4 text-slate-800">Request Received!</h2>
            <p className="text-lg text-slate-600 mb-8">
              Thanks! We've received your inquiry and will check category availability within 24 hours. Keep an eye on your inbox.
            </p>
            <Button onClick={() => setSuccess(false)} variant="outline">
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-form" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-primary p-8 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
            <h2 className="text-3xl font-black mb-2 relative z-10">Check If Your Category Is Available</h2>
            <p className="text-primary-foreground/90 font-medium relative z-10">
              Spaces fill up fast. Lock out your local competitors today.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
            {subscribe.isError && (
              <div className="bg-red-50 text-red-600 p-4 rounded-md text-sm font-medium border border-red-200">
                Failed to submit. Please try again later.
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <Input {...register("firstName")} placeholder="John Doe" className="bg-slate-50" />
                {errors.firstName && <p className="text-xs text-red-500 font-medium">{errors.firstName.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Business Name</label>
                <Input {...register("businessName")} placeholder="Acme Local Services" className="bg-slate-50" />
                {errors.businessName && <p className="text-xs text-red-500 font-medium">{errors.businessName.message}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700">Industry / Category</label>
                <select 
                  {...register("category")}
                  className="flex h-12 w-full rounded-md border border-input bg-slate-50 px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="" disabled>Select your business type...</option>
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.category && <p className="text-xs text-red-500 font-medium">{errors.category.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                <Input {...register("phone")} placeholder="(555) 123-4567" type="tel" className="bg-slate-50" />
                {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <Input {...register("email")} placeholder="john@example.com" type="email" className="bg-slate-50" />
                {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4">
              <input 
                type="checkbox" 
                id="agreedToTerms" 
                {...register("agreedToTerms")}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" 
              />
              <label htmlFor="agreedToTerms" className="text-sm text-slate-600 leading-tight cursor-pointer font-medium">
                I agree to receive communications and accept the <a href="/terms" className="text-primary hover:underline" target="_blank">Terms & Conditions</a> and <a href="/privacy-policy" className="text-primary hover:underline" target="_blank">Privacy Policy</a>.
              </label>
            </div>
            {errors.agreedToTerms && <p className="text-xs text-red-500 font-medium">{errors.agreedToTerms.message}</p>}

            <Button 
              type="submit" 
              size="lg" 
              variant="secondary"
              disabled={subscribe.isPending}
              className="w-full text-lg h-16 mt-4 shadow-[0_4px_20px_rgba(255,90,0,0.4)] font-bold tracking-wide"
            >
              {subscribe.isPending ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : "Reserve My Category Now"}
            </Button>
            
            <p className="text-center text-xs font-bold text-slate-500 mt-4">
              NO CREDIT CARD REQUIRED. WE VERIFY AVAILABILITY FIRST.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
