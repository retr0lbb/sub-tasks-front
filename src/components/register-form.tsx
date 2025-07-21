import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardAction } from "@/components/ui/card"
import { Button } from "./ui/button"
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

export function RegisterForm(){

    const registerDataSchema = z.object({
        userName: z.string().min(4).max(255),
        email: z.string().email({message: "Email invalido"}),
        password: z
            .string()
            .min(6, { message: "Senha muito curta" })
            .max(32, { message: "Senha muito longa" }),
    })

    interface RegisterData extends z.infer<typeof registerDataSchema> {}

    const registerForm = useForm<RegisterData>({
        resolver: zodResolver(registerDataSchema),
        defaultValues: {
            email: "",
            password: "",
            userName: ""
        }
    })

    async function handleRegister(data: RegisterData){
        console.log(data)
        registerForm.reset();
    }


    return(
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>Cadastre-se e organize os seus projetos pessoais</CardTitle>
                <CardDescription>Crie sua conta e aproveite</CardDescription>
                <CardAction>
                    <a href="/login"><Button variant="link">Login</Button></a>
                </CardAction>
            </CardHeader>
            <CardContent className="h-full">
                <Form {...registerForm}>
                  <form
                    onSubmit={registerForm.handleSubmit(handleRegister)}
                    className="w-full h-full flex flex-col gap-4"
                  >
                    <div className="flex flex-1 flex-col justify-center gap-2">
                        <FormField
                      control={registerForm.control}
                      name="userName"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Nome de Usuário</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Digite o seu nome de usuário..." />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />

                    <FormField
                      control={registerForm.control}
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
                      control={registerForm.control}
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
                    </div>

                    <Button className="mt-2" type="submit">Entrar</Button>
                  </form>
                </Form>
            </CardContent>
        </Card>
    )
}
