"use client"

import { format } from "date-fns"
import { LucideCalendar } from "lucide-react"
import { useState } from "react";

import { Input } from "./ui/input";

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

type DatePickerProps = {
  id: string
  name: string
  defaultvalue: string | undefined
};


export function DatePicker({id, name, defaultvalue}: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(
    defaultvalue ? new Date(defaultvalue) : new Date()
  );

  const [open, setOpen] = useState(false);

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setOpen(false);
  };

  const formattedStringDate = date ? format(date, "yyyy-MM-dd") : "";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <LucideCalendar className="mr-2 h-4 w-4" />
          {formattedStringDate}
          <Input type="hidden" name={name} value={formattedStringDate}></Input>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
