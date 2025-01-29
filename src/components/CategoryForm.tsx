import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { supabase } from "@/integrations/supabase/client"

const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
})

interface CategoryFormProps {
  initialData?: {
    id: string
    name: string
    description: string
  }
}

export function CategoryForm({ initialData }: CategoryFormProps) {
  const { t } = useTranslation()
  const { toast } = useToast()
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (initialData) {
        const { error } = await supabase
          .from("categories")
          .update({
            name: values.name,
            description: values.description,
          })
          .eq("id", initialData.id)

        if (error) throw error

        toast({
          title: "Categoria atualizada com sucesso!",
        })
      } else {
        const { error } = await supabase.from("categories").insert({
          name: values.name,
          description: values.description,
        })

        if (error) throw error

        toast({
          title: "Categoria cadastrada com sucesso!",
        })
      }

      navigate("/categories")
    } catch (error) {
      console.error("Error saving category:", error)
      toast({
        variant: "destructive",
        title: "Erro ao salvar categoria",
        description: "Por favor, tente novamente.",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite o nome da categoria" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Digite a descrição da categoria"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/categories")}
          >
            Cancelar
          </Button>
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </Form>
  )
}