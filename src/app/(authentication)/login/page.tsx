
'use client';

import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

export default function Login() {
  return (
    <Card className=" w-3/6">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Tên đăng nhập" />
          </div>
          <TextInput id="email1" placeholder="username" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Mật khẩu" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Nhớ thông tin đăng nhập</Label>
        </div>
        <Button type="submit">Đăng nhập</Button>
      </form>
    </Card>
  );
}
