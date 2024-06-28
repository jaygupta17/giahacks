"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SetStateAction } from "react"
import { createComplaint } from "../../../actions"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  heritage: z.string(),
  site: z.string(),
  damage :z.string(),
  descr: z.string(),
  contact: z.string(),
  evidence:z.string(),

})

export function ComplaintForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    createComplaint(values).then(res=>console.log(res)).catch(error=>console.log(error))
  }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="md:w-[70vw] bg-white/10 p-5 rounded-lg w-[95vw] space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Your Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="heritage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Heritage Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="site"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Heritage Site</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="type of Heritage site" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="historical">Historical Building</SelectItem>
                  <SelectItem value="museum">Museum</SelectItem>
                  <SelectItem value="monument">Monument</SelectItem>
                  <SelectItem value="cultural">Cultural Landscape</SelectItem>
                  <SelectItem value="archaeological">Archaeological</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="damage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Type of damage </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Type of damage" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="neglect">Neglect</SelectItem>
                  <SelectItem value="vandalism">vandalism</SelectItem>
                  <SelectItem value="structural">Structural</SelectItem>
                  <SelectItem value="environmental">Environmental</SelectItem>
                  <SelectItem value="other">other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="descr"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your Complaint"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Contact</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="evidence"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Evidence</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-gray-700">Submit</Button>
      </form>
    </Form>
  )
}
