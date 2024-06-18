---
title: '通过 Docker 部署 Spring Boot 时如何配置多环境？'
date: '2023-12-24'
---

在 Spring Boot 中，我们可以通过 `application.properties` 或 `application.yml` 文件来配置环境变量。我这边是通过 `application-dev.yml` 和 `application-prod.yml` 来配置开发环境和生产环境。

在不使用 Docker 时，我们是在运行命令 `java -jar xxx.jar --spring.profiles.active=dev` 来指定环境的。

那么我们先使用该方式来部署一下。

1. 在项目中创建 `Dockerfile` 文件，内容如下：

    ```dockerfile
     FROM openjdk:11-jre-slim
     WORKDIR /app
     COPY target/spring-boot-multi-environment-0.0.1-SNAPSHOT.jar /app/app.jar
     CMD ["java", "-jar", "app.jar", "--spring.profiles.active=dev"]
    ```

2. 构建镜像: `docker build -t spring-boot-multi-environment .`
3. 部署镜像: `docker run -p 8080:8080 spring-boot-multi-environment`
如此就实现了通过 Docker 部署 Spring Boot。

而在项目中一般只有一个 `Dockerfile` 文件，如果通过修改 `Dockerfile` 文件来配置环境，就会显得十分繁琐，一点也不够优雅。而且不利于自动化部署。 那么如何更优雅的配置多环境呢？

在 Docker 中通常使用 -e 参数来指定环境变量，而 Spring boot 的`spring.profiles.active` 就是通过环境变量来配置环境。那么在 Docker 中如何配置环境呢？
`-e SPRING_PROFILES_ACTIVE=dev` 应该是这样吧，我们尝试下。

通过 `-e SPRING_PROFILES_ACTIVE=dev` 来指定环境，在我的项目中并没有生效。输出了如下信息：

```log
org.springframework.boot.context.config.InvalidConfigDataPropertyException: Property 'spring.profiles.active' imported from location 'class path resource [application-beta.yml]' is invalid in a profile specific resource [origin: class path resource [application-beta.yml] from app.jar - 5:13]
```

原来是因为我在 `application-beta.yml` 中配置了 `spring.profiles.active`，所以 `-e SPRING_PROFILES_ACTIVE=dev` 并没有生效。`

```yaml
spring:
    profiles:
        active: dev
...
```
我们可以尝试在 `application-beta.yml` 中移除 `spring.profiles.active`，果然成功跑起来了。
