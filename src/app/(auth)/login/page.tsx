"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AuthForm from "./_component/AuthForm";
import { loginSchema, registerSchema } from "./_lib/validation";
import { handleLogin } from "./_actions/login";
import { handleRegister } from "./_actions/register";

export default function Page() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="h-[700px]">
            <CardHeader>
              <CardTitle className="text-center">Account</CardTitle>
              <CardDescription className="text-center">
                login to your account from here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <AuthForm
                schema={loginSchema}
                onSubmit={handleLogin}
                fields={[
                  {
                    name: "username",
                    label: "Username",
                    type: "text",
                    placeholder: "Enter your username",
                  },
                  {
                    name: "password",
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password",
                  },
                ]}
                buttonText="Login"
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card className="h-[700px]">
            <CardHeader>
              <CardTitle className="text-center">Register</CardTitle>
              <CardDescription className="text-center">
                register here. After saving, you can log in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <AuthForm
                schema={registerSchema}
                onSubmit={handleRegister}
                fields={[
                  {
                    name: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Enter your name",
                  },
                  {
                    name: "username",
                    label: "Username",
                    type: "text",
                    placeholder: "Enter your username",
                  },
                  {
                    name: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "Enter your email",
                  },
                  {
                    name: "password",
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password",
                  },
                  {
                    name: "confirmPassword",
                    label: "Confirm Password",
                    type: "password",
                    placeholder: "Confirm your password",
                  },
                ]}
                buttonText="Register"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
