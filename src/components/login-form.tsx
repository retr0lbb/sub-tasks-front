import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const loginFormDataSchema = z.object({
  email: z.string().email({ message: "Email invalido tente novamente" }),
  password: z
    .string()
    .min(6, { message: "Senha muito curta" })
    .max(32, { message: "Senha muito longa" }),
});

interface LoginFormData extends z.infer<typeof loginFormDataSchema> {}

export function LoginForm() {
  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginFormDataSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function myHandleSubmit(data: LoginFormData) {
    console.log(data);
    loginForm.reset();
  }

  return (
    <Card className="w-2/3 py-8">
      <CardHeader>
        <CardTitle>Acesse sua conta agora mesmo</CardTitle>
        <CardDescription>
          Coloque o seu email e senha abaixo e acesse sua conta imediatamente
        </CardDescription>
        <CardAction>
          <Button variant="link">Cadastre-se</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(myHandleSubmit)}
            className="w-full h-full flex flex-col gap-4"
          >
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Digite o seu email..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Digite o sua senha..."
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <Button type="submit">Entrar</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
