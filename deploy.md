# 🚀 部署指南

## 方案1: Vercel部署 (推荐)

### 步骤1: 准备Git仓库
```bash
# 初始化Git仓库
git init
git add .
git commit -m "Initial commit: Spiral Animation Project"

# 推送到GitHub (或其他Git平台)
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```git branch

### 步骤2: Vercel部署
1. 访问 [vercel.com](https://vercel.com)
2. 用GitHub账号登录
3. 点击 "New Project"
4. 选择您的仓库
5. 框架自动识别为Next.js，直接部署

### 步骤3: 绑定自定义域名
1. 在Vercel项目设置中点击 "Domains"
2. 添加您的域名
3. 按提示设置DNS记录：
   - A记录: `@` → `76.76.19.61`
   - CNAME记录: `www` → `cname.vercel-dns.com`

---

## 方案2: 自己服务器部署

### 步骤1: 构建生产版本
```bash
npm run build
```

### 步骤2: 上传到服务器
```bash
# 使用scp上传
scp -r .next/ package.json 你的用户名@你的服务器IP:/path/to/your/site/

# 或使用rsync
rsync -avz --exclude node_modules . 你的用户名@你的服务器IP:/path/to/your/site/
```

### 步骤3: 服务器配置
```bash
# 在服务器上
cd /path/to/your/site/
npm install --production
npm start
```

### 步骤4: Nginx配置 (推荐)
```nginx
server {
    listen 80;
    server_name 你的域名.com www.你的域名.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 方案3: 静态导出部署

### 步骤1: 配置静态导出
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### 步骤2: 构建静态文件
```bash
npm run build
# 生成的文件在 out/ 目录
```

### 步骤3: 上传到静态托管
- **GitHub Pages**: 上传out目录内容
- **CDN**: 阿里云OSS、腾讯云COS等
- **传统主机**: 上传到public_html目录

---

## 🔧 优化建议

### 性能优化
```bash
# 安装压缩插件
npm install --save-dev @next/bundle-analyzer

# 分析打包大小
ANALYZE=true npm run build
```

### SEO优化
```javascript
// src/app/layout.tsx 中添加
export const metadata = {
  title: 'Amazing Spiral Animation',
  description: 'Beautiful 3D spiral particle animation',
  keywords: 'animation, 3D, particles, spiral, GSAP',
}
```

### 安全配置
```javascript
// next.config.js
const nextConfig = {
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
      ],
    },
  ],
}
```

---

## 📝 部署检查清单

- [ ] Git仓库已创建并推送
- [ ] 生产环境构建成功
- [ ] 域名DNS已正确配置
- [ ] SSL证书已配置 (HTTPS)
- [ ] 性能测试通过
- [ ] 移动端适配正常
- [ ] SEO元信息已设置 