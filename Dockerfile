# 使用官方的 Node.js 镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装应用依赖
RUN npm install

# 复制应用源代码
COPY . .

# 暴露应用运行的端口
EXPOSE 8080

# 启动应用
CMD ["npm", "start"]
