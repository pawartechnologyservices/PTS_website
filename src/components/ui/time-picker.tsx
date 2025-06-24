import * as React from "react";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimePickerProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const TimePicker = ({ value, onChange, className }: TimePickerProps) => {
  const [open, setOpen] = React.useState(false);
  
  // Generate time options from 8:00 AM to 8:00 PM in 30-minute increments
  const timeOptions = React.useMemo(() => {
    const options = [];
    for (let hour = 8; hour <= 20; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = new Date();
        time.setHours(hour, minute, 0, 0);
        options.push(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }
    }
    return options;
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground",
            className
          )}
        >
          <Clock className="mr-2 h-4 w-4" />
          {value ? value : <span>Select time</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="max-h-[300px] overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-lg">
          {timeOptions.map((time) => (
            <Button
              key={time}
              variant="ghost"
              className={cn(
                "w-full justify-start",
                value === time && "bg-accent text-accent-foreground"
              )}
              onClick={() => {
                onChange(time);
                setOpen(false);
              }}
            >
              {time}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export { TimePicker };