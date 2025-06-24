import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon, Clock, User, Mail, Phone, MessageSquare, ChevronDown, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { TimePicker } from "./ui/time-picker";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    department: "",
    message: "",
    company: "",
    attendees: "1",
  });
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("09:00 AM");
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    "Web Development",
    "Software Development", 
    "Digital Marketing",
    "UI/UX Design",
    "Sales/Lead Generation",
    "CRM Solutions",
    "ERP Systems",
    "Billing Solutions",
    "Cloud Services",
    "AI Solutions"
  ];

  const departments = [
    "Sales",
    "Development", 
    "Marketing",
    "Strategy",
    "Support",
    "Management",
    "Consulting"
  ];

  const meetingTypes = [
    "Video Call",
    "Phone Call",
    "In-Person",
    "Hybrid"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Booking submission:", { ...formData, date, time });
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after 3 seconds and close
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        department: "",
        message: "",
        company: "",
        attendees: "1",
      });
      setDate(undefined);
      setTime("09:00 AM");
      setStep(1);
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Schedule Your Consultation
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            {step === 1 ? "Let's get to know you" : 
             step === 2 ? "Tell us about your needs" : 
             "Finalize your appointment"}
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="h-16 w-16 text-emerald-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Appointment Booked!</h3>
            <p className="text-gray-300 mb-6">
              We've sent a confirmation to {formData.email}. Our team will contact you shortly.
            </p>
            <div className="bg-gray-800 rounded-lg p-4 w-full text-left">
              <h4 className="font-medium text-gray-200 mb-2">Appointment Details</h4>
              <div className="space-y-1 text-sm text-gray-300">
                <p><span className="font-medium">Name:</span> {formData.name}</p>
                <p><span className="font-medium">Service:</span> {formData.service}</p>
                <p><span className="font-medium">Date:</span> {date && format(date, "PPP")}</p>
                <p><span className="font-medium">Time:</span> {time}</p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-gray-300">
                    <User className="h-4 w-4" /> Full Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-gray-300">
                    <Mail className="h-4 w-4" /> Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-gray-300">
                    <Phone className="h-4 w-4" /> Phone
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Company (Optional)
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                    placeholder="Your company name"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Appointment Details */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Service
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white hover:bg-gray-750 focus:ring-2 focus:ring-purple-500">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      {services.map((service) => (
                        <SelectItem 
                          key={service} 
                          value={service}
                          className="hover:bg-gray-700 focus:bg-gray-700"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Department
                  </Label>
                  <Select value={formData.department} onValueChange={(value) => setFormData({...formData, department: value})}>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white hover:bg-gray-750 focus:ring-2 focus:ring-purple-500">
                      <SelectValue placeholder="Choose department" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      {departments.map((dept) => (
                        <SelectItem 
                          key={dept} 
                          value={dept}
                          className="hover:bg-gray-700 focus:bg-gray-700"
                        >
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-gray-300">
                      <CalendarIcon className="h-4 w-4" /> Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-gray-800 border-gray-700 text-white hover:bg-gray-750",
                            !date && "text-gray-500"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="bg-gray-800 text-white"
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-gray-300">
                      <Clock className="h-4 w-4" /> Time
                    </Label>
                    <TimePicker 
                      value={time} 
                      onChange={setTime} 
                      className="bg-gray-800 border-gray-700 text-white hover:bg-gray-750"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Meeting Type
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white hover:bg-gray-750 focus:ring-2 focus:ring-purple-500">
                      <SelectValue placeholder="Select meeting type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      {meetingTypes.map((type) => (
                        <SelectItem 
                          key={type} 
                          value={type}
                          className="hover:bg-gray-700 focus:bg-gray-700"
                        >
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Number of Attendees
                  </Label>
                  <Select 
                    value={formData.attendees} 
                    onValueChange={(value) => setFormData({...formData, attendees: value})}
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white hover:bg-gray-750 focus:ring-2 focus:ring-purple-500">
                      <SelectValue placeholder="Select number" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      {["1", "2", "3", "4", "5", "6+"].map((num) => (
                        <SelectItem 
                          key={num} 
                          value={num}
                          className="hover:bg-gray-700 focus:bg-gray-700"
                        >
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 3: Final Details */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2 text-gray-300">
                    <MessageSquare className="h-4 w-4" /> Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us more about your project, specific needs, or questions..."
                    rows={4}
                  />
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-200 mb-3">Appointment Summary</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Name:</span>
                      <span>{formData.name || "-"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Service:</span>
                      <span>{formData.service || "-"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Department:</span>
                      <span>{formData.department || "-"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date:</span>
                      <span>{date ? format(date, "PPP") : "-"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Time:</span>
                      <span>{time || "-"}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input 
                    id="terms" 
                    type="checkbox" 
                    className="h-4 w-4 rounded bg-gray-800 border-gray-700 text-purple-500 focus:ring-purple-500" 
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    I agree to the <a href="#" className="text-purple-400 hover:underline">terms and conditions</a> and <a href="#" className="text-purple-400 hover:underline">privacy policy</a>
                  </label>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              {step > 1 ? (
                <Button 
                  type="button" 
                  onClick={prevStep}
                  variant="outline"
                  className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Back
                </Button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <Button 
                  type="button" 
                  onClick={nextStep}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  disabled={step === 1 && (!formData.name || !formData.email || !formData.phone)}
                >
                  Continue <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                  disabled={isSubmitting || !date}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : "Confirm Appointment"}
                </Button>
              )}
            </div>

            {/* Step indicator */}
            <div className="flex justify-center items-center space-x-2 pt-2">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className={`h-2 w-2 rounded-full ${i <= step ? 'bg-purple-500' : 'bg-gray-600'}`}
                />
              ))}
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;