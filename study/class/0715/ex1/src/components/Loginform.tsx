export default function LoginForm() {
  return (
    <div className="flex flex-col items-center m-3 border">
      <h2>Login</h2>
      <input type="email" placeholder="이메일"></input>

      <input type="password" placeholder="비밀번호"></input>

      <button className="text-white bg-blue-600">로그인</button>
    </div>
  );
}
