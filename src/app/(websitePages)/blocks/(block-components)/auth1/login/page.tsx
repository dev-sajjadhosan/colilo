"use client";

import { AppField } from "@/components/shared/form/AppField";
import AppSubmitButton from "@/components/shared/form/AppSubmitButton";
import Social3dProvider from "@/components/shared/social-provider/provider3d";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginZodSchema, TLoginZodSchema } from "@/zod/zod.validation";
import { useForm } from "@tanstack/react-form";
import {
  AtSign,
  Eye,
  EyeOff,
  Lock,
  LogIn,
  User2,
  Github,
  Facebook,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Login = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  //   const { mutateAsync, isPending } = useMutation({
  //     mutationFn: (payload: TLoginZodSchema) =>
  //     //   loginAction(payload, redirectPath),
  //   });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    onSubmit: async ({ value }) => {
      setServerError(null);
      try {
        // const result = (await mutateAsync(value)) as any;
        const result = {} as any;

        // console.log(result);

        if (!result.success) {
          setServerError(result.message || "Login failed");
          return;
        }
      } catch (error: any) {
        console.log(`Login failed: ${error.message}`);
        setServerError(`Login failed: ${error.message}`);
      }
    },
  });

  return (
    <div>
      <Card className="bg-muted/30 border-0 shadow-none h-172 rounded-3xl w-full">
        <CardContent className="flex items-center gap-9 justify-between h-full w-full">
          <Social3dProvider />

          <div className="flex flex-col justify-center gap-2 w-2xl h-full py-10">
            <h1 className="text-4xl font-normal">Welcome Back</h1>
            <p className="text-lg font-medium text-muted-foreground">
              Colilo - Thank You! for choosing us again.
            </p>
            <form
              method="POST"
              action="#"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
              className="space-y-5 mt-10"
            >
              <form.Field
                name="email"
                validators={{ onChange: loginZodSchema.shape.email }}
              >
                {(field) => (
                  <div className="flex flex-col gap-1">
                    {/* <Label>Email</Label> */}
                    <div className="flex items-center bg-muted/30 py-3 px-5 rounded-xl">
                      <AtSign className="size-5 text-muted-foreground mr-3" />
                      <span className="w-[2px] h-6 bg-muted-foreground"></span>
                      <Input
                        placeholder="Write your email@"
                        defaultValue={"devsajjadhosan@gmail.com"}
                        className="bg-transparent! border-0! text-md! font-semibold! text-muted-foreground"
                      />
                    </div>
                  </div>
                )}
              </form.Field>

              <form.Field
                name="password"
                validators={{ onChange: loginZodSchema.shape.password }}
              >
                {(field) => (
                  <div className="flex flex-col gap-1">
                    {/* <Label>Password</Label> */}
                    <div className="flex items-center bg-muted/30 py-3 px-5 rounded-xl">
                      <Lock className="size-5 text-muted-foreground mr-3" />
                      <span className="w-[2px] h-6 bg-muted-foreground"></span>
                      <Input
                        placeholder="Write your password"
                        defaultValue={"123456"}
                        type={showPassword ? "text" : "password"}
                        className="bg-transparent! border-0! text-md! font-semibold! text-muted-foreground"
                      />
                      <Button
                        type="button"
                        onClick={() => setShowPassword((value) => !value)}
                        variant="ghost"
                        size="icon-lg"
                        className="rounded-full"
                      >
                        {showPassword ? (
                          <EyeOff className="size-4" aria-hidden="true" />
                        ) : (
                          <Eye className="size-4" aria-hidden="true" />
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </form.Field>

              <div className="text-right mt-2">
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary hover:underline underline-offset-4"
                >
                  Forgot password?
                </Link>
              </div>

              {serverError && (
                <Alert variant={"destructive"}>
                  <AlertDescription>{serverError}</AlertDescription>
                </Alert>
              )}

              <form.Subscribe
                selector={(s) => [s.canSubmit, s.isSubmitting] as const}
              >
                {([canSubmit, isSubmitting]) => (
                  <Button
                    size={"xl"}
                    className="w-full h-15 group"
                    variant={"ghost"}
                  >
                    Log In
                    <LogIn className="duration-100 group-hover:translate-x-3" />
                  </Button>
                )}
              </form.Subscribe>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
