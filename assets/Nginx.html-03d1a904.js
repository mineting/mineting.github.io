import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c,b as n,d as a,w as r,e as s,f as t}from"./app-a5b9b664.js";const u="/assets/image-20220425165532060-8fe939c2.png",d="/assets/image-20220425165945076-64fc6eb5.png",m="/assets/image-20220425170207764-8aaf9c66.png",v="/assets/image-20220425170549236-642b4799.png",b="/assets/image-20220425200236256-51b447b7.png",k="/assets/image-20220425220015488-b7021920.png",h="/assets/image-20220425220609428-efd4d8b2.png",g="/assets/image-20220426101753602-c8fa4620.png",f="/assets/image-20220426101823774-c1f554ea.png",x="/assets/image-20220426102041889-e8a3d699.png",_={},w={align:"center"},y=n("b",null,"Nginx",-1),q=n("h1",{id:"nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#"),s(" Nginx")],-1),P=n("h1",{id:"nginx简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx简介","aria-hidden":"true"},"#"),s(" nginx简介")],-1),T={href:"http://nginx.org/",target:"_blank",rel:"noopener noreferrer"},N=n("p",null,"​ Nginx (engine x) 是一个高性能的 HTTP 和反向代理 Web 服务器，同时也提供了 IMAP/POP3/SMTP 服务。Nginx 是由伊戈尔·赛索耶夫为俄罗斯访问量第二的 Rambler.ru站点（俄文：Рамблер）开发的，第一个公开版本0.1.0发布于2004年10月4日。",-1),E={href:"https://baike.baidu.com/item/%E5%8D%87%E7%BA%A7/8358284",target:"_blank",rel:"noopener noreferrer"},A=t('<h1 id="nginx相关概念" tabindex="-1"><a class="header-anchor" href="#nginx相关概念" aria-hidden="true">#</a> Nginx相关概念</h1><h2 id="正向代理" tabindex="-1"><a class="header-anchor" href="#正向代理" aria-hidden="true">#</a> 正向代理</h2><p>正向代理：如果把局域网外的 Internet 想象成一个巨大的资源库，则局域网中的客户端要访问 Internet，则需要通过代理服务器来访问，这种代理服务就称为正向代理。</p><p><strong>需要在客户端配置代理服务器进行指定网站访问。</strong></p><figure><img src="'+u+'" alt="image-正向代理" tabindex="0" loading="lazy"><figcaption>image-正向代理</figcaption></figure><h2 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h2><p>​ 反向代理，其实客户端对代理是无感知的，因为客户端不需要任何配置就可以访问，我们只需要将请求发送到反向代理服务器，由反向代理服务器去选择目标服务器获取数据后，在返回给客户端，此时反向代理服务器和目标服务器对外就是一个服务器，<strong>暴露的是代理服务器地址，隐藏了真实服务器 IP 地址</strong>。</p><figure><img src="'+d+'" alt="image-反向代理" tabindex="0" loading="lazy"><figcaption>image-反向代理</figcaption></figure><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2><p>​ 提高单个机器的性能配置也无法解决高并发的问题，因此增加服务器的数量，然后将请求分发到各个服务器上，将原先请求集中到单个服务器上的情况改为将请求分发到多个服务器上，将负载分发到不同的服务器，也就是我们所说的负载均衡。</p><figure><img src="'+m+'" alt="image-负载均衡" tabindex="0" loading="lazy"><figcaption>image-负载均衡</figcaption></figure><h2 id="动静分离" tabindex="-1"><a class="header-anchor" href="#动静分离" aria-hidden="true">#</a> 动静分离</h2><p>​ 为了加快网站的解析速度，可以把动态页面和静态页面由不同的服务器来解析，加快解析速度。降低原来单个服务器的压力。</p><figure><img src="'+v+'" alt="image-动静分离" tabindex="0" loading="lazy"><figcaption>image-动静分离</figcaption></figure><h1 id="nginx的安装" tabindex="-1"><a class="header-anchor" href="#nginx的安装" aria-hidden="true">#</a> nginx的安装</h1>',15),C={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},I=t(`<h2 id="nginx安装步骤" tabindex="-1"><a class="header-anchor" href="#nginx安装步骤" aria-hidden="true">#</a> nginx安装步骤</h2><h3 id="安装编译工具以及库文件" tabindex="-1"><a class="header-anchor" href="#安装编译工具以及库文件" aria-hidden="true">#</a> 安装编译工具以及库文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">make</span> zlib zlib-devel gcc-c++ libtool  openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装-pcre" tabindex="-1"><a class="header-anchor" href="#安装-pcre" aria-hidden="true">#</a> 安装 pcre</h3><p>PCRE 作用：让 Nginx 支持 Rewrite 功能。</p>`,5),S={href:"http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz",target:"_blank",rel:"noopener noreferrer"},$=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost src<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/src</span>
<span class="token punctuation">[</span>root@localhost src<span class="token punctuation">]</span><span class="token comment"># wget  http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解压并进入pcre目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost src<span class="token punctuation">]</span><span class="token comment"># tar zxvf pcre-8.35.tar.gz</span>
<span class="token punctuation">[</span>root@localhost src<span class="token punctuation">]</span><span class="token comment"># cd pcre-8.35</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编译安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost pcre-8.35<span class="token punctuation">]</span><span class="token comment"># ./configure</span>
<span class="token punctuation">[</span>root@localhost pcre-8.35<span class="token punctuation">]</span><span class="token comment"># make &amp;&amp; make install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看pcre版本：pcre-config --version</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost pcre-8.35<span class="token punctuation">]</span><span class="token comment"># pcre-config --version</span>
<span class="token number">8.35</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a> 安装 nginx</h3><p>下载 nginx：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost pcre-8.35<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/src/</span>
<span class="token punctuation">[</span>root@localhost src<span class="token punctuation">]</span><span class="token comment"># wget http://nginx.org/download/nginx-1.16.1.tar.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解压并进入nginx目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost src<span class="token punctuation">]</span><span class="token comment"># tar zxvf nginx-1.16.1.tar.gz</span>
<span class="token punctuation">[</span>root@localhost src<span class="token punctuation">]</span><span class="token comment"># cd nginx-1.16.1/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编译并安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost nginx-1.16.1<span class="token punctuation">]</span><span class="token comment"># ./configure</span>
<span class="token punctuation">[</span>root@localhost nginx-1.16.1<span class="token punctuation">]</span><span class="token comment"># make &amp;&amp; make install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看安装版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost nginx-1.16.1<span class="token punctuation">]</span><span class="token comment"># /usr/local/nginx/sbin/nginx -v</span>
nginx version: nginx/1.16.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>命令位置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># ll /usr/local/nginx/</span>
总用量 <span class="token number">4</span>
drwxr-xr-x. <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 conf
drwxr-xr-x. <span class="token number">2</span> root root   <span class="token number">40</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 html
drwxr-xr-x. <span class="token number">2</span> root root    <span class="token number">6</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 logs
drwxr-xr-x. <span class="token number">2</span> root root   <span class="token number">19</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 sbin
<span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/nginx/</span>
<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># ll sbin</span>
总用量 <span class="token number">3740</span>
-rwxr-xr-x. <span class="token number">1</span> root root <span class="token number">3826240</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 nginx
<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># ll conf/</span>
总用量 <span class="token number">68</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">1077</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 fastcgi.conf
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">1077</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 fastcgi.conf.default
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">1007</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 fastcgi_params
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">1007</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 fastcgi_params.default
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">2837</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 koi-utf
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">2223</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 koi-win
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">5231</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 mime.types
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">5231</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 mime.types.default
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">2656</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 nginx.conf
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">2656</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 nginx.conf.default
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">636</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 scgi_params
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">636</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 scgi_params.default
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">664</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 uwsgi_params
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">664</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 uwsgi_params.default
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">3610</span> <span class="token number">10</span>月  <span class="token number">9</span> 00:43 win-utf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件位置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost conf<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/usr/local/nginx/conf
<span class="token punctuation">[</span>root@localhost conf<span class="token punctuation">]</span><span class="token comment"># ls |grep nginx.conf</span>
nginx.conf
nginx.conf.default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开放80端口" tabindex="-1"><a class="header-anchor" href="#开放80端口" aria-hidden="true">#</a> 开放80端口</h2><p>对于CentOS7：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看开放的端口号</span>
firewall-cmd --list-all
<span class="token comment"># 设置开放的端口号</span>
firewall-cmd --add-service<span class="token operator">=</span>http <span class="token parameter variable">--permanent</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>
<span class="token comment"># 重启防火墙</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：开放端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --list-all</span>
public <span class="token punctuation">(</span>active<span class="token punctuation">)</span>
  target: default
  icmp-block-inversion: no
  interfaces: ens33
  sources:
  services: dhcpv6-client <span class="token function">ssh</span>
  ports:
  protocols:
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
<span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --add-service=http --permanent</span>
success
<span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --add-port=80/tcp --permanent</span>
success
<span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --reload</span>
success
<span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --list-all</span>
public <span class="token punctuation">(</span>active<span class="token punctuation">)</span>
  target: default
  icmp-block-inversion: no
  interfaces: ens33
  sources:
  services: dhcpv6-client http <span class="token function">ssh</span>
  ports: <span class="token number">80</span>/tcp
  protocols:
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
<span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h2><h3 id="临时修改" tabindex="-1"><a class="header-anchor" href="#临时修改" aria-hidden="true">#</a> 临时修改</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost conf<span class="token punctuation">]</span><span class="token comment"># export PATH=$PATH:/usr/local/nginx/sbin</span>
<span class="token punctuation">[</span>root@localhost conf<span class="token punctuation">]</span><span class="token comment"># nginx -v</span>
nginx version: nginx/1.16.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="永久修改" tabindex="-1"><a class="header-anchor" href="#永久修改" aria-hidden="true">#</a> 永久修改</h3><p>修改 /etc/profile文件</p><p>source /etc/profile</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/profile</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token builtin class-name">unset</span> i
<span class="token builtin class-name">unset</span> <span class="token parameter variable">-f</span> pathmunge

