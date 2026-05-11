### nestjs 生命周期

请求进入
↓
Middleware
↓
Guard
↓
Interceptor（前置）
↓
Pipe
↓
Controller
↓
Service
↓
Interceptor（后置）
↓
返回 Response

---

任意环节抛异常
↓
ExceptionFilter

---

Guard 决定能不能进
Interceptor 包裹整个执行过程
Filter 专门处理异常

### 可视化数据库

npx prisma studio

### jwt

请求带 token
↓
Guard 解 token
↓
得到用户信息
↓
Decorator 获取 user
