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
import { ref, push } from "firebase/database";
import { database } from "@/lib/firebase";

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
    meetingType: "",
  });
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("09:00 AM");
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    "Web Development", "Software Development", "Digital Marketing", "UI/UX Design",
    "Sales/Lead Generation", "CRM Solutions", "ERP Systems", "Billing Solutions",
    "Cloud Services", "AI Solutions"
  ];

  const departments = [
    "Sales", "Development", "Marketing", "Strategy", "Support", "Management", "Consulting"
  ];

  const meetingTypes = [
    "Video Call", "Phone Call", "In-Person", "Hybrid"
  ];

  const times = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare the booking data
      const bookingData = {
        ...formData,
        date: date ? format(date, "PPP") : "",
        time,
        createdAt: new Date().toISOString(),
        status: "pending"
      };

      // Push data to Firebase Realtime Database
      const bookingsRef = ref(database, 'bookings');
      await push(bookingsRef, bookingData);

      setIsSubmitting(false);
      setIsSuccess(true);

      console.log("Booking submitted successfully:", bookingData);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "", email: "", phone: "", service: "", department: "", message: "", company: "", attendees: "1", meetingType: "",
        });
        setDate(undefined);
        setTime("09:00 AM");
        setStep(1);
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error submitting booking:", error);
      setIsSubmitting(false);
      // You might want to show an error message to the user here
    }
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
            {step === 1 ? "Let's get to know you" : step === 2 ? "Tell us about your needs" : "Finalize your appointment"}
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
            {step === 1 && (
              <div className="space-y-4">
                <InputField label="Full Name" icon={<User />} value={formData.name} onChange={(val) => setFormData({ ...formData, name: val })} id="name" placeholder="John Doe" required />
                <InputField label="Email" icon={<Mail />} value={formData.email} onChange={(val) => setFormData({ ...formData, email: val })} id="email" type="email" placeholder="john@example.com" required />
                <InputField label="Phone" icon={<Phone />} value={formData.phone} onChange={(val) => setFormData({ ...formData, phone: val })} id="phone" placeholder="+91 9876543210" required />
                <InputField label="Company (Optional)" icon={<BuildingIcon />} value={formData.company} onChange={(val) => setFormData({ ...formData, company: val })} id="company" placeholder="Company Name" />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <Dropdown label="Service" value={formData.service} onChange={(val) => setFormData({ ...formData, service: val })} options={services} />
                <Dropdown label="Department" value={formData.department} onChange={(val) => setFormData({ ...formData, department: val })} options={departments} />
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
                            "w-full justify-start text-left font-normal bg-gray-800 border-gray-700 text-white",
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
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white hover:bg-gray-750">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white max-h-60 overflow-y-auto">
                        {times.map((t) => (
                          <SelectItem key={t} value={t} className="hover:bg-gray-700">
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Dropdown label="Meeting Type" value={formData.meetingType} onChange={(val) => setFormData({ ...formData, meetingType: val })} options={meetingTypes} />
                <Dropdown label="Number of Attendees" value={formData.attendees} onChange={(val) => setFormData({ ...formData, attendees: val })} options={["1", "2", "3", "4", "5", "6+"]} />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2 text-gray-300">
                    <MessageSquare className="h-4 w-4" /> Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us more about your project..."
                    rows={4}
                  />
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-200 mb-3">Appointment Summary</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <SummaryRow label="Name" value={formData.name} />
                    <SummaryRow label="Service" value={formData.service} />
                    <SummaryRow label="Department" value={formData.department} />
                    <SummaryRow label="Date" value={date ? format(date, "PPP") : "-"} />
                    <SummaryRow label="Time" value={time} />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input id="terms" type="checkbox" className="h-4 w-4 bg-gray-800 border-gray-700 text-purple-500" required />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    I agree to the <a href="#" className="text-purple-400 underline">terms</a> & <a href="#" className="text-purple-400 underline">privacy policy</a>
                  </label>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              {step > 1 ? (
                <Button onClick={prevStep} type="button" variant="outline" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700">Back</Button>
              ) : <div />}

              {step < 3 ? (
                <Button onClick={nextStep} type="button" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  Continue <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting || !date} className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                  ) : "Confirm Appointment"}
                </Button>
              )}
            </div>

            <div className="flex justify-center items-center space-x-2 pt-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-2 w-2 rounded-full ${i <= step ? 'bg-purple-500' : 'bg-gray-600'}`} />
              ))}
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

// Reusable components
const InputField = ({ label, icon, id, value, onChange, type = "text", placeholder = "", required = false }) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="flex items-center gap-2 text-gray-300">{icon} {label}</Label>
    <Input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} className="bg-gray-800 border-gray-700 text-white placeholder-gray-500" placeholder={placeholder} />
  </div>
);

const Dropdown = ({ label, value, onChange, options }) => (
  <div className="space-y-2">
    <Label className="text-gray-300">{label}</Label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="bg-gray-800 border-gray-700 text-white hover:bg-gray-750">
        <SelectValue placeholder={`Choose ${label.toLowerCase()}`} />
      </SelectTrigger>
      <SelectContent className="bg-gray-800 border-gray-700 text-white max-h-60 overflow-y-auto">
        {options.map((option) => (
          <SelectItem key={option} value={option} className="hover:bg-gray-700">{option}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

const SummaryRow = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-gray-400">{label}:</span>
    <span>{value}</span>
  </div>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-2a2 2 0 012-2h14a2 2 0 012 2v2M9 17v-1a1 1 0 011-1h4a1 1 0 011 1v1M12 3v4m0 4v.01" />
  </svg>
);

export default BookingModal;