<span class="token builtin class-name">export</span> <span class="token assign-left variable">NGINX_HOME</span><span class="token operator">=</span>/usr/local/nginx
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${NGINX_HOME}</span>/sbin:<span class="token variable">\${<span class="token environment constant">PATH</span>}</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># source /etc/profile</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo $PATH</span>
/usr/local/nginx/sbin:/usr/local/nginx/sbin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># nginx -s reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx服务自启动" tabindex="-1"><a class="header-anchor" href="#nginx服务自启动" aria-hidden="true">#</a> Nginx服务自启动</h2><p>CentOS7中：</p><p>​ 1. 关闭 nginx 进程</p><p>​ 2. 在 /usr/lib/systemd/system/ 目录下，创建nginx.service文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd /usr/lib/systemd/system</span>
<span class="token punctuation">[</span>root@localhost system<span class="token punctuation">]</span><span class="token comment"># vim nginx.service</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx <span class="token function">service</span>
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target 
 
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span> 
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token comment"># 路径对应安装路径</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> quit
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true 
 
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span> 
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
<span class="token comment"># 必须重新加载</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># systemctl daemon-reload</span>
<span class="token punctuation">[</span>root@localhost system<span class="token punctuation">]</span><span class="token comment"># systemctl start nginx</span>
<span class="token punctuation">[</span>root@localhost system<span class="token punctuation">]</span><span class="token comment"># systemctl status nginx</span>
● nginx.service - nginx
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/nginx.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since 一 <span class="token number">2022</span>-04-25 <span class="token number">19</span>:59:11 CST<span class="token punctuation">;</span> 9s ago
  Process: <span class="token number">3922</span> <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
 Main PID: <span class="token number">3925</span> <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
    Tasks: <span class="token number">2</span>
   CGroup: /system.slice/nginx.service
           ├─3925 nginx: master process /usr/local/nginx/sbin/nginx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
           └─3926 nginx: worker process

<span class="token number">4</span>月 <span class="token number">25</span> <span class="token number">19</span>:59:11 localhost.localdomain systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Starting nginx<span class="token punctuation">..</span>.
<span class="token number">4</span>月 <span class="token number">25</span> <span class="token number">19</span>:59:11 localhost.localdomain systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Started nginx.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="nginx-常用命令" tabindex="-1"><a class="header-anchor" href="#nginx-常用命令" aria-hidden="true">#</a> Nginx 常用命令</h1><p>查看版本：./nginx -v</p><p>启动：./nginx</p><p>重载配置文件：./nginx -s reload</p><p>停止：./nginx -s stop</p><p>特定配置文件启动 nginx：./nginx -c path /nginx.conf</p><p>测试当前配置文件是否正确：./nginx -t</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/usr/local/nginx/sbin
<span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># ./nginx -v</span>
nginx version: nginx/1.6.2
<span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># ./nginx</span>
<span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># ps -ef|grep nginx</span>
root      <span class="token number">64001</span>      <span class="token number">1</span>  <span class="token number">0</span> <span class="token number">17</span>:43 ?        00:00:00 nginx: master process ./nginx
nobody    <span class="token number">64002</span>  <span class="token number">64001</span>  <span class="token number">0</span> <span class="token number">17</span>:43 ?        00:00:00 nginx: worker process
root      <span class="token number">64004</span>  <span class="token number">56888</span>  <span class="token number">0</span> <span class="token number">17</span>:43 pts/0    00:00:00 <span class="token function">grep</span> <span class="token parameter variable">--color</span><span class="token operator">=</span>auto nginx
<span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># ./nginx -s reload</span>
<span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># ./nginx -s stop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：nginx会启动两个进程</strong></p><h1 id="ngin配置文件" tabindex="-1"><a class="header-anchor" href="#ngin配置文件" aria-hidden="true">#</a> ngin配置文件</h1><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost conf<span class="token punctuation">]</span><span class="token comment"># cat -n nginx.conf</span>
     <span class="token number">1</span>
     <span class="token number">2</span>  <span class="token comment">#user  nobody;</span>
     <span class="token number">3</span>  worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>
     <span class="token number">4</span>
     <span class="token number">5</span>  <span class="token comment">#error_log  logs/error.log;</span>
     <span class="token number">6</span>  <span class="token comment">#error_log  logs/error.log  notice;</span>
     <span class="token number">7</span>  <span class="token comment">#error_log  logs/error.log  info;</span>
     <span class="token number">8</span>
     <span class="token number">9</span>  <span class="token comment">#pid        logs/nginx.pid;</span>
    <span class="token number">11</span>
    <span class="token number">12</span>  events <span class="token punctuation">{</span>
    <span class="token number">13</span>      worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
    <span class="token number">14</span>  <span class="token punctuation">}</span>
    <span class="token number">15</span>
    <span class="token number">17</span>  http <span class="token punctuation">{</span>
    <span class="token number">18</span>      include       mime.types<span class="token punctuation">;</span>
    <span class="token number">19</span>      default_type  application/octet-stream<span class="token punctuation">;</span>
    <span class="token number">20</span>
    <span class="token number">21</span>      <span class="token comment">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token number">22</span>      <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token number">23</span>      <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>
    <span class="token number">24</span>
    <span class="token number">25</span>      <span class="token comment">#access_log  logs/access.log  main;</span>
    <span class="token number">26</span>
    <span class="token number">27</span>      sendfile        on<span class="token punctuation">;</span>
    <span class="token number">28</span>      <span class="token comment">#tcp_nopush     on;</span>
    <span class="token number">29</span>
    <span class="token number">30</span>      <span class="token comment">#keepalive_timeout  0;</span>
    <span class="token number">31</span>      keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>
    <span class="token number">32</span>
    <span class="token number">33</span>      <span class="token comment">#gzip  on;</span>
    <span class="token number">34</span>
    <span class="token number">35</span>      server <span class="token punctuation">{</span>
    <span class="token number">36</span>          listen       <span class="token number">80</span><span class="token punctuation">;</span>
    <span class="token number">37</span>          server_name  localhost<span class="token punctuation">;</span>
    <span class="token number">38</span>
    <span class="token number">39</span>          <span class="token comment">#charset koi8-r;</span>
    <span class="token number">40</span>
    <span class="token number">41</span>          <span class="token comment">#access_log  logs/host.access.log  main;</span>
    <span class="token number">42</span>
    <span class="token number">43</span>          location / <span class="token punctuation">{</span>
    <span class="token number">44</span>              root   html<span class="token punctuation">;</span>
    <span class="token number">45</span>              index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token number">46</span>          <span class="token punctuation">}</span>
    <span class="token number">47</span>
    <span class="token number">48</span>          <span class="token comment">#error_page  404              /404.html;</span>
    <span class="token number">49</span>
    <span class="token number">50</span>          <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token number">51</span>          <span class="token comment">#</span>
    <span class="token number">52</span>          error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    <span class="token number">53</span>          location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
    <span class="token number">54</span>              root   html<span class="token punctuation">;</span>
    <span class="token number">55</span>          <span class="token punctuation">}</span>
    <span class="token number">56</span>
    <span class="token number">57</span>          <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
    <span class="token number">58</span>          <span class="token comment">#</span>
    <span class="token number">59</span>          <span class="token comment">#location ~ \\.php$ {</span>
    <span class="token number">60</span>          <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
    <span class="token number">61</span>          <span class="token comment">#}</span>
    <span class="token number">62</span>
    <span class="token number">63</span>          <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
    <span class="token number">64</span>          <span class="token comment">#</span>
    <span class="token number">65</span>          <span class="token comment">#location ~ \\.php$ {</span>
    <span class="token number">66</span>          <span class="token comment">#    root           html;</span>
    <span class="token number">67</span>          <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
    <span class="token number">68</span>          <span class="token comment">#    fastcgi_index  index.php;</span>
    <span class="token number">69</span>          <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
    <span class="token number">70</span>          <span class="token comment">#    include        fastcgi_params;</span>
    <span class="token number">71</span>          <span class="token comment">#}</span>
    <span class="token number">72</span>
    <span class="token number">73</span>          <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
    <span class="token number">74</span>          <span class="token comment"># concurs with nginx&#39;s one</span>
    <span class="token number">75</span>          <span class="token comment">#</span>
    <span class="token number">76</span>          <span class="token comment">#location ~ /\\.ht {</span>
    <span class="token number">77</span>          <span class="token comment">#    deny  all;</span>
    <span class="token number">78</span>          <span class="token comment">#}</span>
    <span class="token number">79</span>      <span class="token punctuation">}</span>
    <span class="token number">81</span>
    <span class="token number">82</span>      <span class="token comment"># another virtual host using mix of IP-, name-, and port-based configuration</span>
    <span class="token number">83</span>      <span class="token comment">#</span>
    <span class="token number">84</span>      <span class="token comment">#server {</span>
    <span class="token number">85</span>      <span class="token comment">#    listen       8000;</span>
    <span class="token number">86</span>      <span class="token comment">#    listen       somename:8080;</span>
    <span class="token number">87</span>      <span class="token comment">#    server_name  somename  alias  another.alias;</span>
    <span class="token number">88</span>
    <span class="token number">89</span>      <span class="token comment">#    location / {</span>
    <span class="token number">90</span>      <span class="token comment">#        root   html;</span>
    <span class="token number">91</span>      <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token number">92</span>      <span class="token comment">#    }</span>
    <span class="token number">93</span>      <span class="token comment">#}</span>
    <span class="token number">94</span>
    <span class="token number">96</span>      <span class="token comment"># HTTPS server</span>
    <span class="token number">97</span>      <span class="token comment">#</span>
    <span class="token number">98</span>      <span class="token comment">#server {</span>
    <span class="token number">99</span>      <span class="token comment">#    listen       443 ssl;</span>
   <span class="token number">100</span>      <span class="token comment">#    server_name  localhost;</span>
   <span class="token number">101</span>
   <span class="token number">102</span>      <span class="token comment">#    ssl_certificate      cert.pem;</span>
   <span class="token number">103</span>      <span class="token comment">#    ssl_certificate_key  cert.key;</span>
   <span class="token number">104</span>
   <span class="token number">105</span>      <span class="token comment">#    ssl_session_cache    shared:SSL:1m;</span>
   <span class="token number">106</span>      <span class="token comment">#    ssl_session_timeout  5m;</span>
   <span class="token number">107</span>
   <span class="token number">108</span>      <span class="token comment">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
   <span class="token number">109</span>      <span class="token comment">#    ssl_prefer_server_ciphers  on;</span>
   <span class="token number">110</span>
   <span class="token number">111</span>      <span class="token comment">#    location / {</span>
   <span class="token number">112</span>      <span class="token comment">#        root   html;</span>
   <span class="token number">113</span>      <span class="token comment">#        index  index.html index.htm;</span>
   <span class="token number">114</span>      <span class="token comment">#    }</span>
   <span class="token number">115</span>      <span class="token comment">#}</span>
   <span class="token number">116</span>
   <span class="token number">117</span>  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件说明：</p><p>​ 可以将 nginx.conf 配置文件分为三部分。</p><h2 id="第一部分-全局块" tabindex="-1"><a class="header-anchor" href="#第一部分-全局块" aria-hidden="true">#</a> 第一部分：全局块</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>     <span class="token number">3</span>  worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 从配置文件开始到 events 块之间的内容，主要会设置一些影响 nginx 服务器整体运行的配置指令，主要包括配置运行 Nginx 服务器的用户（组）、允许生成的 worker process 数，进程 PID 存放路径、日志存放路径和类型以及配置文件的引入等。</p><p>​ 这是 Nginx 服务器并发处理服务的关键配置，worker_processes 值越大，可以支持的并发处理量也越多，但是会受到硬件、软件等设备的制约。</p><h2 id="第二部分-events-块" tabindex="-1"><a class="header-anchor" href="#第二部分-events-块" aria-hidden="true">#</a> 第二部分：events 块</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token number">12</span>  events <span class="token punctuation">{</span>
    <span class="token number">13</span>      worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
    <span class="token number">14</span>  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ events 块涉及的指令主要影响 Nginx 服务器与用户的网络连接，常用的设置包括是否开启对多 work process 下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型来处理连接请求，每个 word process 可以同时支持的最大连接数等。 上述例子就表示每个 work process 支持的最大连接数为 1024。这部分的配置对 Nginx 的性能影响较大，在实际中应该灵活配置。</p><h2 id="第三部分-http块" tabindex="-1"><a class="header-anchor" href="#第三部分-http块" aria-hidden="true">#</a> 第三部分：http块</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token number">17</span>  http <span class="token punctuation">{</span>
    <span class="token number">18</span>      include       mime.types<span class="token punctuation">;</span>
    <span class="token number">19</span>      default_type  application/octet-stream<span class="token punctuation">;</span>
    <span class="token number">21</span>      <span class="token comment">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token number">22</span>      <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token number">23</span>      <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>
    <span class="token number">25</span>      <span class="token comment">#access_log  logs/access.log  main;</span>
    <span class="token number">27</span>      sendfile        on<span class="token punctuation">;</span>
    <span class="token number">28</span>      <span class="token comment">#tcp_nopush     on;</span>
    <span class="token number">30</span>      <span class="token comment">#keepalive_timeout  0;</span>
    <span class="token number">31</span>      keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>
    <span class="token number">33</span>      <span class="token comment">#gzip  on;</span>
    <span class="token number">35</span>      server <span class="token punctuation">{</span>
    <span class="token number">36</span>          listen       <span class="token number">80</span><span class="token punctuation">;</span>
    <span class="token number">37</span>          server_name  localhost<span class="token punctuation">;</span>
    <span class="token number">39</span>          <span class="token comment">#charset koi8-r;</span>
    <span class="token number">41</span>          <span class="token comment">#access_log  logs/host.access.log  main;</span>
    <span class="token number">43</span>          location / <span class="token punctuation">{</span>
    <span class="token number">44</span>              root   html<span class="token punctuation">;</span>
    <span class="token number">45</span>              index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token number">46</span>          <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 该部分是Nginx 服务器配置中最频繁的部分，代理、缓存和日志定义等绝大多数功能和第三方模块的配置都在这里。 需要注意的是：http 块也可以包括 http 全局块、server 块。</p><h3 id="http-全局块" tabindex="-1"><a class="header-anchor" href="#http-全局块" aria-hidden="true">#</a> http 全局块</h3><p>​ http 全局块配置的指令包括文件引入、MIME-TYPE 定义、日志自定义、连接超时时间、单链接请求数上限等。</p><h3 id="server-块" tabindex="-1"><a class="header-anchor" href="#server-块" aria-hidden="true">#</a> server 块</h3><p>​ 这块和虚拟主机有密切关系，虚拟主机从用户角度看，和一台独立的硬件主机是完全一样的，该技术的产生是为了 节省互联网服务器硬件成本。 <strong>每个 http 块可以包括多个 server 块，而每个 server 块就相当于一个虚拟主机。</strong> 而每个 server 块也分为全局 server 块，以及可以同时包含多个 location 块。</p><ol><li><p>全局 server 块：最常见的配置是本虚拟机主机的监听配置和本虚拟主机的名称或 IP 配置。</p></li><li><p>location 块：一个 server 块可以配置多个 location 块。 这块的主要作用是基于 Nginx 服务器接收到的请求字符串（例如 server_name/uri-string），对虚拟主机名称 （也可以是 IP 别名）之外的字符串（例如 前面的 /uri-string）进行匹配，对特定的请求进行处理。地址定向、数据缓 存和应答控制等功能，还有许多第三方模块的配置也在这里进行。</p></li></ol><h1 id="配置实例" tabindex="-1"><a class="header-anchor" href="#配置实例" aria-hidden="true">#</a> 配置实例</h1><h2 id="示例一-反向代理" tabindex="-1"><a class="header-anchor" href="#示例一-反向代理" aria-hidden="true">#</a> 示例一：反向代理</h2>`,68),O={href:"http://www.123.com",target:"_blank",rel:"noopener noreferrer"},H={href:"http://www.123.com",target:"_blank",rel:"noopener noreferrer"},z=t(`<p>修改文件：C:\\Windows\\System32\\drivers\\etc\\hosts，配置域名和IP的对应关系。</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>192.168.100.100		www.123.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步：配置 server 块</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token number">35</span>     server <span class="token punctuation">{</span>
 <span class="token number">36</span>         listen       <span class="token number">80</span><span class="token punctuation">;</span>
 		   <span class="token comment"># 修改地址</span>
 <span class="token number">37</span>         server_name  <span class="token number">192.168</span>.100.100<span class="token punctuation">;</span>
 <span class="token number">38</span>
 <span class="token number">39</span>         <span class="token comment">#charset koi8-r;</span>
 <span class="token number">40</span>
 <span class="token number">41</span>         <span class="token comment">#access_log  logs/host.access.log  main;</span>
 <span class="token number">43</span>         location / <span class="token punctuation">{</span>
 <span class="token number">44</span>             root   html<span class="token punctuation">;</span>
 			    <span class="token comment"># 添加 proxy_pass</span>
 <span class="token number">45</span>             proxy_pass http://192.168.100.100:8080<span class="token punctuation">;</span>
 <span class="token number">46</span>             index  index.html index.htm<span class="token punctuation">;</span>
 <span class="token number">47</span>         <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：配置 tomcat 环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/profile
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NGINX_HOME</span><span class="token operator">=</span>/usr/local/nginx
<span class="token builtin class-name">export</span> <span class="token assign-left variable">TOMCAT_HOME</span><span class="token operator">=</span>/opt/tomcat/apache-tomcat-8.5.78/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${NGINX_HOME}</span>/sbin:<span class="token variable">\${TOMCAT_HOME}</span><span class="token builtin class-name">:</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span>

<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第四步：开放端口8080</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看开放的端口号</span>
firewall-cmd --list-all
<span class="token comment"># 设置开放的端口号</span>
firewall-cmd --add-service<span class="token operator">=</span>http <span class="token parameter variable">--permanent</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">8080</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">8081</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">9001</span>/tcp <span class="token parameter variable">--permanent</span>
<span class="token comment"># 重启防火墙</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),D={href:"http://www.123.com",target:"_blank",rel:"noopener noreferrer"},B=t('<figure><img src="'+b+`" alt="image-tomcat主页面" tabindex="0" loading="lazy"><figcaption>image-tomcat主页面</figcaption></figure><p>第四步：查看tomcat日志文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tail</span> <span class="token parameter variable">-f</span> logs/catalina.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="示例二-反向代理" tabindex="-1"><a class="header-anchor" href="#示例二-反向代理" aria-hidden="true">#</a> 示例二：反向代理</h2><p>​ 使用 nginx 反向代理，根据访问的路径跳转到不同端口的服务中 nginx 监听端口为 9001。</p>`,5),L={href:"http://192.168.100.100:9001/edu/",target:"_blank",rel:"noopener noreferrer"},M=t(`<p>​ 访问 http:// 192.168.100.100:9001/vod/ 直接跳转到 192.168.100.100:8081</p><p>第一步：准备两个tomcat，端口分别为 8080 和 8081。</p><p><strong>【注意】启动两个 Tomcat 时，直接在 tomcat/bin 目录启动，如果配置了 Tomcat 的环境变量，应该配置多个，要么就不配。</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost tomcat<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/opt/tomcat
<span class="token punctuation">[</span>root@localhost tomcat<span class="token punctuation">]</span><span class="token comment"># mkdir tomcat8081</span>
<span class="token comment"># 注意拷贝多级目录时需要加递归参数 -r，否则不生效，提示：cp: 略过目录&quot;apache-tomcat-8.5.70&quot;</span>
<span class="token punctuation">[</span>root@localhost tomcat<span class="token punctuation">]</span><span class="token comment"># cp -r apache-tomcat-8.5.78/. tomcat8081/</span>
<span class="token punctuation">[</span>root@localhost tomcat<span class="token punctuation">]</span><span class="token comment"># vim tomcat8081/conf/server.xml</span>
 <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
 <span class="token comment"># 修改8005</span>
 <span class="token number">22</span> <span class="token operator">&lt;</span>Server <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token string">&quot;8015&quot;</span> <span class="token assign-left variable">shutdown</span><span class="token operator">=</span><span class="token string">&quot;SHUTDOWN&quot;</span><span class="token operator">&gt;</span>
 <span class="token number">23</span>   <span class="token operator">&lt;</span>Listener <span class="token assign-left variable">className</span><span class="token operator">=</span><span class="token string">&quot;org.apache.catalina.startup.VersionLoggerListener&quot;</span> /<span class="token operator">&gt;</span>
 <span class="token comment"># 修改8081以及8443</span>
 <span class="token number">69</span>     <span class="token operator">&lt;</span>Connector <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token string">&quot;8081&quot;</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span><span class="token string">&quot;HTTP/1.1&quot;</span>
 <span class="token number">70</span>                <span class="token assign-left variable">connectionTimeout</span><span class="token operator">=</span><span class="token string">&quot;20000&quot;</span>
 <span class="token number">71</span>                <span class="token assign-left variable">redirectPort</span><span class="token operator">=</span><span class="token string">&quot;8444&quot;</span> /<span class="token operator">&gt;</span>
 <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：测试页面 test.html</p><p>cd /opt/tomcat/apache-tomcat-8.5.78/webapps/edu</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>
    tomcat 8080
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd /opt/tomcat/tomcat8081/webapps/vod</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>
    tomcat 8081
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>将测试页面分别放在 webapps 下面的某一个具体目录，如果直接放在 webapps 下是不会访问的（404）。</strong></p><p>第三步：配置Nginx</p><p>可以配置多个 server 块。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token number">85</span>     server <span class="token punctuation">{</span>
 <span class="token number">86</span>         listen       <span class="token number">9001</span><span class="token punctuation">;</span>
 <span class="token number">87</span>         <span class="token comment"># server_name:主机名，hostname</span>
 <span class="token number">88</span>         server_name  <span class="token number">192.168</span>.100.100<span class="token punctuation">;</span>
 <span class="token number">89</span>
 <span class="token number">90</span>         location ~ /edu/ <span class="token punctuation">{</span>
 <span class="token number">91</span>                 proxy_pass http://192.168.100.100:8080<span class="token punctuation">;</span>
 <span class="token number">93</span>         <span class="token punctuation">}</span>
 <span class="token number">94</span>
 <span class="token number">95</span>         location ~ /vod/ <span class="token punctuation">{</span>
 <span class="token number">96</span>                 proxy_pass http://192.168.100.100:8081<span class="token punctuation">;</span>
 <span class="token number">97</span>         <span class="token punctuation">}</span>
 <span class="token number">98</span>     <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果未启动 tomcat，则会报错：502 Bad GateWay</p><p>第四步：启动 nginx 和 tomcat 测试</p>`,15),R={href:"http://192.168.100.100:9001/vod/test.html",target:"_blank",rel:"noopener noreferrer"},U={href:"http://192.168.100.100:9001/edu/test.html",target:"_blank",rel:"noopener noreferrer"},W=n("h2",{id:"示例三-负载均衡",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#示例三-负载均衡","aria-hidden":"true"},"#"),s(" 示例三：负载均衡")],-1),V={href:"http://192.168.100.100edu/test.html%EF%BC%8C%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E6%95%88%E6%9E%9C%EF%BC%8C%E5%B9%B3%E5%9D%87",target:"_blank",rel:"noopener noreferrer"},G=t(`<p>第一步：在两个tomcat中创建edu目录，放入test.html</p><p>第二步：在 nginx.conf 中的 http 块进行负载均衡配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token number">34</span>     <span class="token comment"># 负载均衡配置</span>
 <span class="token number">35</span>     upstream myserver<span class="token punctuation">{</span>
 <span class="token number">36</span>         server  <span class="token number">192.168</span>.100.100:8080<span class="token punctuation">;</span>
 <span class="token number">37</span>         server  <span class="token number">192.168</span>.100.100:8081<span class="token punctuation">;</span>
 <span class="token number">38</span>     <span class="token punctuation">}</span>
 <span class="token number">39</span>
 <span class="token number">40</span>     server <span class="token punctuation">{</span>
 <span class="token number">41</span>         listen       <span class="token number">80</span><span class="token punctuation">;</span>
 <span class="token number">42</span>         server_name  <span class="token number">192.168</span>.100.100<span class="token punctuation">;</span>
 <span class="token number">43</span>
 <span class="token number">44</span>         <span class="token comment">#charset koi8-r;</span>
 <span class="token number">45</span>
 <span class="token number">46</span>         <span class="token comment">#access_log  logs/host.access.log  main;</span>
 <span class="token number">47</span>
 <span class="token number">48</span>         location / <span class="token punctuation">{</span>
 <span class="token number">49</span>             root   html<span class="token punctuation">;</span>
 <span class="token number">50</span>             proxy_pass http://myserver<span class="token punctuation">;</span>
 <span class="token number">51</span>             index  index.html index.htm<span class="token punctuation">;</span>
 <span class="token number">52</span>         <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),F={href:"http://192.168.100.100/edu/test.html",target:"_blank",rel:"noopener noreferrer"},K=t(`<h2 id="nginx-分配服务器策略" tabindex="-1"><a class="header-anchor" href="#nginx-分配服务器策略" aria-hidden="true">#</a> nginx 分配服务器策略</h2><p>第一种 轮询（默认）</p><p>​ 每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器 down 掉，能自动剔除。</p><p>第二种</p><p>​ weight weight 代表权重默认为 1，权重越高被分配的客户端越多</p><p>第三种</p><p>​ ip_hash 每个请求按访问 ip 的 hash 结果分配，这样每个访客固定访问一个后端服务器</p><p>第四种</p><p>​ fair（第三方） 按后端服务器的响应时间来分配请求，响应时间短的优先分配。</p><h2 id="示例四-动静分离" tabindex="-1"><a class="header-anchor" href="#示例四-动静分离" aria-hidden="true">#</a> 示例四：动静分离</h2><p>​ 通过 location 指定不同的后缀名实现不同的请求转发。通过 expires 参数设置，可以使浏览器缓存过期时间，减少与服务器之前的请求和流量。</p><p>​ 具体 Expires 定义：是给一个资源设定一个过期时间，也就是说无需去服务端验证，直接通过浏览器自身确认是否过期即可， 所以不会产生额外的流量。此种方法非常适合不经常变动的资源。（如果经常更新的文件， 不建议使用 Expires 来缓存），我这里设置 3d，表示在这 3 天之内访问这个 URL，发送一 个请求，比对服务器该文件最后更新时间没有变化，则不会从服务器抓取，返回状态码 304， 如果有修改，则直接从服务器重新下载，返回状态码 200。</p><p>第一步：在 /opt/nginxData 目录下准备两个文件夹 image 和 www，分别存储静态资源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost tomcat<span class="token punctuation">]</span><span class="token comment"># cd /opt/</span>
<span class="token punctuation">[</span>root@localhost opt<span class="token punctuation">]</span><span class="token comment"># mkdir nginxData</span>
<span class="token punctuation">[</span>root@localhost opt<span class="token punctuation">]</span><span class="token comment"># cd nginxData/</span>
<span class="token punctuation">[</span>root@localhost nginxData<span class="token punctuation">]</span><span class="token comment"># mkdir image www</span>
<span class="token punctuation">[</span>root@localhost nginxData<span class="token punctuation">]</span><span class="token comment"># ls</span>
image  www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：配置 nginx.conf，并重新加载配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token number">40</span>     server <span class="token punctuation">{</span>
 <span class="token number">41</span>         listen       <span class="token number">80</span><span class="token punctuation">;</span>
 <span class="token number">42</span>         server_name  <span class="token number">192.168</span>.100.100<span class="token punctuation">;</span>
 <span class="token number">43</span>
 <span class="token number">44</span>         <span class="token comment">#charset koi8-r;</span>
 <span class="token number">45</span>
 <span class="token number">46</span>         <span class="token comment">#access_log  logs/host.access.log  main;</span>
 <span class="token number">47</span>         location /image/<span class="token punctuation">{</span>
 <span class="token number">48</span>            root /opt/nginxData/<span class="token punctuation">;</span>
 			  <span class="token comment"># 在页面以列表的形式列出文件</span>
 <span class="token number">49</span>            autoindex  on<span class="token punctuation">;</span>
 <span class="token number">50</span>         <span class="token punctuation">}</span>
 <span class="token number">51</span>
 <span class="token number">52</span>         location /www/<span class="token punctuation">{</span>
 <span class="token number">53</span>            root /opt/nginxData/<span class="token punctuation">;</span>
 <span class="token number">54</span>            index index.html index.htm<span class="token punctuation">;</span>
 <span class="token number">55</span>         <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：测试</p>`,17),X={href:"http://192.168.100.100/image/girl01.webp",target:"_blank",rel:"noopener noreferrer"},j={href:"http://192.168.100.100/www/test.html",target:"_blank",rel:"noopener noreferrer"},Y=t('<figure><img src="'+k+'" alt="image-autoindex" tabindex="0" loading="lazy"><figcaption>image-autoindex</figcaption></figure><h1 id="配置高可用集群" tabindex="-1"><a class="header-anchor" href="#配置高可用集群" aria-hidden="true">#</a> 配置高可用集群</h1><h2 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h2><figure><img src="'+h+`" alt="image-nginx高可用集群" tabindex="0" loading="lazy"><figcaption>image-nginx高可用集群</figcaption></figure><h2 id="高可用配置" tabindex="-1"><a class="header-anchor" href="#高可用配置" aria-hidden="true">#</a> 高可用配置</h2><h3 id="第一步-克隆当前虚拟机" tabindex="-1"><a class="header-anchor" href="#第一步-克隆当前虚拟机" aria-hidden="true">#</a> 第一步：克隆当前虚拟机</h3><p>​ 注意克隆后网卡丢失的情况</p><h3 id="第二步-安装-keepalived" tabindex="-1"><a class="header-anchor" href="#第二步-安装-keepalived" aria-hidden="true">#</a> 第二步：安装 keepalived</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># yum install keepalived –y</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token punctuation">[</span>root@centos7-slaver ~<span class="token punctuation">]</span><span class="token comment"># ls /etc|grep keepalived</span>
keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后会在 /etc 目录下生成 keepalived 目录</p><h3 id="第三步-配置-keepalived-conf" tabindex="-1"><a class="header-anchor" href="#第三步-配置-keepalived-conf" aria-hidden="true">#</a> 第三步：配置 keepalived.conf</h3><p>​ 备份 /etc/keepalived/keepalivec.conf 配置文件，使用下面的文件替换</p><p>​ 注意：</p><blockquote><ol><li><p>虚拟IP地址 virtual_ipaddress 需要和主机在同一网段。</p><pre><code>   			2. global_defs 中 smtp_server 为主机地址 192.168.100.100
   			3. 检测脚本的位置：script &quot;/usr/local/src/nginx_check.sh&quot;
   			4. 从机只需要修改 state BACKUP
</code></pre></li></ol></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>global_defs <span class="token punctuation">{</span>
	notification_email <span class="token punctuation">{</span>
		acassen@firewall.loc
		failover@firewall.loc
		sysadmin@firewall.loc
	<span class="token punctuation">}</span>
	notification_email_from Alexandre.Cassen@firewall.loc
	smtp_server <span class="token number">192.168</span>.100.100
	smtp_connect_timeout <span class="token number">30</span>
	router_id LVS_DEVEL
<span class="token punctuation">}</span>
vrrp_script chk_http_port <span class="token punctuation">{</span>
	script <span class="token string">&quot;/usr/local/src/nginx_check.sh&quot;</span>
	interval <span class="token number">2</span> <span class="token comment">#（检测脚本执行的间隔）</span>
	weight <span class="token number">2</span>
<span class="token punctuation">}</span>
vrrp_instance VI_1 <span class="token punctuation">{</span>
	state MASTER <span class="token comment"># 备份服务器上将 MASTER 改为 BACKUP</span>
	interface ens33 <span class="token comment"># 网卡</span>
	virtual_router_id <span class="token number">51</span> <span class="token comment"># 主、备机的 virtual_router_id 必须相同</span>
	priority <span class="token number">90</span> <span class="token comment"># 主、备机取不同的优先级，主机值较大，备份机值较小</span>
	advert_int <span class="token number">1</span>
	authentication <span class="token punctuation">{</span>
		auth_type PASS
		auth_pass <span class="token number">1111</span>
	<span class="token punctuation">}</span>
	virtual_ipaddress <span class="token punctuation">{</span>
		<span class="token number">192.168</span>.100.50 <span class="token comment"># VRRP H 虚拟地址</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第四步-新建检测脚本-nginx-check-sh" tabindex="-1"><a class="header-anchor" href="#第四步-新建检测脚本-nginx-check-sh" aria-hidden="true">#</a> 第四步：新建检测脚本 nginx_check.sh</h3><p>​ 在 /usr/local/src 下创建检测脚本 nginx_check.sh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-C</span> nginx --no-header <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$A</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        /usr/local/nginx/sbin/nginx
        <span class="token function">sleep</span> <span class="token number">2</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-C</span> nginx --no-header <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
                <span class="token function">killall</span> keepalived
        <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第五步-启动-nginx-和-keepalived" tabindex="-1"><a class="header-anchor" href="#第五步-启动-nginx-和-keepalived" aria-hidden="true">#</a> 第五步：启动 nginx 和 keepalived</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost keepalived<span class="token punctuation">]</span><span class="token comment"># nginx</span>
<span class="token punctuation">[</span>root@localhost keepalived<span class="token punctuation">]</span><span class="token comment"># systemctl start keepalived.service</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看绑定到ens33的虚拟IP：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost keepalived<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span>
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: ens33: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether 00:50:56:3b:fb:0d brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">192.168</span>.100.100/24 brd <span class="token number">192.168</span>.100.255 scope global ens33
       valid_lft forever preferred_lft forever
       <span class="token comment"># ======192.168.100.50绑定在ens33上面=======</span>
    inet <span class="token number">192.168</span>.100.50/32 scope global ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::250:56ff:fe3b:fb0d/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
<span class="token number">3</span>: virbr0: <span class="token operator">&lt;</span>NO-CARRIER,BROADCAST,MULTICAST,UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state DOWN group default qlen <span class="token number">1000</span>
    link/ether <span class="token number">52</span>:54:00:16:52:0a brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">192.168</span>.122.1/24 brd <span class="token number">192.168</span>.122.255 scope global virbr0
       valid_lft forever preferred_lft forever
<span class="token number">4</span>: virbr0-nic: <span class="token operator">&lt;</span>BROADCAST,MULTICAST<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast master virbr0 state DOWN group default qlen <span class="token number">1000</span>
    link/ether <span class="token number">52</span>:54:00:16:52:0a brd ff:ff:ff:ff:ff:ff
<span class="token punctuation">[</span>root@localhost keepalived<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第六步-测试" tabindex="-1"><a class="header-anchor" href="#第六步-测试" aria-hidden="true">#</a> 第六步：测试</h3><p>​ 在浏览器地址栏输入虚拟IP：192.168.100.50</p><p>​ 停止192.168.100.100的nginx，页面依然能够访问</p><h2 id="nginx-原理与优化参数配置" tabindex="-1"><a class="header-anchor" href="#nginx-原理与优化参数配置" aria-hidden="true">#</a> nginx 原理与优化参数配置</h2><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h3><figure><img src="`+g+'" alt="image-master-worker" tabindex="0" loading="lazy"><figcaption>image-master-worker</figcaption></figure><figure><img src="'+f+'" alt="image-nginx争抢机制" tabindex="0" loading="lazy"><figcaption>image-nginx争抢机制</figcaption></figure><p>master-workers 的机制的好处</p><p>​ 首先，对于每个 worker 进程来说，独立的进程，不需要加锁，所以省掉了锁带来的开销， 同时在编程以及问题查找时，也会方便很多。</p><p>​ 其次，采用独立的进程，可以让互相之间不会 影响，一个进程退出后，其它进程还在工作，服务不会中断，master 进程则很快启动新的 worker 进程。当然，worker 进程的异常退出，肯定是程序有 bug 了，异常退出，会导致当前 worker 上的所有请求失败，不过不会影响到所有请求，所以降低了风险。</p><p>需要设置多少个 worker</p><p>​ <strong>Nginx 同 redis 类似都采用了 io 多路复用机制</strong>【Linux支持IO多路复用，window无法发挥IO多路复用的功能】，每个 worker 都是一个独立的进程，但每个进 程里只有一个主线程，通过异步非阻塞的方式来处理请求， 即使是千上万个请求也不在话 下。每个 worker 的线程可以把一个 cpu 的性能发挥到极致。所以 worker 数和服务器的 cpu 数相等是最为适宜的。设少了会浪费 cpu，设多了会造成 cpu 频繁切换上下文带来的损耗。</p><p>设置 worker 数量</p><p>​ worker_processes 4 #work 绑定 cpu(4 work 绑定 4cpu)。 worker_cpu_affinity 0001 0010 0100 1000 #work 绑定 cpu (4 work 绑定 8cpu 中的 4 个) 。 worker_cpu_affinity 0000001 00000010 00000100 00001000</p><p>连接数 worker_connection</p><p>​ 这个值是表示每个 worker 进程所能建立连接的最大值，所以，一个 nginx 能建立的最大连接 数，应该是 worker_connections * worker_processes。当然，这里说的是最大连接数，对于 HTTP 请 求 本 地 资 源 来 说 ， 能 够 支 持 的 最 大 并 发 数 量 是 worker_connections * worker_processes，如果是支持 http1.1 的浏览器每次访问要占两个连接，所以普通的静态访 问最大并发数是： worker_connections * worker_processes /2，而如果是 HTTP 作 为反向代 理来说，最大并发数量应该是 worker_connections * worker_processes/4。因为作为反向代理服务器，每个并发会建立与客户端的连接和与后端服 务的连接，会占用两个连接。</p><figure><img src="'+x+'" alt="image-nginx.conf结构" tabindex="0" loading="lazy"><figcaption>image-nginx.conf结构</figcaption></figure>',39);function J(Q,Z){const l=i("font"),e=i("ExternalLinkIcon");return o(),c("div",null,[n("div",w,[a(l,{size:"70"},{default:r(()=>[y]),_:1})]),q,P,n("p",null,[s("地址："),n("a",T,[s("http://nginx.org/"),a(e)])]),N,n("p",null,[s("​ Nginx采用 C 进行编写，Nginx 是一个安装非常的简单、配置文件非常简洁（还能够支持perl语法）、Bug非常少的服务。Nginx 启动特别容易，并且几乎可以做到 7*24 不间断运行，即使运行数个月也不需要重新启动。你还能够不间断服务的情况下进行软件版本的"),n("a",E,[s("升级"),a(e)]),s("。处理高并发能力是十分强大的，能经受高负载的考验,有报告表明能支持高达 50,000 个并发连接数。")]),A,n("p",null,[s("nginx下载地址："),n("strong",null,[n("a",C,[s("http://nginx.org/en/download.html"),a(e)])])]),I,n("p",null,[s("下载地址： "),n("a",S,[s("http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz"),a(e)])]),$,n("p",null,[s("​ 在浏览器地址栏输入地址 "),n("strong",null,[n("a",O,[s("www.123.com"),a(e)])]),s("，跳转到 linux 系统 tomcat 主页。")]),n("p",null,[s("第一步：修改 "),n("a",H,[s("www.123.com"),a(e)]),s(" 和IP的映射关系")]),z,n("p",null,[s("启动tomcat，浏览器输入地址 "),n("a",D,[s("www.123.com"),a(e)]),s(" 进行测试。")]),B,n("p",null,[s("​ 访问 "),n("a",L,[s("http://192.168.100.100:9001/edu/"),a(e)]),s(" 直接跳转到 192.168.100.100:8080")]),M,n("p",null,[s("​ "),n("a",R,[s("http://192.168.100.100:9001/vod/test.html"),a(e)])]),n("p",null,[s("​ "),n("a",U,[s("http://192.168.100.100:9001/edu/test.html"),a(e)])]),W,n("p",null,[s("​ 浏览器地址栏输入地址 "),n("a",V,[s("http://192.168.100.100edu/test.html，负载均衡效果，平均"),a(e)]),s(" 8080 和 8081 端口中。")]),G,n("p",null,[s("第三步：测试 "),n("a",F,[s("http://192.168.100.100/edu/test.html"),a(e)])]),K,n("p",null,[s("​ "),n("a",X,[s("http://192.168.100.100/image/girl01.webp"),a(e)])]),n("p",null,[s("​ "),n("a",j,[s("http://192.168.100.100/www/test.html"),a(e)])]),Y])}const an=p(_,[["render",J],["__file","Nginx.html.vue"]]);export{an as default};
