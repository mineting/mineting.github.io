<template><div><div align='center'><font size='70'><b>MySQL</b></font></div>
<blockquote>
<p>【Refer】</p>
<p>宋红康 MySQL 入门到精通</p>
<p>官网：<a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">https://www.mysql.com/<ExternalLinkIcon/></a></p>
<p>文档：<a href="https://docs.oracle.com/en-us/iaas/mysql-database/doc/getting-started.html" target="_blank" rel="noopener noreferrer">https://docs.oracle.com/en-us/iaas/mysql-database/doc/getting-started.html<ExternalLinkIcon/></a></p>
<p>MySQL 50题</p>
<p>高性能 MySQL</p>
</blockquote>
<h1 id="mysql-概述" tabindex="-1"><a class="header-anchor" href="#mysql-概述" aria-hidden="true">#</a> MySQL 概述</h1>
<h2 id="mysql简介" tabindex="-1"><a class="header-anchor" href="#mysql简介" aria-hidden="true">#</a> MySQL简介</h2>
<blockquote>
<ol>
<li>
<p>MySQL 是一个关系型数据库管理系统，由瑞典 MySQL AB 公司开发，目前属于 Oracle 公司。</p>
</li>
<li>
<p>MySQL 是一种关联数据库管理系统，将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。</p>
</li>
<li>
<p>MySQL 是开源的。</p>
</li>
<li>
<p>MySQL 支持大型的数据库，可以处理拥有上千万条记录的大型数据库。</p>
</li>
<li>
<p>MySQL 使用标准的SQL数据语言形式。</p>
</li>
<li>
<p>MySQL 可以允许于多个系统上，并且支持多种语言。这些编程语言包括C、C++、Python、 Java、 Perl、 PHP、Eiffel、 Ruby和Tcl等。</p>
</li>
<li>
<p>MySQL 支持大型数据库，支持 5000万条记录的数据仓库，32位系统表文件最大可支持 4GB，64位系统支持最大的表文件为8TB。</p>
</li>
<li>
<p>MySQL 是可以定制的，采用了GPL协议，可以修改源码来开发自己的 MySQL 系统。</p>
</li>
</ol>
</blockquote>
<h2 id="mysql-安装" tabindex="-1"><a class="header-anchor" href="#mysql-安装" aria-hidden="true">#</a> MySQL 安装</h2>
<p>下载地址：<a href="https://downloads.mysql.com/archives/community/" target="_blank" rel="noopener noreferrer">https://downloads.mysql.com/archives/community/<ExternalLinkIcon/></a></p>
<h3 id="一般安装方式" tabindex="-1"><a class="header-anchor" href="#一般安装方式" aria-hidden="true">#</a> 一般安装方式</h3>
<ul>
<li>
<p>源码编译</p>
</li>
<li>
<p>压缩包解压（一般为tar.gz）</p>
</li>
<li>
<p>编译好的安装包（RPM、DPKG等）</p>
</li>
<li>
<p>在线安装（YUM、APT等）</p>
<p>安装简单程度：YUM &gt; RPM &gt; tar.gz &gt; 源码安装</p>
</li>
</ul>
<h3 id="mysql-5-7-安装" tabindex="-1"><a class="header-anchor" href="#mysql-5-7-安装" aria-hidden="true">#</a> MySQL 5.7 安装</h3>
<p>环境：CentOS7.9 + MySQL5.7.36</p>
<h4 id="压缩包解压安装" tabindex="-1"><a class="header-anchor" href="#压缩包解压安装" aria-hidden="true">#</a> 压缩包解压安装</h4>
<p>环境：CentOS7.9  + MySQL5.7.36.tar.gz</p>
<h5 id="第一步-上传并解压-tar-gz" tabindex="-1"><a class="header-anchor" href="#第一步-上传并解压-tar-gz" aria-hidden="true">#</a> 第一步：上传并解压 tar.gz</h5>
<p>​		拷贝压缩包 .tar.gz 到 /opt 目录，并解压至 <strong>/usr/local/mysql</strong> 中</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># mkdir /opt/mysql</span>
x1<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># mkdir /usr/local/mysql/</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># tar zxvf mysql-5.7.36-linux-glibc2.12-x86_64.tar.gz</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># mv mysql-5.7.36-linux-glibc2.12-x86_64/* /usr/local/mysql</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># ls /usr/local/mysql/</span>
bin  docs  include  lib  LICENSE  <span class="token function">man</span>  README  share  support-files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第二步-创建-mysql-用户" tabindex="-1"><a class="header-anchor" href="#第二步-创建-mysql-用户" aria-hidden="true">#</a> 第二步：创建 mysql 用户</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># id mysql</span>
id: mysql: no such user
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># useradd -r -s /sbin/nologin mysql</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># id mysql</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">987</span><span class="token punctuation">(</span>mysql<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">981</span><span class="token punctuation">(</span>mysql<span class="token punctuation">)</span> 组<span class="token operator">=</span><span class="token number">981</span><span class="token punctuation">(</span>mysql<span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第三步-更改权限" tabindex="-1"><a class="header-anchor" href="#第三步-更改权限" aria-hidden="true">#</a> 第三步：更改权限</h5>
<p>​		更改mysql组下面mysql用户对 /usr/local/mysql 权限</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># ll mysql</span>
总用量 <span class="token number">272</span>
drwxr-xr-x.  <span class="token number">2</span> root root    <span class="token number">4096</span> <span class="token number">4</span>月  <span class="token number">26</span> <span class="token number">18</span>:02 bin
drwxr-xr-x.  <span class="token number">2</span> root root      <span class="token number">55</span> <span class="token number">4</span>月  <span class="token number">26</span> <span class="token number">18</span>:02 docs
drwxr-xr-x.  <span class="token number">3</span> root root    <span class="token number">4096</span> <span class="token number">4</span>月  <span class="token number">26</span> <span class="token number">18</span>:02 include
drwxr-xr-x.  <span class="token number">5</span> root root     <span class="token number">230</span> <span class="token number">4</span>月  <span class="token number">26</span> <span class="token number">18</span>:02 lib
-rw-r--r--.  <span class="token number">1</span> <span class="token number">7161</span> <span class="token number">31415</span> <span class="token number">259199</span> <span class="token number">9</span>月   <span class="token number">7</span> <span class="token number">2021</span> LICENSE
drwxr-xr-x.  <span class="token number">4</span> root root      <span class="token number">30</span> <span class="token number">4</span>月  <span class="token number">26</span> <span class="token number">18</span>:02 <span class="token function">man</span>
-rw-r--r--.  <span class="token number">1</span> <span class="token number">7161</span> <span class="token number">31415</span>    <span class="token number">566</span> <span class="token number">9</span>月   <span class="token number">7</span> <span class="token number">2021</span> README
drwxr-xr-x. <span class="token number">28</span> root root    <span class="token number">4096</span> <span class="token number">4</span>月  <span class="token number">26</span> <span class="token number">18</span>:02 share
drwxr-xr-x.  <span class="token number">2</span> root root      <span class="token number">90</span> <span class="token number">4</span>月  <span class="token number">26</span> <span class="token number">18</span>:02 support-files
<span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># chown -R mysql.mysql /usr/local/mysql/</span>
<span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># ll mysql</span>
总用量 <span class="token number">272</span>
drwxr-xr-x.  <span class="token number">2</span> mysql mysql   <span class="token number">4096</span> <span class="token number">4</span>月  <span class="token number">26</span> <span class="token number">18</span>:02 bin
drwxr-xr-x.  <span class="token number">2</span> mysql mysql     <span class="token number">55</span> <span class="token number">4</span>月  <span class="token number">26</span> <span class="token number">18</span>:02 docs
drwxr-xr-x.  <span class="token number">3</span> mysql mysql   <span class="token number">4096</span> <span class="token number">4</span>月  <span class="token number">26</span> <span class="token number">18</span>:02 include
drwxr-xr-x.  <span class="token number">5</span> mysql mysql    <span class="token number">230</span> <span class="token number">4</span>月  <span class="token number">26</span> <span class="token number">18</span>:02 lib
-rw-r--r--.  <span class="token number">1</span> mysql mysql <span class="token number">259199</span> <span class="token number">9</span>月   <span class="token number">7</span> <span class="token number">2021</span> LICENSE
drwxr-xr-x.  <span class="token number">4</span> mysql mysql     <span class="token number">30</span> <span class="token number">4</span>月  <span class="token number">26</span> <span class="token number">18</span>:02 <span class="token function">man</span>
-rw-r--r--.  <span class="token number">1</span> mysql mysql    <span class="token number">566</span> <span class="token number">9</span>月   <span class="token number">7</span> <span class="token number">2021</span> README
drwxr-xr-x. <span class="token number">28</span> mysql mysql   <span class="token number">4096</span> <span class="token number">4</span>月  <span class="token number">26</span> <span class="token number">18</span>:02 share
drwxr-xr-x.  <span class="token number">2</span> mysql mysql     <span class="token number">90</span> <span class="token number">4</span>月  <span class="token number">26</span> <span class="token number">18</span>:02 support-files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第四步-卸载mariadb-libs库文件" tabindex="-1"><a class="header-anchor" href="#第四步-卸载mariadb-libs库文件" aria-hidden="true">#</a> 第四步：<strong>卸载mariadb-libs库文件</strong></h5>
<p>​		由于CentOS7操作系统默认安装 mariadb-libs 库，它与 MySQL 冲突，影响初始化</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># yum remove mariadb-libs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="第五步-初始化数据库" tabindex="-1"><a class="header-anchor" href="#第五步-初始化数据库" aria-hidden="true">#</a> 第五步：初始化数据库</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 没有data目录，需要初始化表</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># ls</span>
bin  docs  include  lib  LICENSE  <span class="token function">man</span>  README  share  support-files
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># bin/mysql_install_db --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data --user=mysql</span>
<span class="token number">2022</span>-04-26 <span class="token number">18</span>:28:38 <span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span> mysql_install_db is deprecated. Please consider switching to mysqld <span class="token parameter variable">--initialize</span>
<span class="token number">2022</span>-04-26 <span class="token number">18</span>:28:41 <span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span> The bootstrap log isn't empty:
<span class="token number">2022</span>-04-26 <span class="token number">18</span>:28:41 <span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span> <span class="token number">2022</span>-04-26T10:28:38.178883Z <span class="token number">0</span> <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> <span class="token parameter variable">--bootstrap</span> is deprecated. Please consider using <span class="token parameter variable">--initialize</span> instead
<span class="token number">2022</span>-04-26T10:28:38.179678Z <span class="token number">0</span> <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> Changed limits: max_open_files: <span class="token number">1024</span> <span class="token punctuation">(</span>requested <span class="token number">5000</span><span class="token punctuation">)</span>
<span class="token number">2022</span>-04-26T10:28:38.179692Z <span class="token number">0</span> <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> Changed limits: table_open_cache: <span class="token number">431</span> <span class="token punctuation">(</span>requested <span class="token number">2000</span><span class="token punctuation">)</span>

<span class="token comment"># ====mysql_install_db废弃，使用mysqld --initialize代替====</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment">#  bin/mysqld --initialize</span>
<span class="token number">2022</span>-04-26T10:31:09.781805Z <span class="token number">0</span> <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> TIMESTAMP with implicit DEFAULT value is deprecated. Please use <span class="token parameter variable">--explicit_defaults_for_timestamp</span> server option <span class="token punctuation">(</span>see documentation <span class="token keyword">for</span> <span class="token function">more</span> details<span class="token punctuation">)</span>.
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># ls data</span>
auto.cnf    client-cert.pem  ibdata1      mysql               public_key.pem   sys
ca-key.pem  client-key.pem   ib_logfile0  performance_schema  server-cert.pem
ca.pem      ib_buffer_pool   ib_logfile1  private_key.pem     server-key.pem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第六步-配置service命令" tabindex="-1"><a class="header-anchor" href="#第六步-配置service命令" aria-hidden="true">#</a> 第六步：配置service命令</h5>
<p>​		复制 support-files 目录下的 mysql.service 脚本到 /etc/init.d 目录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 服务自启动</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># cp support-files/mysql.server /etc/init.d/mysql</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># service mysql start</span>
Starting MySQL.Logging to <span class="token string">'/usr/local/mysql/data/localhost.localdomain.err'</span><span class="token builtin class-name">.</span>
 ERROR<span class="token operator">!</span> The server quit without updating PID <span class="token function">file</span> <span class="token punctuation">(</span>/usr/local/mysql/data/localhost.localdomain.pid<span class="token punctuation">)</span>.
<span class="token comment"># /usr/local/mysql/data/rekfan.pid 文件没有写的权限没有权限</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># chown -R mysql.mysql /usr/local/mysql/</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># service mysql start</span>
Starting MySQL.Logging to <span class="token string">'/usr/local/mysql/data/localhost.localdomain.err'</span><span class="token builtin class-name">.</span>
 SUCCESS<span class="token operator">!</span>

<span class="token comment"># 可以配置环境变量代替</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># ln -s /usr/local/mysql/bin/mysql /usr/bin/mysql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第七步-配置密码" tabindex="-1"><a class="header-anchor" href="#第七步-配置密码" aria-hidden="true">#</a> 第七步：配置密码</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 设置密码报错</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># bin/mysqladmin -u root password 'root'</span>
mysqladmin: connect to server at <span class="token string">'localhost'</span> failed
error: <span class="token string">'Access denied for user '</span>root<span class="token string">'@'</span>localhost<span class="token string">' (using password: NO)'</span>
ERROR <span class="token number">1045</span> <span class="token punctuation">(</span><span class="token number">28000</span><span class="token punctuation">)</span>: Access denied <span class="token keyword">for</span> user <span class="token string">'root'</span>@<span class="token string">'localhost'</span> <span class="token punctuation">(</span>using password: NO<span class="token punctuation">)</span>

<span class="token comment"># 查询默认密码，使用默认密码登录</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># cat /root/.mysql_secret</span>
<span class="token comment"># Password set for user 'root@localhost' at 2022-04-26 18:28:38</span>
aUs6:3<span class="token comment">#hedu.</span>

<span class="token comment"># 设置密码</span>
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/usr/local/mysql
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># bin/mysqladmin -h localhost -u root password 'root' -p'aUs6:3#hedu.'</span>
mysqladmin: <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> Using a password on the <span class="token builtin class-name">command</span> line interface can be insecure.
Warning: Since password will be sent to server <span class="token keyword">in</span> plain text, use ssl connection to ensure password safety.
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># mysql -uroot -proot</span>
mysql: <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> Using a password on the <span class="token builtin class-name">command</span> line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with <span class="token punctuation">;</span> or <span class="token punctuation">\</span>g.
Your MySQL connection <span class="token function">id</span> is <span class="token number">7</span>
Server version: <span class="token number">5.7</span>.36 MySQL Community Server <span class="token punctuation">(</span>GPL<span class="token punctuation">)</span>
Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2000</span>, <span class="token number">2021</span>, Oracle and/or its affiliates.
Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.
Type <span class="token string">'help;'</span> or <span class="token string">'\h'</span> <span class="token keyword">for</span> help. Type <span class="token string">'\c'</span> to <span class="token function">clear</span> the current input statement.
mysql<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此处如果报错：</p>
<p>cat: /root/.mysql_secret: 没有那个文件或目录</p>
<p>解决方案：重置密码。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># vi /etc/my.cnf</span>
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment"># 忽略密码</span>
skip-grant-tables
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># mysql -uroot</span>
mysql: <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> Using a password on the <span class="token builtin class-name">command</span> line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with <span class="token punctuation">;</span> or <span class="token punctuation">\</span>g.
Your MySQL connection <span class="token function">id</span> is <span class="token number">4</span>
Server version: <span class="token number">5.7</span>.36 MySQL Community Server <span class="token punctuation">(</span>GPL<span class="token punctuation">)</span>
Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2000</span>, <span class="token number">2021</span>, Oracle and/or its affiliates.
Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.
Type <span class="token string">'help;'</span> or <span class="token string">'\h'</span> <span class="token keyword">for</span> help. Type <span class="token string">'\c'</span> to <span class="token function">clear</span> the current input statement.
mysql<span class="token operator">></span>update mysql.user <span class="token builtin class-name">set</span> <span class="token assign-left variable">authentication_string</span><span class="token operator">=</span>PASSWORD<span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span> where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">'root'</span><span class="token punctuation">;</span>
Query OK, <span class="token number">1</span> row affected, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
Rows matched: <span class="token number">1</span>  Changed: <span class="token number">1</span>  Warnings: <span class="token number">1</span>

mysql<span class="token operator">></span> flush privileges<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第八步-开放端口3306" tabindex="-1"><a class="header-anchor" href="#第八步-开放端口3306" aria-hidden="true">#</a> 第八步：开放端口3306</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看开放的端口号</span>
firewall-cmd --list-all
<span class="token comment"># 设置开放的端口号</span>
firewall-cmd --add-service<span class="token operator">=</span>mysql <span class="token parameter variable">--permanent</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp <span class="token parameter variable">--permanent</span>
<span class="token comment"># 重启防火墙</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第九步-远程用户登录" tabindex="-1"><a class="header-anchor" href="#第九步-远程用户登录" aria-hidden="true">#</a> 第九步：远程用户登录</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mysql<span class="token operator">></span> update user <span class="token builtin class-name">set</span> <span class="token function">host</span> <span class="token operator">=</span> <span class="token string">'%'</span> where user <span class="token operator">=</span><span class="token string">'root'</span><span class="token punctuation">;</span>
ERROR <span class="token number">1046</span> <span class="token punctuation">(</span>3D000<span class="token punctuation">)</span>: No database selected
mysql<span class="token operator">></span> use mysql<span class="token punctuation">;</span>
ERROR <span class="token number">1820</span> <span class="token punctuation">(</span>HY000<span class="token punctuation">)</span>: You must reset your password using ALTER <span class="token environment constant">USER</span> statement before executing this statement.
<span class="token comment"># 解决：重置密码</span>
mysql<span class="token operator">></span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">password</span><span class="token operator">=</span>password<span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">></span> use mysql
Reading table information <span class="token keyword">for</span> completion of table and <span class="token function">column</span> names
You can turn off this feature to get a quicker startup with <span class="token parameter variable">-A</span>

Database changed
mysql<span class="token operator">></span> <span class="token keyword">select</span> host, user from user<span class="token punctuation">;</span>
+-----------+---------------+
<span class="token operator">|</span> <span class="token function">host</span>      <span class="token operator">|</span> user          <span class="token operator">|</span>
+-----------+---------------+
<span class="token operator">|</span> localhost <span class="token operator">|</span> root          <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> mysql.session <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> mysql.sys     <span class="token operator">|</span>
+-----------+---------------+
<span class="token number">3</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
<span class="token comment"># 修改用户为root的host为 % ，% 通配符表示任意主机都能访问</span>
mysql<span class="token operator">></span>update user <span class="token builtin class-name">set</span> <span class="token function">host</span> <span class="token operator">=</span> <span class="token string">'%'</span> where user <span class="token operator">=</span><span class="token string">'root'</span><span class="token punctuation">;</span>

Query OK, <span class="token number">1</span> row affected <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
Rows matched: <span class="token number">1</span>  Changed: <span class="token number">1</span>  Warnings: <span class="token number">0</span>
<span class="token comment"># 刷新权限</span>
mysql<span class="token operator">></span> flush privileges<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">></span> <span class="token keyword">select</span> host, user from user<span class="token punctuation">;</span>
+-----------+---------------+
<span class="token operator">|</span> <span class="token function">host</span>      <span class="token operator">|</span> user          <span class="token operator">|</span>
+-----------+---------------+
<span class="token operator">|</span> %         <span class="token operator">|</span> root          <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> mysql.session <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> mysql.sys     <span class="token operator">|</span>
+-----------+---------------+
<span class="token number">3</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第十步-用户管理" tabindex="-1"><a class="header-anchor" href="#第十步-用户管理" aria-hidden="true">#</a> 第十步：用户管理</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 创建用户</span>
CREATE <span class="token environment constant">USER</span> <span class="token string">'liufei'</span>@<span class="token string">'%'</span> IDENTIFIED BY <span class="token string">'liufei'</span><span class="token punctuation">;</span>
<span class="token comment"># 修改密码</span>
update mysql.user <span class="token builtin class-name">set</span> <span class="token assign-left variable">authentication_string</span><span class="token operator">=</span>password<span class="token punctuation">(</span><span class="token string">'123456'</span><span class="token punctuation">)</span> where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">'liufei'</span><span class="token punctuation">;</span> 
<span class="token comment"># 用户授权</span>
grant all privileges on 数据库名.* to <span class="token string">'liufei'</span>@<span class="token string">'%'</span><span class="token punctuation">;</span>
<span class="token comment"># 删除用户</span>
Delete FROM mysql.user Where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">'liufei'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第十一步-配置文件说明" tabindex="-1"><a class="header-anchor" href="#第十一步-配置文件说明" aria-hidden="true">#</a> 第十一步：配置文件说明</h5>
<p><a href="https://blog.csdn.net/djcode/article/details/78621772" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/djcode/article/details/78621772<ExternalLinkIcon/></a></p>
<h5 id="第十二步-乱码问题" tabindex="-1"><a class="header-anchor" href="#第十二步-乱码问题" aria-hidden="true">#</a> 第十二步：乱码问题</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mysql<span class="token operator">></span> show variables like <span class="token string">'%char%'</span><span class="token punctuation">;</span>
+--------------------------+----------------------------------+
<span class="token operator">|</span> Variable_name            <span class="token operator">|</span> Value                            <span class="token operator">|</span>
+--------------------------+----------------------------------+
<span class="token operator">|</span> character_set_client     <span class="token operator">|</span> utf8                             <span class="token operator">|</span>
<span class="token operator">|</span> character_set_connection <span class="token operator">|</span> utf8                             <span class="token operator">|</span>
<span class="token operator">|</span> character_set_database   <span class="token operator">|</span> latin1                           <span class="token operator">|</span>
<span class="token operator">|</span> character_set_filesystem <span class="token operator">|</span> binary                           <span class="token operator">|</span>
<span class="token operator">|</span> character_set_results    <span class="token operator">|</span> utf8                             <span class="token operator">|</span>
<span class="token operator">|</span> character_set_server     <span class="token operator">|</span> latin1                           <span class="token operator">|</span>
<span class="token operator">|</span> character_set_system     <span class="token operator">|</span> utf8                             <span class="token operator">|</span>
<span class="token operator">|</span> character_sets_dir       <span class="token operator">|</span> /usr/local/mysql/share/charsets/ <span class="token operator">|</span>
+--------------------------+----------------------------------+
<span class="token number">8</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 /etc 目录下新建 my.cnf文件：</p>
<div class="language-tex line-numbers-mode" data-ext="tex"><pre v-pre class="language-tex"><code><span class="token punctuation">[</span>client<span class="token punctuation">]</span>
default-character-set=utf8

<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
no-beep
default-character-set=utf8

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
character-set-server=utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启 mysql 服务，查看字符集编码：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># service mysql restart</span>
Shutting down MySQL<span class="token punctuation">..</span><span class="token punctuation">..</span> SUCCESS<span class="token operator">!</span>
Starting MySQL. SUCCESS<span class="token operator">!</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
mysql<span class="token operator">></span> show variables like <span class="token string">'%char%'</span><span class="token punctuation">;</span>
+--------------------------+----------------------------------+
<span class="token operator">|</span> Variable_name            <span class="token operator">|</span> Value                            <span class="token operator">|</span>
+--------------------------+----------------------------------+
<span class="token operator">|</span> character_set_client     <span class="token operator">|</span> utf8                             <span class="token operator">|</span>
<span class="token operator">|</span> character_set_connection <span class="token operator">|</span> utf8                             <span class="token operator">|</span>
<span class="token operator">|</span> character_set_database   <span class="token operator">|</span> utf8                             <span class="token operator">|</span>
<span class="token operator">|</span> character_set_filesystem <span class="token operator">|</span> binary                           <span class="token operator">|</span>
<span class="token operator">|</span> character_set_results    <span class="token operator">|</span> utf8                             <span class="token operator">|</span>
<span class="token operator">|</span> character_set_server     <span class="token operator">|</span> utf8                             <span class="token operator">|</span>
<span class="token operator">|</span> character_set_system     <span class="token operator">|</span> utf8                             <span class="token operator">|</span>
<span class="token operator">|</span> character_sets_dir       <span class="token operator">|</span> /usr/local/mysql/share/charsets/ <span class="token operator">|</span>
+--------------------------+----------------------------------+
<span class="token number">8</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二进制编译安装" tabindex="-1"><a class="header-anchor" href="#二进制编译安装" aria-hidden="true">#</a> 二进制编译安装</h4>
<p>环境：CentOS 6.8 +  MySQL 5.6</p>
<h5 id="第一步-安装编译环境-gcc-c" tabindex="-1"><a class="header-anchor" href="#第一步-安装编译环境-gcc-c" aria-hidden="true">#</a> 第一步：安装编译环境 gcc-c++</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">make</span> gcc-c++ cmake bison-devel  ncurses-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="第二步-解压并进入mysql目录" tabindex="-1"><a class="header-anchor" href="#第二步-解压并进入mysql目录" aria-hidden="true">#</a> 第二步：解压并进入mysql目录</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> xvf mysql-5.6.14.tar.gz
<span class="token builtin class-name">cd</span> mysql-5.6.14
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第三步-编译" tabindex="-1"><a class="header-anchor" href="#第三步-编译" aria-hidden="true">#</a> 第三步：编译</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>cmake <span class="token parameter variable">-DCMAKE_INSTALL_PREFIX</span><span class="token operator">=</span>/usr/local/mysql <span class="token parameter variable">-DMYSQL_DATADIR</span><span class="token operator">=</span>/usr/local/mysql/data <span class="token parameter variable">-DSYSCONFDIR</span><span class="token operator">=</span>/etc <span class="token parameter variable">-DWITH_MYISAM_STORAGE_ENGINE</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">-DWITH_INNOBASE_STORAGE_ENGINE</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">-DWITH_MEMORY_STORAGE_ENGINE</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">-DWITH_READLINE</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">-DMYSQL_UNIX_ADDR</span><span class="token operator">=</span>/var/lib/mysql/mysql.sock <span class="token parameter variable">-DMYSQL_TCP_PORT</span><span class="token operator">=</span><span class="token number">3306</span> <span class="token parameter variable">-DENABLED_LOCAL_INFILE</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">-DWITH_PARTITION_STORAGE_ENGINE</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">-DEXTRA_CHARSETS</span><span class="token operator">=</span>all <span class="token parameter variable">-DDEFAULT_CHARSET</span><span class="token operator">=</span>utf8 <span class="token parameter variable">-DDEFAULT_COLLATION</span><span class="token operator">=</span>utf8_general_ci
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="第四步-安装" tabindex="-1"><a class="header-anchor" href="#第四步-安装" aria-hidden="true">#</a> 第四步：安装</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="第五步-设置权限" tabindex="-1"><a class="header-anchor" href="#第五步-设置权限" aria-hidden="true">#</a> 第五步：设置权限</h5>
<p>​		查看是否有mysql用户及用户组，没有则创建</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> mysql
<span class="token function">cat</span> /etc/group <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> mysql
<span class="token comment"># 没有则创建</span>
<span class="token function">groupadd</span> mysql
<span class="token function">useradd</span> <span class="token parameter variable">-g</span> mysql mysql
<span class="token comment"># 修改/usr/local/mysql权限</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql：mysql /usr/local/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第六步-初始化配置" tabindex="-1"><a class="header-anchor" href="#第六步-初始化配置" aria-hidden="true">#</a> 第六步：初始化配置</h5>
<p>​		进入安装路径（在执行下面的指令），执行初始化配置脚本，创建系统自带的数据库和表</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/mysql
scripts/mysql_install_db <span class="token parameter variable">--basedir</span><span class="token operator">=</span>/usr/local/mysql <span class="token parameter variable">--datadir</span><span class="token operator">=</span>/usr/local/mysql/data <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<p>​		在启动MySQL服务时，会按照一定次序搜索 my.cnf ，先在 /etc 目录下找，找不到则会搜索 &quot;$basedir/my.cnf&quot;，在本例中就是 /usr/local/mysql/my.cnf，这是新版MySQL的配置文件的默认位置。</p>
<p>​		在CentOS 6.8版操作系统的最小安装完成后，在/etc目录下会存在一个my.cnf，需要将此文件更名为其他的名字，如：/etc/my.cnf.bak，否则，该文件会干扰源码安装的MySQL的正确配置，造成无法启动。</p>
<p>修改名称，防止干扰：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mv</span> /etc/my.cnf  /etc/my.cnf.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="第七步-启动mysql" tabindex="-1"><a class="header-anchor" href="#第七步-启动mysql" aria-hidden="true">#</a> 第七步：启动MySQL</h5>
<p>添加服务，拷贝服务脚本到 init.d 目录，并设置开机启动</p>
<p>注意在 /usr/local/mysql 下执行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cp</span> support-files/mysql.server /etc/init.d/mysql
<span class="token function">chkconfig</span> mysql on
<span class="token function">service</span> mysql start --启动MySQL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第八步-修改root密码" tabindex="-1"><a class="header-anchor" href="#第八步-修改root密码" aria-hidden="true">#</a> 第八步：修改root密码</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/mysql/bin
./mysql <span class="token parameter variable">-uroot</span> 
mysql<span class="token operator">></span> SET PASSWORD <span class="token operator">=</span> PASSWORD<span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rpm安装" tabindex="-1"><a class="header-anchor" href="#rpm安装" aria-hidden="true">#</a> RPM安装</h4>
<p>​		环境：CentOS7.9 + MySQL5.7.36</p>
<p>拷贝安装包至 /opt 目录并解压：</p>
<p>查询是否已经安装：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> –qa<span class="token operator">|</span><span class="token function">grep</span> –i mysql
<span class="token function">ps</span> –ef<span class="token operator">|</span><span class="token function">grep</span> mysql
<span class="token function">service</span> mysql start
<span class="token function">cat</span> /etc/passwd <span class="token operator">|</span><span class="token function">grep</span> mysql
<span class="token function">cat</span> /etc/group
mysql设置密码：mysqladmin –u root password <span class="token number">123456</span>
mysql的自启动：chkconfig mysql on
<span class="token function">chkconfig</span> –list<span class="token operator">|</span><span class="token function">grep</span> mysql
mysql数据库文件的存储位置：
<span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> mysql
二进制安装：/usr/local/mysql/data

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RPM形式安装目录说明：</p>
<table>
<thead>
<tr>
<th>路径</th>
<th>说明</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>/var/lib/myql</td>
<td>mysql数据库文件的存放路径</td>
<td></td>
</tr>
<tr>
<td>/usr/share/mysql</td>
<td>配置文件目录</td>
<td>mysql.server命令及其配置</td>
</tr>
<tr>
<td>/usr/bin</td>
<td>相关命令目录</td>
<td>mysqladmin mysqldump等命令</td>
</tr>
<tr>
<td>/etc/init.d/mysql</td>
<td>启动停止相关脚本</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="mysql8-版本安装" tabindex="-1"><a class="header-anchor" href="#mysql8-版本安装" aria-hidden="true">#</a> MySQL8 版本安装</h3>
<h2 id="mysql卸载" tabindex="-1"><a class="header-anchor" href="#mysql卸载" aria-hidden="true">#</a> MySQL卸载</h2>
<h3 id="rpm卸载" tabindex="-1"><a class="header-anchor" href="#rpm卸载" aria-hidden="true">#</a> RPM卸载</h3>
<h3 id="二进制源码卸载" tabindex="-1"><a class="header-anchor" href="#二进制源码卸载" aria-hidden="true">#</a> 二进制源码卸载</h3>
<h1 id="mysql-逻辑架构与存储引擎" tabindex="-1"><a class="header-anchor" href="#mysql-逻辑架构与存储引擎" aria-hidden="true">#</a> MySQL 逻辑架构与存储引擎</h1>
<h2 id="逻辑架构" tabindex="-1"><a class="header-anchor" href="#逻辑架构" aria-hidden="true">#</a> 逻辑架构</h2>
<figure><img src="@source/DataBase/MySQL/MySQL逻辑架构与存储引擎.jpg" alt="MySQL逻辑架构与存储引擎" tabindex="0" loading="lazy"><figcaption>MySQL逻辑架构与存储引擎</figcaption></figure>
<ul>
<li>
<p>连接层</p>
<p>​		最上层是一些客户端和连接服务，包含本地 socket 通信和大多数基于客户端/服务端工具类似于 tcp/ip 的通信，主要完成一些类似于连接处理、授权认证等相关的安全解决方案，该层引入了线程池的概念，为通过认证安全接入的客户端提供线程，同样该层可以实现基于 SSL 的安全链接，服务器也会为每个安全接入的客户端验证它所具有的操作权限。</p>
</li>
<li>
<p>服务层</p>
<p>​		第二层架构的主要工作完成大多数的核心服务功能，如 SQL 接口，并完成缓存的查询，SQL分析和优化以及部分内置函数的执行，所有跨存储引擎的功能也在这一层实现，如过程、函数等，在该层，服务器会解析查询，创建相应的解析树，并完成相应的优化如确定查询表的顺序，是否利用索引等，最后生成相应的执行操作，如果是 SELECT 语句，服务器还会查询内部的缓存，如果缓存的空间足够大，可以解决大量读操作的环境中能够很好的提升系统的性能。</p>
</li>
<li>
<p>引擎层</p>
<p>​		存储引擎层，存储引擎层真正负责 MySQL 的数据存储和读取，即如何存储和索引数据、是否支持事务等，服务器通过 API 与存储引擎进行通信，不同的存储引擎具有不同的功能，常用的有 MyISAM 和 InnoDB。</p>
</li>
<li>
<p>存储层</p>
<p>​	数据存储层，主要将数据存储在文件系统上，完成于存储引擎的交互。</p>
</li>
</ul>
<h2 id="存储引擎" tabindex="-1"><a class="header-anchor" href="#存储引擎" aria-hidden="true">#</a> 存储引擎</h2>
<ol>
<li>show engines;	【查看 MySQL 提供的存储引擎】</li>
<li>show variables like '%storage_engine%';      【查看MySQL默认的存储引擎】</li>
</ol>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; show engines;
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
| Engine             | Support | Comment                                                        | Transactions | XA   | Savepoints |
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
| InnoDB             | DEFAULT | Supports transactions, row-level locking, and foreign keys     | YES          | YES  | YES        |
| MRG_MYISAM         | YES     | Collection of identical MyISAM tables                          | NO           | NO   | NO         |
| MEMORY             | YES     | Hash based, stored in memory, useful for temporary tables      | NO           | NO   | NO         |
| BLACKHOLE          | YES     | /dev/null storage engine (anything you write to it disappears) | NO           | NO   | NO         |
| MyISAM             | YES     | MyISAM storage engine                                          | NO           | NO   | NO         |
| CSV                | YES     | CSV storage engine                                             | NO           | NO   | NO         |
| ARCHIVE            | YES     | Archive storage engine                                         | NO           | NO   | NO         |
| PERFORMANCE_SCHEMA | YES     | Performance Schema                                             | NO           | NO   | NO         |
| FEDERATED          | NO      | Federated MySQL storage engine                                 | NULL         | NULL | NULL       |
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
9 rows in set (0.01 sec)

mysql&gt; show variables like '%storage_engine%';
+----------------------------------+--------+
| Variable_name                    | Value  |
+----------------------------------+--------+
| default_storage_engine           | InnoDB |
| default_tmp_storage_engine       | InnoDB |
| disabled_storage_engines         |        |
| internal_tmp_disk_storage_engine | InnoDB |
+----------------------------------+--------+
4 rows in set (0.01 sec)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>选项说明：</p>
<ul>
<li>
<p>Support： 是否支持（default）。</p>
</li>
<li>
<p>Comment：注释、说明。</p>
</li>
<li>
<p>Transactions：是否支持事务。</p>
</li>
<li>
<p>XA：所支持的分布式事务是否符合 XA 规范。</p>
</li>
<li>
<p>Savepoints： 是否支持事务中的保存点。</p>
</li>
</ul>
<p><strong>注意：以 ； \g \G 都表示语句结束。</strong></p>
<h2 id="myisam-和-innodb-的对比" tabindex="-1"><a class="header-anchor" href="#myisam-和-innodb-的对比" aria-hidden="true">#</a> MyISAM 和 InnoDB 的对比</h2>
<table>
<thead>
<tr>
<th>对比项</th>
<th>MyISAM</th>
<th>InnoDB</th>
</tr>
</thead>
<tbody>
<tr>
<td>主外键</td>
<td>不支持</td>
<td>支持</td>
</tr>
<tr>
<td>事务</td>
<td>不支持</td>
<td>支持</td>
</tr>
<tr>
<td>行表锁</td>
<td>表锁，即使操作一行记录也会锁住整个表，不适合高并发操作</td>
<td>行锁，操作时只锁住一行，不对其他行产生影响</td>
</tr>
<tr>
<td>缓存</td>
<td>只缓存索引，不缓存真实数据</td>
<td>不仅缓存索引且缓存真实数据，对内存要求的高，且内存大小对性能的影响较大</td>
</tr>
<tr>
<td>表空间</td>
<td>小</td>
<td>大</td>
</tr>
<tr>
<td>关注点</td>
<td>性能</td>
<td>事务</td>
</tr>
<tr>
<td>默认安装</td>
<td>是</td>
<td>是</td>
</tr>
</tbody>
</table>
<p>总结：</p>
<ol>
<li>
<p>MyISAM： 不支持事务、外键等，访问速度比较快，对事务完整性没有要求</p>
</li>
<li>
<p>InnoDB： 支持事务（提交、回避、崩溃恢复等），并发控制等，占用更多磁盘</p>
</li>
<li>
<p>MEMORY： 使用内存存储数据，访问速度快，但安全没有保障</p>
</li>
</ol>
<h1 id="多表关系以及三大设计范式" tabindex="-1"><a class="header-anchor" href="#多表关系以及三大设计范式" aria-hidden="true">#</a> 多表关系以及三大设计范式</h1>
<h1 id="sql-概述" tabindex="-1"><a class="header-anchor" href="#sql-概述" aria-hidden="true">#</a> SQL 概述</h1>
<blockquote>
<ul>
<li>
<p>SQL（Structured Query Language，结构化查询语言）是使用关系模型的数据库应用语言，<code v-pre>与数据直接打交道</code>，由<code v-pre>IBM</code>上世纪70年代开发出来。后由美国国家标准局（ANSI）开始着手制定 SQL 标准，先后有<code v-pre>SQL-86</code>，<code v-pre>SQL-89</code>，<code v-pre>SQL-92</code>，<code v-pre>SQL-99</code>等标准。</p>
<ul>
<li>SQL 有两个重要的标准，分别是 SQL92 和 SQL99，它们分别代表了 92 年和 99 年颁布的 SQL 标准，我们今天使用的 SQL 语言依然遵循这些标准。</li>
</ul>
</li>
<li>
<p>不同的数据库生产厂商都支持 SQL 语句，但都有特有内容。</p>
</li>
</ul>
</blockquote>
<h2 id="sql分类" tabindex="-1"><a class="header-anchor" href="#sql分类" aria-hidden="true">#</a> SQL分类</h2>
<blockquote>
<ol>
<li>
<p><strong>DDL(Data Definition Language)</strong> 数据定义语言</p>
<p>用来定义数据库对象：数据库，表，列等。关键字：CREATE，DROP，ALTER 等。</p>
</li>
<li>
<p><strong>DML(Data Manipulation Language)</strong> 数据操作语言</p>
<p>用来对数据库中表的数据进行增删改。关键字：INSERT，DELETE，UPDATE 等。</p>
</li>
<li>
<p><strong>DQL(Data Query Language)</strong> 数据查询语言</p>
<p>用来查询数据库中表的记录(数据)。关键字：SELECT，WHERE 等。</p>
</li>
<li>
<p><strong>DCL(Data Control Language)</strong> 数据控制语言</p>
<p>用来定义数据库的访问权限和安全级别，及创建用户。关键字：GRANT， REVOKE等。</p>
</li>
</ol>
</blockquote>
<h2 id="sql-标准" tabindex="-1"><a class="header-anchor" href="#sql-标准" aria-hidden="true">#</a> SQL 标准</h2>
<blockquote>
<p>SQL 有两个主要的标准，分别是 <code v-pre>SQL92</code> 和 <code v-pre>SQL99</code>。92 和 99 代表了标准提出的时间，SQL92 就是 92 年提出的标准规范。当然除了 SQL92 和 SQL99 以外，还存在 SQL-86、SQL-89、SQL:2003、SQL:2008、SQL:2011 和 SQL:2016 等其他的标准。</p>
<p><strong>SQL92 和 SQL99 是经典的 SQL 标准，也分别叫做 SQL-2 和 SQL-3 标准。</strong></p>
</blockquote>
<h2 id="sql-语法基本规范" tabindex="-1"><a class="header-anchor" href="#sql-语法基本规范" aria-hidden="true">#</a> SQL 语法基本规范</h2>
<blockquote>
<p>每条命令以 ; 或 \g 或 \G 结束</p>
<p><strong>引号：</strong></p>
<ul>
<li>
<p>字符串型和日期时间类型的数据可以使用单引号（' '）表示</p>
</li>
<li>
<p>列的别名，尽量使用双引号（&quot; &quot;），而且不建议省略 as，如果字段别名中包含空格或特殊的字符并区分大小写，那么不能省略 &quot; &quot;</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 反例</span>
<span class="token keyword">select</span> id <span class="token keyword">as</span> 编 号 <span class="token keyword">from</span> student<span class="token punctuation">;</span> 
<span class="token comment">-- 正例</span>
<span class="token keyword">select</span> id <span class="token keyword">as</span> <span class="token string">"编 号"</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>反引号，保证字段没有和系统保留字、数据库系统或常用方法冲突，如定义表名为 <code v-pre>order</code>时需要反引号</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 正例</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>order<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
    name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 反例</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">order</span><span class="token punctuation">(</span>
    id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
    name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>大小写规范：</strong></p>
<ul>
<li>MySQL 在 Windows 环境下是大小写不敏感的</li>
<li>MySQL 在 Linux 环境下是大小写敏感的
<ul>
<li>数据库名、表名、表的别名、变量名是严格区分大小写的</li>
<li>关键字、函数名、列名(或字段名)、列的别名（字段的别名） 是忽略大小写的。</li>
</ul>
</li>
<li>推荐采用统一的书写规范：
<ul>
<li>数据库名、表名、表别名、字段名、字段别名等都小写</li>
<li>SQL 关键字、函数名、绑定的变量等都大写</li>
</ul>
</li>
</ul>
<p><strong>注释：</strong></p>
<ul>
<li>单行注释：# 注释文字（MySQL特有的方式）</li>
<li>单行注释：-- 注释文字（--后面必须包含一个空格）</li>
<li>多行注释：/* 注释文字  */</li>
</ul>
<p><strong>命名规则：</strong></p>
<ul>
<li>数据库、表名不得超过 30 个字符，变量名限制为 29 个</li>
<li>必须只能包含数字字母下划线共 63 个字符</li>
<li>数据库名、表名、字段名等对象名中间不要包含空格</li>
</ul>
</blockquote>
<h2 id="数据导入指令" tabindex="-1"><a class="header-anchor" href="#数据导入指令" aria-hidden="true">#</a> 数据导入指令</h2>
<blockquote>
<p>在命令行客户端登录 mysql，使用 source 指令导入</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> source d:\mysqltest<span class="token punctuation">.</span><span class="token keyword">sql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<h2 id="sql-数据准备" tabindex="-1"><a class="header-anchor" href="#sql-数据准备" aria-hidden="true">#</a> SQL 数据准备</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : 127.0.0.1:3306
 Source Schema         : mysqltest

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 08/03/2023 17:06:35
*/</span>

<span class="token keyword">SET</span> NAMES utf8mb4<span class="token punctuation">;</span>
<span class="token keyword">SET</span> FOREIGN_KEY_CHECKS <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Table structure for countries</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>country_id<span class="token punctuation">`</span></span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>country_name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>region_id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>country_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>countr_reg_fk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>region_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>countr_reg_fk<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>region_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>regions<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>region_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">RESTRICT</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">RESTRICT</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8_general_ci ROW_FORMAT <span class="token operator">=</span> Dynamic<span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Records of countries</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'AR'</span><span class="token punctuation">,</span> <span class="token string">'Argentina'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'AU'</span><span class="token punctuation">,</span> <span class="token string">'Australia'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'BE'</span><span class="token punctuation">,</span> <span class="token string">'Belgium'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'BR'</span><span class="token punctuation">,</span> <span class="token string">'Brazil'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'CA'</span><span class="token punctuation">,</span> <span class="token string">'Canada'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'CH'</span><span class="token punctuation">,</span> <span class="token string">'Switzerland'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'CN'</span><span class="token punctuation">,</span> <span class="token string">'China'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'DE'</span><span class="token punctuation">,</span> <span class="token string">'Germany'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'DK'</span><span class="token punctuation">,</span> <span class="token string">'Denmark'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'EG'</span><span class="token punctuation">,</span> <span class="token string">'Egypt'</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'FR'</span><span class="token punctuation">,</span> <span class="token string">'France'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'HK'</span><span class="token punctuation">,</span> <span class="token string">'HongKong'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'IL'</span><span class="token punctuation">,</span> <span class="token string">'Israel'</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'IN'</span><span class="token punctuation">,</span> <span class="token string">'India'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'IT'</span><span class="token punctuation">,</span> <span class="token string">'Italy'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'JP'</span><span class="token punctuation">,</span> <span class="token string">'Japan'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'KW'</span><span class="token punctuation">,</span> <span class="token string">'Kuwait'</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'MX'</span><span class="token punctuation">,</span> <span class="token string">'Mexico'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'NG'</span><span class="token punctuation">,</span> <span class="token string">'Nigeria'</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'NL'</span><span class="token punctuation">,</span> <span class="token string">'Netherlands'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'SG'</span><span class="token punctuation">,</span> <span class="token string">'Singapore'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'UK'</span><span class="token punctuation">,</span> <span class="token string">'United Kingdom'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'US'</span><span class="token punctuation">,</span> <span class="token string">'United States of America'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'ZM'</span><span class="token punctuation">,</span> <span class="token string">'Zambia'</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'ZW'</span><span class="token punctuation">,</span> <span class="token string">'Zimbabwe'</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Table structure for departments</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>department_name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>manager_id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>location_id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">UNIQUE</span> <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>dept_id_pk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>dept_loc_fk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>location_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>dept_mgr_fk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>manager_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>dept_loc_fk<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>location_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>location_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">RESTRICT</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">RESTRICT</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>dept_mgr_fk<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>manager_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>employee_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">RESTRICT</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">RESTRICT</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8_general_ci ROW_FORMAT <span class="token operator">=</span> Dynamic<span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Records of departments</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">'Administration'</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">'Marketing'</span><span class="token punctuation">,</span> <span class="token number">201</span><span class="token punctuation">,</span> <span class="token number">1800</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token string">'Purchasing'</span><span class="token punctuation">,</span> <span class="token number">114</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token string">'Human Resources'</span><span class="token punctuation">,</span> <span class="token number">203</span><span class="token punctuation">,</span> <span class="token number">2400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">'Shipping'</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token string">'IT'</span><span class="token punctuation">,</span> <span class="token number">103</span><span class="token punctuation">,</span> <span class="token number">1400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">70</span><span class="token punctuation">,</span> <span class="token string">'Public Relations'</span><span class="token punctuation">,</span> <span class="token number">204</span><span class="token punctuation">,</span> <span class="token number">2700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token string">'Sales'</span><span class="token punctuation">,</span> <span class="token number">145</span><span class="token punctuation">,</span> <span class="token number">2500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token string">'Executive'</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">'Finance'</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">110</span><span class="token punctuation">,</span> <span class="token string">'Accounting'</span><span class="token punctuation">,</span> <span class="token number">205</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token string">'Treasury'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">130</span><span class="token punctuation">,</span> <span class="token string">'Corporate Tax'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">140</span><span class="token punctuation">,</span> <span class="token string">'Control And Credit'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token string">'Shareholder Services'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">160</span><span class="token punctuation">,</span> <span class="token string">'Benefits'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">170</span><span class="token punctuation">,</span> <span class="token string">'Manufacturing'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">180</span><span class="token punctuation">,</span> <span class="token string">'Construction'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">190</span><span class="token punctuation">,</span> <span class="token string">'Contracting'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">'Operations'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">210</span><span class="token punctuation">,</span> <span class="token string">'IT Support'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">220</span><span class="token punctuation">,</span> <span class="token string">'NOC'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">230</span><span class="token punctuation">,</span> <span class="token string">'IT Helpdesk'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">240</span><span class="token punctuation">,</span> <span class="token string">'Government Sales'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">,</span> <span class="token string">'Retail Sales'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">260</span><span class="token punctuation">,</span> <span class="token string">'Recruiting'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">270</span><span class="token punctuation">,</span> <span class="token string">'Payroll'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Table structure for employees</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>employee_id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>first_name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>last_name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>email<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>phone_number<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>hire_date<span class="token punctuation">`</span></span> <span class="token keyword">date</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>job_id<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>salary<span class="token punctuation">`</span></span> <span class="token keyword">double</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>commission_pct<span class="token punctuation">`</span></span> <span class="token keyword">double</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>manager_id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>employee_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">UNIQUE</span> <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>emp_email_uk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>email<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">UNIQUE</span> <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>emp_emp_id_pk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>employee_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>emp_dept_fk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>emp_job_fk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>job_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>emp_manager_fk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>manager_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>emp_dept_fk<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">RESTRICT</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">RESTRICT</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>emp_job_fk<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>job_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>job_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">RESTRICT</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">RESTRICT</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>emp_manager_fk<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>manager_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>employee_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">RESTRICT</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">RESTRICT</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8_general_ci ROW_FORMAT <span class="token operator">=</span> Dynamic<span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Records of employees</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">'Steven'</span><span class="token punctuation">,</span> <span class="token string">'King'</span><span class="token punctuation">,</span> <span class="token string">'SKING'</span><span class="token punctuation">,</span> <span class="token string">'515.123.4567'</span><span class="token punctuation">,</span> <span class="token string">'1987-06-17'</span><span class="token punctuation">,</span> <span class="token string">'AD_PRES'</span><span class="token punctuation">,</span> <span class="token number">24000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">101</span><span class="token punctuation">,</span> <span class="token string">'Neena'</span><span class="token punctuation">,</span> <span class="token string">'Kochhar'</span><span class="token punctuation">,</span> <span class="token string">'NKOCHHAR'</span><span class="token punctuation">,</span> <span class="token string">'515.123.4568'</span><span class="token punctuation">,</span> <span class="token string">'1989-09-21'</span><span class="token punctuation">,</span> <span class="token string">'AD_VP'</span><span class="token punctuation">,</span> <span class="token number">17000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">102</span><span class="token punctuation">,</span> <span class="token string">'Lex'</span><span class="token punctuation">,</span> <span class="token string">'De Haan'</span><span class="token punctuation">,</span> <span class="token string">'LDEHAAN'</span><span class="token punctuation">,</span> <span class="token string">'515.123.4569'</span><span class="token punctuation">,</span> <span class="token string">'1993-01-13'</span><span class="token punctuation">,</span> <span class="token string">'AD_VP'</span><span class="token punctuation">,</span> <span class="token number">17000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">103</span><span class="token punctuation">,</span> <span class="token string">'Alexander'</span><span class="token punctuation">,</span> <span class="token string">'Hunold'</span><span class="token punctuation">,</span> <span class="token string">'AHUNOLD'</span><span class="token punctuation">,</span> <span class="token string">'590.423.4567'</span><span class="token punctuation">,</span> <span class="token string">'1990-01-03'</span><span class="token punctuation">,</span> <span class="token string">'IT_PROG'</span><span class="token punctuation">,</span> <span class="token number">9000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">102</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">104</span><span class="token punctuation">,</span> <span class="token string">'Bruce'</span><span class="token punctuation">,</span> <span class="token string">'Ernst'</span><span class="token punctuation">,</span> <span class="token string">'BERNST'</span><span class="token punctuation">,</span> <span class="token string">'590.423.4568'</span><span class="token punctuation">,</span> <span class="token string">'1991-05-21'</span><span class="token punctuation">,</span> <span class="token string">'IT_PROG'</span><span class="token punctuation">,</span> <span class="token number">6000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">103</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">105</span><span class="token punctuation">,</span> <span class="token string">'David'</span><span class="token punctuation">,</span> <span class="token string">'Austin'</span><span class="token punctuation">,</span> <span class="token string">'DAUSTIN'</span><span class="token punctuation">,</span> <span class="token string">'590.423.4569'</span><span class="token punctuation">,</span> <span class="token string">'1997-06-25'</span><span class="token punctuation">,</span> <span class="token string">'IT_PROG'</span><span class="token punctuation">,</span> <span class="token number">4800.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">103</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">106</span><span class="token punctuation">,</span> <span class="token string">'Valli'</span><span class="token punctuation">,</span> <span class="token string">'Pataballa'</span><span class="token punctuation">,</span> <span class="token string">'VPATABAL'</span><span class="token punctuation">,</span> <span class="token string">'590.423.4560'</span><span class="token punctuation">,</span> <span class="token string">'1998-02-05'</span><span class="token punctuation">,</span> <span class="token string">'IT_PROG'</span><span class="token punctuation">,</span> <span class="token number">4800.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">103</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">107</span><span class="token punctuation">,</span> <span class="token string">'Diana'</span><span class="token punctuation">,</span> <span class="token string">'Lorentz'</span><span class="token punctuation">,</span> <span class="token string">'DLORENTZ'</span><span class="token punctuation">,</span> <span class="token string">'590.423.5567'</span><span class="token punctuation">,</span> <span class="token string">'1999-02-07'</span><span class="token punctuation">,</span> <span class="token string">'IT_PROG'</span><span class="token punctuation">,</span> <span class="token number">4200.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">103</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">108</span><span class="token punctuation">,</span> <span class="token string">'Nancy'</span><span class="token punctuation">,</span> <span class="token string">'Greenberg'</span><span class="token punctuation">,</span> <span class="token string">'NGREENBE'</span><span class="token punctuation">,</span> <span class="token string">'515.124.4569'</span><span class="token punctuation">,</span> <span class="token string">'1994-08-17'</span><span class="token punctuation">,</span> <span class="token string">'FI_MGR'</span><span class="token punctuation">,</span> <span class="token number">12000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">109</span><span class="token punctuation">,</span> <span class="token string">'Daniel'</span><span class="token punctuation">,</span> <span class="token string">'Faviet'</span><span class="token punctuation">,</span> <span class="token string">'DFAVIET'</span><span class="token punctuation">,</span> <span class="token string">'515.124.4169'</span><span class="token punctuation">,</span> <span class="token string">'1994-08-16'</span><span class="token punctuation">,</span> <span class="token string">'FI_ACCOUNT'</span><span class="token punctuation">,</span> <span class="token number">9000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">110</span><span class="token punctuation">,</span> <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token string">'Chen'</span><span class="token punctuation">,</span> <span class="token string">'JCHEN'</span><span class="token punctuation">,</span> <span class="token string">'515.124.4269'</span><span class="token punctuation">,</span> <span class="token string">'1997-09-28'</span><span class="token punctuation">,</span> <span class="token string">'FI_ACCOUNT'</span><span class="token punctuation">,</span> <span class="token number">8200.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">,</span> <span class="token string">'Ismael'</span><span class="token punctuation">,</span> <span class="token string">'Sciarra'</span><span class="token punctuation">,</span> <span class="token string">'ISCIARRA'</span><span class="token punctuation">,</span> <span class="token string">'515.124.4369'</span><span class="token punctuation">,</span> <span class="token string">'1997-09-30'</span><span class="token punctuation">,</span> <span class="token string">'FI_ACCOUNT'</span><span class="token punctuation">,</span> <span class="token number">7700.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">112</span><span class="token punctuation">,</span> <span class="token string">'Jose Manuel'</span><span class="token punctuation">,</span> <span class="token string">'Urman'</span><span class="token punctuation">,</span> <span class="token string">'JMURMAN'</span><span class="token punctuation">,</span> <span class="token string">'515.124.4469'</span><span class="token punctuation">,</span> <span class="token string">'1998-03-07'</span><span class="token punctuation">,</span> <span class="token string">'FI_ACCOUNT'</span><span class="token punctuation">,</span> <span class="token number">7800.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">113</span><span class="token punctuation">,</span> <span class="token string">'Luis'</span><span class="token punctuation">,</span> <span class="token string">'Popp'</span><span class="token punctuation">,</span> <span class="token string">'LPOPP'</span><span class="token punctuation">,</span> <span class="token string">'515.124.4567'</span><span class="token punctuation">,</span> <span class="token string">'1999-12-07'</span><span class="token punctuation">,</span> <span class="token string">'FI_ACCOUNT'</span><span class="token punctuation">,</span> <span class="token number">6900.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">114</span><span class="token punctuation">,</span> <span class="token string">'Den'</span><span class="token punctuation">,</span> <span class="token string">'Raphaely'</span><span class="token punctuation">,</span> <span class="token string">'DRAPHEAL'</span><span class="token punctuation">,</span> <span class="token string">'515.127.4561'</span><span class="token punctuation">,</span> <span class="token string">'1994-12-07'</span><span class="token punctuation">,</span> <span class="token string">'PU_MAN'</span><span class="token punctuation">,</span> <span class="token number">11000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">115</span><span class="token punctuation">,</span> <span class="token string">'Alexander'</span><span class="token punctuation">,</span> <span class="token string">'Khoo'</span><span class="token punctuation">,</span> <span class="token string">'AKHOO'</span><span class="token punctuation">,</span> <span class="token string">'515.127.4562'</span><span class="token punctuation">,</span> <span class="token string">'1995-05-18'</span><span class="token punctuation">,</span> <span class="token string">'PU_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3100.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">114</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">116</span><span class="token punctuation">,</span> <span class="token string">'Shelli'</span><span class="token punctuation">,</span> <span class="token string">'Baida'</span><span class="token punctuation">,</span> <span class="token string">'SBAIDA'</span><span class="token punctuation">,</span> <span class="token string">'515.127.4563'</span><span class="token punctuation">,</span> <span class="token string">'1997-12-24'</span><span class="token punctuation">,</span> <span class="token string">'PU_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2900.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">114</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">117</span><span class="token punctuation">,</span> <span class="token string">'Sigal'</span><span class="token punctuation">,</span> <span class="token string">'Tobias'</span><span class="token punctuation">,</span> <span class="token string">'STOBIAS'</span><span class="token punctuation">,</span> <span class="token string">'515.127.4564'</span><span class="token punctuation">,</span> <span class="token string">'1997-07-24'</span><span class="token punctuation">,</span> <span class="token string">'PU_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2800.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">114</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">118</span><span class="token punctuation">,</span> <span class="token string">'Guy'</span><span class="token punctuation">,</span> <span class="token string">'Himuro'</span><span class="token punctuation">,</span> <span class="token string">'GHIMURO'</span><span class="token punctuation">,</span> <span class="token string">'515.127.4565'</span><span class="token punctuation">,</span> <span class="token string">'1998-11-15'</span><span class="token punctuation">,</span> <span class="token string">'PU_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2600.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">114</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">119</span><span class="token punctuation">,</span> <span class="token string">'Karen'</span><span class="token punctuation">,</span> <span class="token string">'Colmenares'</span><span class="token punctuation">,</span> <span class="token string">'KCOLMENA'</span><span class="token punctuation">,</span> <span class="token string">'515.127.4566'</span><span class="token punctuation">,</span> <span class="token string">'1999-08-10'</span><span class="token punctuation">,</span> <span class="token string">'PU_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2500.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">114</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token string">'Matthew'</span><span class="token punctuation">,</span> <span class="token string">'Weiss'</span><span class="token punctuation">,</span> <span class="token string">'MWEISS'</span><span class="token punctuation">,</span> <span class="token string">'650.123.1234'</span><span class="token punctuation">,</span> <span class="token string">'1996-07-18'</span><span class="token punctuation">,</span> <span class="token string">'ST_MAN'</span><span class="token punctuation">,</span> <span class="token number">8000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">121</span><span class="token punctuation">,</span> <span class="token string">'Adam'</span><span class="token punctuation">,</span> <span class="token string">'Fripp'</span><span class="token punctuation">,</span> <span class="token string">'AFRIPP'</span><span class="token punctuation">,</span> <span class="token string">'650.123.2234'</span><span class="token punctuation">,</span> <span class="token string">'1997-04-10'</span><span class="token punctuation">,</span> <span class="token string">'ST_MAN'</span><span class="token punctuation">,</span> <span class="token number">8200.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">122</span><span class="token punctuation">,</span> <span class="token string">'Payam'</span><span class="token punctuation">,</span> <span class="token string">'Kaufling'</span><span class="token punctuation">,</span> <span class="token string">'PKAUFLIN'</span><span class="token punctuation">,</span> <span class="token string">'650.123.3234'</span><span class="token punctuation">,</span> <span class="token string">'1995-05-01'</span><span class="token punctuation">,</span> <span class="token string">'ST_MAN'</span><span class="token punctuation">,</span> <span class="token number">7900.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">'Shanta'</span><span class="token punctuation">,</span> <span class="token string">'Vollman'</span><span class="token punctuation">,</span> <span class="token string">'SVOLLMAN'</span><span class="token punctuation">,</span> <span class="token string">'650.123.4234'</span><span class="token punctuation">,</span> <span class="token string">'1997-10-10'</span><span class="token punctuation">,</span> <span class="token string">'ST_MAN'</span><span class="token punctuation">,</span> <span class="token number">6500.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">124</span><span class="token punctuation">,</span> <span class="token string">'Kevin'</span><span class="token punctuation">,</span> <span class="token string">'Mourgos'</span><span class="token punctuation">,</span> <span class="token string">'KMOURGOS'</span><span class="token punctuation">,</span> <span class="token string">'650.123.5234'</span><span class="token punctuation">,</span> <span class="token string">'1999-11-16'</span><span class="token punctuation">,</span> <span class="token string">'ST_MAN'</span><span class="token punctuation">,</span> <span class="token number">5800.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">125</span><span class="token punctuation">,</span> <span class="token string">'Julia'</span><span class="token punctuation">,</span> <span class="token string">'Nayer'</span><span class="token punctuation">,</span> <span class="token string">'JNAYER'</span><span class="token punctuation">,</span> <span class="token string">'650.124.1214'</span><span class="token punctuation">,</span> <span class="token string">'1997-07-16'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3200.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">126</span><span class="token punctuation">,</span> <span class="token string">'Irene'</span><span class="token punctuation">,</span> <span class="token string">'Mikkilineni'</span><span class="token punctuation">,</span> <span class="token string">'IMIKKILI'</span><span class="token punctuation">,</span> <span class="token string">'650.124.1224'</span><span class="token punctuation">,</span> <span class="token string">'1998-09-28'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2700.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">127</span><span class="token punctuation">,</span> <span class="token string">'James'</span><span class="token punctuation">,</span> <span class="token string">'Landry'</span><span class="token punctuation">,</span> <span class="token string">'JLANDRY'</span><span class="token punctuation">,</span> <span class="token string">'650.124.1334'</span><span class="token punctuation">,</span> <span class="token string">'1999-01-14'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2400.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">,</span> <span class="token string">'Steven'</span><span class="token punctuation">,</span> <span class="token string">'Markle'</span><span class="token punctuation">,</span> <span class="token string">'SMARKLE'</span><span class="token punctuation">,</span> <span class="token string">'650.124.1434'</span><span class="token punctuation">,</span> <span class="token string">'2000-03-08'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2200.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">129</span><span class="token punctuation">,</span> <span class="token string">'Laura'</span><span class="token punctuation">,</span> <span class="token string">'Bissot'</span><span class="token punctuation">,</span> <span class="token string">'LBISSOT'</span><span class="token punctuation">,</span> <span class="token string">'650.124.5234'</span><span class="token punctuation">,</span> <span class="token string">'1997-08-20'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3300.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">130</span><span class="token punctuation">,</span> <span class="token string">'Mozhe'</span><span class="token punctuation">,</span> <span class="token string">'Atkinson'</span><span class="token punctuation">,</span> <span class="token string">'MATKINSO'</span><span class="token punctuation">,</span> <span class="token string">'650.124.6234'</span><span class="token punctuation">,</span> <span class="token string">'1997-10-30'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2800.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">131</span><span class="token punctuation">,</span> <span class="token string">'James'</span><span class="token punctuation">,</span> <span class="token string">'Marlow'</span><span class="token punctuation">,</span> <span class="token string">'JAMRLOW'</span><span class="token punctuation">,</span> <span class="token string">'650.124.7234'</span><span class="token punctuation">,</span> <span class="token string">'1997-02-16'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2500.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">132</span><span class="token punctuation">,</span> <span class="token string">'TJ'</span><span class="token punctuation">,</span> <span class="token string">'Olson'</span><span class="token punctuation">,</span> <span class="token string">'TJOLSON'</span><span class="token punctuation">,</span> <span class="token string">'650.124.8234'</span><span class="token punctuation">,</span> <span class="token string">'1999-04-10'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2100.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">133</span><span class="token punctuation">,</span> <span class="token string">'Jason'</span><span class="token punctuation">,</span> <span class="token string">'Mallin'</span><span class="token punctuation">,</span> <span class="token string">'JMALLIN'</span><span class="token punctuation">,</span> <span class="token string">'650.127.1934'</span><span class="token punctuation">,</span> <span class="token string">'1996-06-14'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3300.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">122</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">134</span><span class="token punctuation">,</span> <span class="token string">'Michael'</span><span class="token punctuation">,</span> <span class="token string">'Rogers'</span><span class="token punctuation">,</span> <span class="token string">'MROGERS'</span><span class="token punctuation">,</span> <span class="token string">'650.127.1834'</span><span class="token punctuation">,</span> <span class="token string">'1998-08-26'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2900.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">122</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">135</span><span class="token punctuation">,</span> <span class="token string">'Ki'</span><span class="token punctuation">,</span> <span class="token string">'Gee'</span><span class="token punctuation">,</span> <span class="token string">'KGEE'</span><span class="token punctuation">,</span> <span class="token string">'650.127.1734'</span><span class="token punctuation">,</span> <span class="token string">'1999-12-12'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2400.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">122</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">136</span><span class="token punctuation">,</span> <span class="token string">'Hazel'</span><span class="token punctuation">,</span> <span class="token string">'Philtanker'</span><span class="token punctuation">,</span> <span class="token string">'HPHILTAN'</span><span class="token punctuation">,</span> <span class="token string">'650.127.1634'</span><span class="token punctuation">,</span> <span class="token string">'2000-02-06'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2200.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">122</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">137</span><span class="token punctuation">,</span> <span class="token string">'Renske'</span><span class="token punctuation">,</span> <span class="token string">'Ladwig'</span><span class="token punctuation">,</span> <span class="token string">'RLADWIG'</span><span class="token punctuation">,</span> <span class="token string">'650.121.1234'</span><span class="token punctuation">,</span> <span class="token string">'1995-07-14'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3600.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">138</span><span class="token punctuation">,</span> <span class="token string">'Stephen'</span><span class="token punctuation">,</span> <span class="token string">'Stiles'</span><span class="token punctuation">,</span> <span class="token string">'SSTILES'</span><span class="token punctuation">,</span> <span class="token string">'650.121.2034'</span><span class="token punctuation">,</span> <span class="token string">'1997-10-26'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3200.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">139</span><span class="token punctuation">,</span> <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token string">'Seo'</span><span class="token punctuation">,</span> <span class="token string">'JSEO'</span><span class="token punctuation">,</span> <span class="token string">'650.121.2019'</span><span class="token punctuation">,</span> <span class="token string">'1998-02-12'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2700.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">140</span><span class="token punctuation">,</span> <span class="token string">'Joshua'</span><span class="token punctuation">,</span> <span class="token string">'Patel'</span><span class="token punctuation">,</span> <span class="token string">'JPATEL'</span><span class="token punctuation">,</span> <span class="token string">'650.121.1834'</span><span class="token punctuation">,</span> <span class="token string">'1998-04-06'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2500.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">141</span><span class="token punctuation">,</span> <span class="token string">'Trenna'</span><span class="token punctuation">,</span> <span class="token string">'Rajs'</span><span class="token punctuation">,</span> <span class="token string">'TRAJS'</span><span class="token punctuation">,</span> <span class="token string">'650.121.8009'</span><span class="token punctuation">,</span> <span class="token string">'1995-10-17'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3500.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">124</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">142</span><span class="token punctuation">,</span> <span class="token string">'Curtis'</span><span class="token punctuation">,</span> <span class="token string">'Davies'</span><span class="token punctuation">,</span> <span class="token string">'CDAVIES'</span><span class="token punctuation">,</span> <span class="token string">'650.121.2994'</span><span class="token punctuation">,</span> <span class="token string">'1997-01-29'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3100.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">124</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">143</span><span class="token punctuation">,</span> <span class="token string">'Randall'</span><span class="token punctuation">,</span> <span class="token string">'Matos'</span><span class="token punctuation">,</span> <span class="token string">'RMATOS'</span><span class="token punctuation">,</span> <span class="token string">'650.121.2874'</span><span class="token punctuation">,</span> <span class="token string">'1998-03-15'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2600.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">124</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">144</span><span class="token punctuation">,</span> <span class="token string">'Peter'</span><span class="token punctuation">,</span> <span class="token string">'Vargas'</span><span class="token punctuation">,</span> <span class="token string">'PVARGAS'</span><span class="token punctuation">,</span> <span class="token string">'650.121.2004'</span><span class="token punctuation">,</span> <span class="token string">'1998-07-09'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2500.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">124</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">145</span><span class="token punctuation">,</span> <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token string">'Russell'</span><span class="token punctuation">,</span> <span class="token string">'JRUSSEL'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1344.429268'</span><span class="token punctuation">,</span> <span class="token string">'1996-10-01'</span><span class="token punctuation">,</span> <span class="token string">'SA_MAN'</span><span class="token punctuation">,</span> <span class="token number">14000.00</span><span class="token punctuation">,</span> <span class="token number">0.40</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">146</span><span class="token punctuation">,</span> <span class="token string">'Karen'</span><span class="token punctuation">,</span> <span class="token string">'Partners'</span><span class="token punctuation">,</span> <span class="token string">'KPARTNER'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1344.467268'</span><span class="token punctuation">,</span> <span class="token string">'1997-01-05'</span><span class="token punctuation">,</span> <span class="token string">'SA_MAN'</span><span class="token punctuation">,</span> <span class="token number">13500.00</span><span class="token punctuation">,</span> <span class="token number">0.30</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">147</span><span class="token punctuation">,</span> <span class="token string">'Alberto'</span><span class="token punctuation">,</span> <span class="token string">'Errazuriz'</span><span class="token punctuation">,</span> <span class="token string">'AERRAZUR'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1344.429278'</span><span class="token punctuation">,</span> <span class="token string">'1997-03-10'</span><span class="token punctuation">,</span> <span class="token string">'SA_MAN'</span><span class="token punctuation">,</span> <span class="token number">12000.00</span><span class="token punctuation">,</span> <span class="token number">0.30</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">148</span><span class="token punctuation">,</span> <span class="token string">'Gerald'</span><span class="token punctuation">,</span> <span class="token string">'Cambrault'</span><span class="token punctuation">,</span> <span class="token string">'GCAMBRAU'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1344.619268'</span><span class="token punctuation">,</span> <span class="token string">'1999-10-15'</span><span class="token punctuation">,</span> <span class="token string">'SA_MAN'</span><span class="token punctuation">,</span> <span class="token number">11000.00</span><span class="token punctuation">,</span> <span class="token number">0.30</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">149</span><span class="token punctuation">,</span> <span class="token string">'Eleni'</span><span class="token punctuation">,</span> <span class="token string">'Zlotkey'</span><span class="token punctuation">,</span> <span class="token string">'EZLOTKEY'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1344.429018'</span><span class="token punctuation">,</span> <span class="token string">'2000-01-29'</span><span class="token punctuation">,</span> <span class="token string">'SA_MAN'</span><span class="token punctuation">,</span> <span class="token number">10500.00</span><span class="token punctuation">,</span> <span class="token number">0.20</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token string">'Peter'</span><span class="token punctuation">,</span> <span class="token string">'Tucker'</span><span class="token punctuation">,</span> <span class="token string">'PTUCKER'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1344.129268'</span><span class="token punctuation">,</span> <span class="token string">'1997-01-30'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">10000.00</span><span class="token punctuation">,</span> <span class="token number">0.30</span><span class="token punctuation">,</span> <span class="token number">145</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">151</span><span class="token punctuation">,</span> <span class="token string">'David'</span><span class="token punctuation">,</span> <span class="token string">'Bernstein'</span><span class="token punctuation">,</span> <span class="token string">'DBERNSTE'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1344.345268'</span><span class="token punctuation">,</span> <span class="token string">'1997-03-24'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">9500.00</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">145</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">152</span><span class="token punctuation">,</span> <span class="token string">'Peter'</span><span class="token punctuation">,</span> <span class="token string">'Hall'</span><span class="token punctuation">,</span> <span class="token string">'PHALL'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1344.478968'</span><span class="token punctuation">,</span> <span class="token string">'1997-08-20'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">9000.00</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">145</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">153</span><span class="token punctuation">,</span> <span class="token string">'Christopher'</span><span class="token punctuation">,</span> <span class="token string">'Olsen'</span><span class="token punctuation">,</span> <span class="token string">'COLSEN'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1344.498718'</span><span class="token punctuation">,</span> <span class="token string">'1998-03-30'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">8000.00</span><span class="token punctuation">,</span> <span class="token number">0.20</span><span class="token punctuation">,</span> <span class="token number">145</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">154</span><span class="token punctuation">,</span> <span class="token string">'Nanette'</span><span class="token punctuation">,</span> <span class="token string">'Cambrault'</span><span class="token punctuation">,</span> <span class="token string">'NCAMBRAU'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1344.987668'</span><span class="token punctuation">,</span> <span class="token string">'1998-12-09'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">7500.00</span><span class="token punctuation">,</span> <span class="token number">0.20</span><span class="token punctuation">,</span> <span class="token number">145</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">155</span><span class="token punctuation">,</span> <span class="token string">'Oliver'</span><span class="token punctuation">,</span> <span class="token string">'Tuvault'</span><span class="token punctuation">,</span> <span class="token string">'OTUVAULT'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1344.486508'</span><span class="token punctuation">,</span> <span class="token string">'1999-11-23'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">7000.00</span><span class="token punctuation">,</span> <span class="token number">0.15</span><span class="token punctuation">,</span> <span class="token number">145</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">156</span><span class="token punctuation">,</span> <span class="token string">'Janette'</span><span class="token punctuation">,</span> <span class="token string">'King'</span><span class="token punctuation">,</span> <span class="token string">'JKING'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1345.429268'</span><span class="token punctuation">,</span> <span class="token string">'1996-01-30'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">10000.00</span><span class="token punctuation">,</span> <span class="token number">0.35</span><span class="token punctuation">,</span> <span class="token number">146</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">157</span><span class="token punctuation">,</span> <span class="token string">'Patrick'</span><span class="token punctuation">,</span> <span class="token string">'Sully'</span><span class="token punctuation">,</span> <span class="token string">'PSULLY'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1345.929268'</span><span class="token punctuation">,</span> <span class="token string">'1996-03-04'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">9500.00</span><span class="token punctuation">,</span> <span class="token number">0.35</span><span class="token punctuation">,</span> <span class="token number">146</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">158</span><span class="token punctuation">,</span> <span class="token string">'Allan'</span><span class="token punctuation">,</span> <span class="token string">'McEwen'</span><span class="token punctuation">,</span> <span class="token string">'AMCEWEN'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1345.829268'</span><span class="token punctuation">,</span> <span class="token string">'1996-08-01'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">9000.00</span><span class="token punctuation">,</span> <span class="token number">0.35</span><span class="token punctuation">,</span> <span class="token number">146</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">159</span><span class="token punctuation">,</span> <span class="token string">'Lindsey'</span><span class="token punctuation">,</span> <span class="token string">'Smith'</span><span class="token punctuation">,</span> <span class="token string">'LSMITH'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1345.729268'</span><span class="token punctuation">,</span> <span class="token string">'1997-03-10'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">8000.00</span><span class="token punctuation">,</span> <span class="token number">0.30</span><span class="token punctuation">,</span> <span class="token number">146</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">160</span><span class="token punctuation">,</span> <span class="token string">'Louise'</span><span class="token punctuation">,</span> <span class="token string">'Doran'</span><span class="token punctuation">,</span> <span class="token string">'LDORAN'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1345.629268'</span><span class="token punctuation">,</span> <span class="token string">'1997-12-15'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">7500.00</span><span class="token punctuation">,</span> <span class="token number">0.30</span><span class="token punctuation">,</span> <span class="token number">146</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">161</span><span class="token punctuation">,</span> <span class="token string">'Sarath'</span><span class="token punctuation">,</span> <span class="token string">'Sewall'</span><span class="token punctuation">,</span> <span class="token string">'SSEWALL'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1345.529268'</span><span class="token punctuation">,</span> <span class="token string">'1998-11-03'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">7000.00</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">146</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">162</span><span class="token punctuation">,</span> <span class="token string">'Clara'</span><span class="token punctuation">,</span> <span class="token string">'Vishney'</span><span class="token punctuation">,</span> <span class="token string">'CVISHNEY'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1346.129268'</span><span class="token punctuation">,</span> <span class="token string">'1997-11-11'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">10500.00</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">163</span><span class="token punctuation">,</span> <span class="token string">'Danielle'</span><span class="token punctuation">,</span> <span class="token string">'Greene'</span><span class="token punctuation">,</span> <span class="token string">'DGREENE'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1346.229268'</span><span class="token punctuation">,</span> <span class="token string">'1999-03-19'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">9500.00</span><span class="token punctuation">,</span> <span class="token number">0.15</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">164</span><span class="token punctuation">,</span> <span class="token string">'Mattea'</span><span class="token punctuation">,</span> <span class="token string">'Marvins'</span><span class="token punctuation">,</span> <span class="token string">'MMARVINS'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1346.329268'</span><span class="token punctuation">,</span> <span class="token string">'2000-01-24'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">7200.00</span><span class="token punctuation">,</span> <span class="token number">0.10</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">165</span><span class="token punctuation">,</span> <span class="token string">'David'</span><span class="token punctuation">,</span> <span class="token string">'Lee'</span><span class="token punctuation">,</span> <span class="token string">'DLEE'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1346.529268'</span><span class="token punctuation">,</span> <span class="token string">'2000-02-23'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">6800.00</span><span class="token punctuation">,</span> <span class="token number">0.10</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">166</span><span class="token punctuation">,</span> <span class="token string">'Sundar'</span><span class="token punctuation">,</span> <span class="token string">'Ande'</span><span class="token punctuation">,</span> <span class="token string">'SANDE'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1346.629268'</span><span class="token punctuation">,</span> <span class="token string">'2000-03-24'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">6400.00</span><span class="token punctuation">,</span> <span class="token number">0.10</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">167</span><span class="token punctuation">,</span> <span class="token string">'Amit'</span><span class="token punctuation">,</span> <span class="token string">'Banda'</span><span class="token punctuation">,</span> <span class="token string">'ABANDA'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1346.729268'</span><span class="token punctuation">,</span> <span class="token string">'2000-04-21'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">6200.00</span><span class="token punctuation">,</span> <span class="token number">0.10</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">168</span><span class="token punctuation">,</span> <span class="token string">'Lisa'</span><span class="token punctuation">,</span> <span class="token string">'Ozer'</span><span class="token punctuation">,</span> <span class="token string">'LOZER'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1343.929268'</span><span class="token punctuation">,</span> <span class="token string">'1997-03-11'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">11500.00</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">148</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">169</span><span class="token punctuation">,</span> <span class="token string">'Harrison'</span><span class="token punctuation">,</span> <span class="token string">'Bloom'</span><span class="token punctuation">,</span> <span class="token string">'HBLOOM'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1343.829268'</span><span class="token punctuation">,</span> <span class="token string">'1998-03-23'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">10000.00</span><span class="token punctuation">,</span> <span class="token number">0.20</span><span class="token punctuation">,</span> <span class="token number">148</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">170</span><span class="token punctuation">,</span> <span class="token string">'Tayler'</span><span class="token punctuation">,</span> <span class="token string">'Fox'</span><span class="token punctuation">,</span> <span class="token string">'TFOX'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1343.729268'</span><span class="token punctuation">,</span> <span class="token string">'1998-01-24'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">9600.00</span><span class="token punctuation">,</span> <span class="token number">0.20</span><span class="token punctuation">,</span> <span class="token number">148</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">171</span><span class="token punctuation">,</span> <span class="token string">'William'</span><span class="token punctuation">,</span> <span class="token string">'Smith'</span><span class="token punctuation">,</span> <span class="token string">'WSMITH'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1343.629268'</span><span class="token punctuation">,</span> <span class="token string">'1999-02-23'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">7400.00</span><span class="token punctuation">,</span> <span class="token number">0.15</span><span class="token punctuation">,</span> <span class="token number">148</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">172</span><span class="token punctuation">,</span> <span class="token string">'Elizabeth'</span><span class="token punctuation">,</span> <span class="token string">'Bates'</span><span class="token punctuation">,</span> <span class="token string">'EBATES'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1343.529268'</span><span class="token punctuation">,</span> <span class="token string">'1999-03-24'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">7300.00</span><span class="token punctuation">,</span> <span class="token number">0.15</span><span class="token punctuation">,</span> <span class="token number">148</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">173</span><span class="token punctuation">,</span> <span class="token string">'Sundita'</span><span class="token punctuation">,</span> <span class="token string">'Kumar'</span><span class="token punctuation">,</span> <span class="token string">'SKUMAR'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1343.329268'</span><span class="token punctuation">,</span> <span class="token string">'2000-04-21'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">6100.00</span><span class="token punctuation">,</span> <span class="token number">0.10</span><span class="token punctuation">,</span> <span class="token number">148</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">174</span><span class="token punctuation">,</span> <span class="token string">'Ellen'</span><span class="token punctuation">,</span> <span class="token string">'Abel'</span><span class="token punctuation">,</span> <span class="token string">'EABEL'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1644.429267'</span><span class="token punctuation">,</span> <span class="token string">'1996-05-11'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">11000.00</span><span class="token punctuation">,</span> <span class="token number">0.30</span><span class="token punctuation">,</span> <span class="token number">149</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">175</span><span class="token punctuation">,</span> <span class="token string">'Alyssa'</span><span class="token punctuation">,</span> <span class="token string">'Hutton'</span><span class="token punctuation">,</span> <span class="token string">'AHUTTON'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1644.429266'</span><span class="token punctuation">,</span> <span class="token string">'1997-03-19'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">8800.00</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">149</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">176</span><span class="token punctuation">,</span> <span class="token string">'Jonathon'</span><span class="token punctuation">,</span> <span class="token string">'Taylor'</span><span class="token punctuation">,</span> <span class="token string">'JTAYLOR'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1644.429265'</span><span class="token punctuation">,</span> <span class="token string">'1998-03-24'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">8600.00</span><span class="token punctuation">,</span> <span class="token number">0.20</span><span class="token punctuation">,</span> <span class="token number">149</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">177</span><span class="token punctuation">,</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span> <span class="token string">'Livingston'</span><span class="token punctuation">,</span> <span class="token string">'JLIVINGS'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1644.429264'</span><span class="token punctuation">,</span> <span class="token string">'1998-04-23'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">8400.00</span><span class="token punctuation">,</span> <span class="token number">0.20</span><span class="token punctuation">,</span> <span class="token number">149</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">178</span><span class="token punctuation">,</span> <span class="token string">'Kimberely'</span><span class="token punctuation">,</span> <span class="token string">'Grant'</span><span class="token punctuation">,</span> <span class="token string">'KGRANT'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1644.429263'</span><span class="token punctuation">,</span> <span class="token string">'1999-05-24'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">7000.00</span><span class="token punctuation">,</span> <span class="token number">0.15</span><span class="token punctuation">,</span> <span class="token number">149</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">179</span><span class="token punctuation">,</span> <span class="token string">'Charles'</span><span class="token punctuation">,</span> <span class="token string">'Johnson'</span><span class="token punctuation">,</span> <span class="token string">'CJOHNSON'</span><span class="token punctuation">,</span> <span class="token string">'011.44.1644.429262'</span><span class="token punctuation">,</span> <span class="token string">'2000-01-04'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">6200.00</span><span class="token punctuation">,</span> <span class="token number">0.10</span><span class="token punctuation">,</span> <span class="token number">149</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">180</span><span class="token punctuation">,</span> <span class="token string">'Winston'</span><span class="token punctuation">,</span> <span class="token string">'Taylor'</span><span class="token punctuation">,</span> <span class="token string">'WTAYLOR'</span><span class="token punctuation">,</span> <span class="token string">'650.507.9876'</span><span class="token punctuation">,</span> <span class="token string">'1998-01-24'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3200.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">181</span><span class="token punctuation">,</span> <span class="token string">'Jean'</span><span class="token punctuation">,</span> <span class="token string">'Fleaur'</span><span class="token punctuation">,</span> <span class="token string">'JFLEAUR'</span><span class="token punctuation">,</span> <span class="token string">'650.507.9877'</span><span class="token punctuation">,</span> <span class="token string">'1998-02-23'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3100.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">182</span><span class="token punctuation">,</span> <span class="token string">'Martha'</span><span class="token punctuation">,</span> <span class="token string">'Sullivan'</span><span class="token punctuation">,</span> <span class="token string">'MSULLIVA'</span><span class="token punctuation">,</span> <span class="token string">'650.507.9878'</span><span class="token punctuation">,</span> <span class="token string">'1999-06-21'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2500.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">183</span><span class="token punctuation">,</span> <span class="token string">'Girard'</span><span class="token punctuation">,</span> <span class="token string">'Geoni'</span><span class="token punctuation">,</span> <span class="token string">'GGEONI'</span><span class="token punctuation">,</span> <span class="token string">'650.507.9879'</span><span class="token punctuation">,</span> <span class="token string">'2000-02-03'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2800.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">184</span><span class="token punctuation">,</span> <span class="token string">'Nandita'</span><span class="token punctuation">,</span> <span class="token string">'Sarchand'</span><span class="token punctuation">,</span> <span class="token string">'NSARCHAN'</span><span class="token punctuation">,</span> <span class="token string">'650.509.1876'</span><span class="token punctuation">,</span> <span class="token string">'1996-01-27'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">4200.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">185</span><span class="token punctuation">,</span> <span class="token string">'Alexis'</span><span class="token punctuation">,</span> <span class="token string">'Bull'</span><span class="token punctuation">,</span> <span class="token string">'ABULL'</span><span class="token punctuation">,</span> <span class="token string">'650.509.2876'</span><span class="token punctuation">,</span> <span class="token string">'1997-02-20'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">4100.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">186</span><span class="token punctuation">,</span> <span class="token string">'Julia'</span><span class="token punctuation">,</span> <span class="token string">'Dellinger'</span><span class="token punctuation">,</span> <span class="token string">'JDELLING'</span><span class="token punctuation">,</span> <span class="token string">'650.509.3876'</span><span class="token punctuation">,</span> <span class="token string">'1998-06-24'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3400.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">187</span><span class="token punctuation">,</span> <span class="token string">'Anthony'</span><span class="token punctuation">,</span> <span class="token string">'Cabrio'</span><span class="token punctuation">,</span> <span class="token string">'ACABRIO'</span><span class="token punctuation">,</span> <span class="token string">'650.509.4876'</span><span class="token punctuation">,</span> <span class="token string">'1999-02-07'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">188</span><span class="token punctuation">,</span> <span class="token string">'Kelly'</span><span class="token punctuation">,</span> <span class="token string">'Chung'</span><span class="token punctuation">,</span> <span class="token string">'KCHUNG'</span><span class="token punctuation">,</span> <span class="token string">'650.505.1876'</span><span class="token punctuation">,</span> <span class="token string">'1997-06-14'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3800.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">122</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">189</span><span class="token punctuation">,</span> <span class="token string">'Jennifer'</span><span class="token punctuation">,</span> <span class="token string">'Dilly'</span><span class="token punctuation">,</span> <span class="token string">'JDILLY'</span><span class="token punctuation">,</span> <span class="token string">'650.505.2876'</span><span class="token punctuation">,</span> <span class="token string">'1997-08-13'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3600.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">122</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">190</span><span class="token punctuation">,</span> <span class="token string">'Timothy'</span><span class="token punctuation">,</span> <span class="token string">'Gates'</span><span class="token punctuation">,</span> <span class="token string">'TGATES'</span><span class="token punctuation">,</span> <span class="token string">'650.505.3876'</span><span class="token punctuation">,</span> <span class="token string">'1998-07-11'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2900.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">122</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">191</span><span class="token punctuation">,</span> <span class="token string">'Randall'</span><span class="token punctuation">,</span> <span class="token string">'Perkins'</span><span class="token punctuation">,</span> <span class="token string">'RPERKINS'</span><span class="token punctuation">,</span> <span class="token string">'650.505.4876'</span><span class="token punctuation">,</span> <span class="token string">'1999-12-19'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2500.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">122</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">192</span><span class="token punctuation">,</span> <span class="token string">'Sarah'</span><span class="token punctuation">,</span> <span class="token string">'Bell'</span><span class="token punctuation">,</span> <span class="token string">'SBELL'</span><span class="token punctuation">,</span> <span class="token string">'650.501.1876'</span><span class="token punctuation">,</span> <span class="token string">'1996-02-04'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">4000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">193</span><span class="token punctuation">,</span> <span class="token string">'Britney'</span><span class="token punctuation">,</span> <span class="token string">'Everett'</span><span class="token punctuation">,</span> <span class="token string">'BEVERETT'</span><span class="token punctuation">,</span> <span class="token string">'650.501.2876'</span><span class="token punctuation">,</span> <span class="token string">'1997-03-03'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3900.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">194</span><span class="token punctuation">,</span> <span class="token string">'Samuel'</span><span class="token punctuation">,</span> <span class="token string">'McCain'</span><span class="token punctuation">,</span> <span class="token string">'SMCCAIN'</span><span class="token punctuation">,</span> <span class="token string">'650.501.3876'</span><span class="token punctuation">,</span> <span class="token string">'1998-07-01'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3200.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">195</span><span class="token punctuation">,</span> <span class="token string">'Vance'</span><span class="token punctuation">,</span> <span class="token string">'Jones'</span><span class="token punctuation">,</span> <span class="token string">'VJONES'</span><span class="token punctuation">,</span> <span class="token string">'650.501.4876'</span><span class="token punctuation">,</span> <span class="token string">'1999-03-17'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2800.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">196</span><span class="token punctuation">,</span> <span class="token string">'Alana'</span><span class="token punctuation">,</span> <span class="token string">'Walsh'</span><span class="token punctuation">,</span> <span class="token string">'AWALSH'</span><span class="token punctuation">,</span> <span class="token string">'650.507.9811'</span><span class="token punctuation">,</span> <span class="token string">'1998-04-24'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3100.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">124</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">197</span><span class="token punctuation">,</span> <span class="token string">'Kevin'</span><span class="token punctuation">,</span> <span class="token string">'Feeney'</span><span class="token punctuation">,</span> <span class="token string">'KFEENEY'</span><span class="token punctuation">,</span> <span class="token string">'650.507.9822'</span><span class="token punctuation">,</span> <span class="token string">'1998-05-23'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">3000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">124</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">198</span><span class="token punctuation">,</span> <span class="token string">'Donald'</span><span class="token punctuation">,</span> <span class="token string">'OConnell'</span><span class="token punctuation">,</span> <span class="token string">'DOCONNEL'</span><span class="token punctuation">,</span> <span class="token string">'650.507.9833'</span><span class="token punctuation">,</span> <span class="token string">'1999-06-21'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2600.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">124</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">199</span><span class="token punctuation">,</span> <span class="token string">'Douglas'</span><span class="token punctuation">,</span> <span class="token string">'Grant'</span><span class="token punctuation">,</span> <span class="token string">'DGRANT'</span><span class="token punctuation">,</span> <span class="token string">'650.507.9844'</span><span class="token punctuation">,</span> <span class="token string">'2000-01-13'</span><span class="token punctuation">,</span> <span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token number">2600.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">124</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">'Jennifer'</span><span class="token punctuation">,</span> <span class="token string">'Whalen'</span><span class="token punctuation">,</span> <span class="token string">'JWHALEN'</span><span class="token punctuation">,</span> <span class="token string">'515.123.4444'</span><span class="token punctuation">,</span> <span class="token string">'1987-09-17'</span><span class="token punctuation">,</span> <span class="token string">'AD_ASST'</span><span class="token punctuation">,</span> <span class="token number">4400.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">201</span><span class="token punctuation">,</span> <span class="token string">'Michael'</span><span class="token punctuation">,</span> <span class="token string">'Hartstein'</span><span class="token punctuation">,</span> <span class="token string">'MHARTSTE'</span><span class="token punctuation">,</span> <span class="token string">'515.123.5555'</span><span class="token punctuation">,</span> <span class="token string">'1996-02-17'</span><span class="token punctuation">,</span> <span class="token string">'MK_MAN'</span><span class="token punctuation">,</span> <span class="token number">13000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">202</span><span class="token punctuation">,</span> <span class="token string">'Pat'</span><span class="token punctuation">,</span> <span class="token string">'Fay'</span><span class="token punctuation">,</span> <span class="token string">'PFAY'</span><span class="token punctuation">,</span> <span class="token string">'603.123.6666'</span><span class="token punctuation">,</span> <span class="token string">'1997-08-17'</span><span class="token punctuation">,</span> <span class="token string">'MK_REP'</span><span class="token punctuation">,</span> <span class="token number">6000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">201</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">203</span><span class="token punctuation">,</span> <span class="token string">'Susan'</span><span class="token punctuation">,</span> <span class="token string">'Mavris'</span><span class="token punctuation">,</span> <span class="token string">'SMAVRIS'</span><span class="token punctuation">,</span> <span class="token string">'515.123.7777'</span><span class="token punctuation">,</span> <span class="token string">'1994-06-07'</span><span class="token punctuation">,</span> <span class="token string">'HR_REP'</span><span class="token punctuation">,</span> <span class="token number">6500.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">204</span><span class="token punctuation">,</span> <span class="token string">'Hermann'</span><span class="token punctuation">,</span> <span class="token string">'Baer'</span><span class="token punctuation">,</span> <span class="token string">'HBAER'</span><span class="token punctuation">,</span> <span class="token string">'515.123.8888'</span><span class="token punctuation">,</span> <span class="token string">'1994-06-07'</span><span class="token punctuation">,</span> <span class="token string">'PR_REP'</span><span class="token punctuation">,</span> <span class="token number">10000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">205</span><span class="token punctuation">,</span> <span class="token string">'Shelley'</span><span class="token punctuation">,</span> <span class="token string">'Higgins'</span><span class="token punctuation">,</span> <span class="token string">'SHIGGINS'</span><span class="token punctuation">,</span> <span class="token string">'515.123.8080'</span><span class="token punctuation">,</span> <span class="token string">'1994-06-07'</span><span class="token punctuation">,</span> <span class="token string">'AC_MGR'</span><span class="token punctuation">,</span> <span class="token number">12000.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">206</span><span class="token punctuation">,</span> <span class="token string">'William'</span><span class="token punctuation">,</span> <span class="token string">'Gietz'</span><span class="token punctuation">,</span> <span class="token string">'WGIETZ'</span><span class="token punctuation">,</span> <span class="token string">'515.123.8181'</span><span class="token punctuation">,</span> <span class="token string">'1994-06-07'</span><span class="token punctuation">,</span> <span class="token string">'AC_ACCOUNT'</span><span class="token punctuation">,</span> <span class="token number">8300.00</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">205</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Table structure for job_grades</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>job_grades<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>job_grades<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>grade_level<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>lowest_sal<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>highest_sal<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8_general_ci ROW_FORMAT <span class="token operator">=</span> Dynamic<span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Records of job_grades</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_grades<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">2999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_grades<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'B'</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token number">5999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_grades<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'C'</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">,</span> <span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_grades<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'D'</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token number">14999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_grades<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'E'</span><span class="token punctuation">,</span> <span class="token number">15000</span><span class="token punctuation">,</span> <span class="token number">24999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_grades<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'F'</span><span class="token punctuation">,</span> <span class="token number">25000</span><span class="token punctuation">,</span> <span class="token number">40000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Table structure for job_history</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>job_history<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>job_history<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>employee_id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>start_date<span class="token punctuation">`</span></span> <span class="token keyword">date</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>end_date<span class="token punctuation">`</span></span> <span class="token keyword">date</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>job_id<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>employee_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>start_date<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">UNIQUE</span> <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>jhist_emp_id_st_date_pk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>employee_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>start_date<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>jhist_job_fk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>job_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>jhist_dept_fk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>jhist_dept_fk<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">RESTRICT</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">RESTRICT</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>jhist_emp_fk<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>employee_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>employee_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">RESTRICT</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">RESTRICT</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>jhist_job_fk<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>job_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>job_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">RESTRICT</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">RESTRICT</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8_general_ci ROW_FORMAT <span class="token operator">=</span> Dynamic<span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Records of job_history</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_history<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">101</span><span class="token punctuation">,</span> <span class="token string">'1989-09-21'</span><span class="token punctuation">,</span> <span class="token string">'1993-10-27'</span><span class="token punctuation">,</span> <span class="token string">'AC_ACCOUNT'</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_history<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">101</span><span class="token punctuation">,</span> <span class="token string">'1993-10-28'</span><span class="token punctuation">,</span> <span class="token string">'1997-03-15'</span><span class="token punctuation">,</span> <span class="token string">'AC_MGR'</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_history<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">102</span><span class="token punctuation">,</span> <span class="token string">'1993-01-13'</span><span class="token punctuation">,</span> <span class="token string">'1998-07-24'</span><span class="token punctuation">,</span> <span class="token string">'IT_PROG'</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_history<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">114</span><span class="token punctuation">,</span> <span class="token string">'1998-03-24'</span><span class="token punctuation">,</span> <span class="token string">'1999-12-31'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_history<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">122</span><span class="token punctuation">,</span> <span class="token string">'1999-01-01'</span><span class="token punctuation">,</span> <span class="token string">'1999-12-31'</span><span class="token punctuation">,</span> <span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_history<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">176</span><span class="token punctuation">,</span> <span class="token string">'1998-03-24'</span><span class="token punctuation">,</span> <span class="token string">'1998-12-31'</span><span class="token punctuation">,</span> <span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_history<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">176</span><span class="token punctuation">,</span> <span class="token string">'1999-01-01'</span><span class="token punctuation">,</span> <span class="token string">'1999-12-31'</span><span class="token punctuation">,</span> <span class="token string">'SA_MAN'</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_history<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">'1987-09-17'</span><span class="token punctuation">,</span> <span class="token string">'1993-06-17'</span><span class="token punctuation">,</span> <span class="token string">'AD_ASST'</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_history<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">'1994-07-01'</span><span class="token punctuation">,</span> <span class="token string">'1998-12-31'</span><span class="token punctuation">,</span> <span class="token string">'AC_ACCOUNT'</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>job_history<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">201</span><span class="token punctuation">,</span> <span class="token string">'1996-02-17'</span><span class="token punctuation">,</span> <span class="token string">'1999-12-19'</span><span class="token punctuation">,</span> <span class="token string">'MK_REP'</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Table structure for jobs</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>job_id<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>job_title<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">35</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>min_salary<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>max_salary<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>job_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">UNIQUE</span> <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>job_id_pk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>job_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8_general_ci ROW_FORMAT <span class="token operator">=</span> Dynamic<span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Records of jobs</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'AC_ACCOUNT'</span><span class="token punctuation">,</span> <span class="token string">'Public Accountant'</span><span class="token punctuation">,</span> <span class="token number">4200</span><span class="token punctuation">,</span> <span class="token number">9000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'AC_MGR'</span><span class="token punctuation">,</span> <span class="token string">'Accounting Manager'</span><span class="token punctuation">,</span> <span class="token number">8200</span><span class="token punctuation">,</span> <span class="token number">16000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'AD_ASST'</span><span class="token punctuation">,</span> <span class="token string">'Administration Assistant'</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'AD_PRES'</span><span class="token punctuation">,</span> <span class="token string">'President'</span><span class="token punctuation">,</span> <span class="token number">20000</span><span class="token punctuation">,</span> <span class="token number">40000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'AD_VP'</span><span class="token punctuation">,</span> <span class="token string">'Administration Vice President'</span><span class="token punctuation">,</span> <span class="token number">15000</span><span class="token punctuation">,</span> <span class="token number">30000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'FI_ACCOUNT'</span><span class="token punctuation">,</span> <span class="token string">'Accountant'</span><span class="token punctuation">,</span> <span class="token number">4200</span><span class="token punctuation">,</span> <span class="token number">9000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'FI_MGR'</span><span class="token punctuation">,</span> <span class="token string">'Finance Manager'</span><span class="token punctuation">,</span> <span class="token number">8200</span><span class="token punctuation">,</span> <span class="token number">16000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'HR_REP'</span><span class="token punctuation">,</span> <span class="token string">'Human Resources Representative'</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">,</span> <span class="token number">9000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'IT_PROG'</span><span class="token punctuation">,</span> <span class="token string">'Programmer'</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'MK_MAN'</span><span class="token punctuation">,</span> <span class="token string">'Marketing Manager'</span><span class="token punctuation">,</span> <span class="token number">9000</span><span class="token punctuation">,</span> <span class="token number">15000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'MK_REP'</span><span class="token punctuation">,</span> <span class="token string">'Marketing Representative'</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">,</span> <span class="token number">9000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'PR_REP'</span><span class="token punctuation">,</span> <span class="token string">'Public Relations Representative'</span><span class="token punctuation">,</span> <span class="token number">4500</span><span class="token punctuation">,</span> <span class="token number">10500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'PU_CLERK'</span><span class="token punctuation">,</span> <span class="token string">'Purchasing Clerk'</span><span class="token punctuation">,</span> <span class="token number">2500</span><span class="token punctuation">,</span> <span class="token number">5500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'PU_MAN'</span><span class="token punctuation">,</span> <span class="token string">'Purchasing Manager'</span><span class="token punctuation">,</span> <span class="token number">8000</span><span class="token punctuation">,</span> <span class="token number">15000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'SA_MAN'</span><span class="token punctuation">,</span> <span class="token string">'Sales Manager'</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token number">20000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'SA_REP'</span><span class="token punctuation">,</span> <span class="token string">'Sales Representative'</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">,</span> <span class="token number">12000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'SH_CLERK'</span><span class="token punctuation">,</span> <span class="token string">'Shipping Clerk'</span><span class="token punctuation">,</span> <span class="token number">2500</span><span class="token punctuation">,</span> <span class="token number">5500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'ST_CLERK'</span><span class="token punctuation">,</span> <span class="token string">'Stock Clerk'</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'ST_MAN'</span><span class="token punctuation">,</span> <span class="token string">'Stock Manager'</span><span class="token punctuation">,</span> <span class="token number">5500</span><span class="token punctuation">,</span> <span class="token number">8500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Table structure for locations</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>location_id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>street_address<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>postal_code<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>city<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>state_province<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>country_id<span class="token punctuation">`</span></span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>location_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">UNIQUE</span> <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>loc_id_pk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>location_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>loc_c_id_fk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>country_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>loc_c_id_fk<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>country_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>country_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">RESTRICT</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">RESTRICT</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8_general_ci ROW_FORMAT <span class="token operator">=</span> Dynamic<span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Records of locations</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">'1297 Via Cola di Rie'</span><span class="token punctuation">,</span> <span class="token string">'00989'</span><span class="token punctuation">,</span> <span class="token string">'Roma'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">'IT'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1100</span><span class="token punctuation">,</span> <span class="token string">'93091 Calle della Testa'</span><span class="token punctuation">,</span> <span class="token string">'10934'</span><span class="token punctuation">,</span> <span class="token string">'Venice'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">'IT'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1200</span><span class="token punctuation">,</span> <span class="token string">'2017 Shinjuku-ku'</span><span class="token punctuation">,</span> <span class="token string">'1689'</span><span class="token punctuation">,</span> <span class="token string">'Tokyo'</span><span class="token punctuation">,</span> <span class="token string">'Tokyo Prefecture'</span><span class="token punctuation">,</span> <span class="token string">'JP'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1300</span><span class="token punctuation">,</span> <span class="token string">'9450 Kamiya-cho'</span><span class="token punctuation">,</span> <span class="token string">'6823'</span><span class="token punctuation">,</span> <span class="token string">'Hiroshima'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">'JP'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1400</span><span class="token punctuation">,</span> <span class="token string">'2014 Jabberwocky Rd'</span><span class="token punctuation">,</span> <span class="token string">'26192'</span><span class="token punctuation">,</span> <span class="token string">'Southlake'</span><span class="token punctuation">,</span> <span class="token string">'Texas'</span><span class="token punctuation">,</span> <span class="token string">'US'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1500</span><span class="token punctuation">,</span> <span class="token string">'2011 Interiors Blvd'</span><span class="token punctuation">,</span> <span class="token string">'99236'</span><span class="token punctuation">,</span> <span class="token string">'South San Francisco'</span><span class="token punctuation">,</span> <span class="token string">'California'</span><span class="token punctuation">,</span> <span class="token string">'US'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1600</span><span class="token punctuation">,</span> <span class="token string">'2007 Zagora St'</span><span class="token punctuation">,</span> <span class="token string">'50090'</span><span class="token punctuation">,</span> <span class="token string">'South Brunswick'</span><span class="token punctuation">,</span> <span class="token string">'New Jersey'</span><span class="token punctuation">,</span> <span class="token string">'US'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1700</span><span class="token punctuation">,</span> <span class="token string">'2004 Charade Rd'</span><span class="token punctuation">,</span> <span class="token string">'98199'</span><span class="token punctuation">,</span> <span class="token string">'Seattle'</span><span class="token punctuation">,</span> <span class="token string">'Washington'</span><span class="token punctuation">,</span> <span class="token string">'US'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1800</span><span class="token punctuation">,</span> <span class="token string">'147 Spadina Ave'</span><span class="token punctuation">,</span> <span class="token string">'M5V 2L7'</span><span class="token punctuation">,</span> <span class="token string">'Toronto'</span><span class="token punctuation">,</span> <span class="token string">'Ontario'</span><span class="token punctuation">,</span> <span class="token string">'CA'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1900</span><span class="token punctuation">,</span> <span class="token string">'6092 Boxwood St'</span><span class="token punctuation">,</span> <span class="token string">'YSW 9T2'</span><span class="token punctuation">,</span> <span class="token string">'Whitehorse'</span><span class="token punctuation">,</span> <span class="token string">'Yukon'</span><span class="token punctuation">,</span> <span class="token string">'CA'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token string">'40-5-12 Laogianggen'</span><span class="token punctuation">,</span> <span class="token string">'190518'</span><span class="token punctuation">,</span> <span class="token string">'Beijing'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">'CN'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2100</span><span class="token punctuation">,</span> <span class="token string">'1298 Vileparle (E)'</span><span class="token punctuation">,</span> <span class="token string">'490231'</span><span class="token punctuation">,</span> <span class="token string">'Bombay'</span><span class="token punctuation">,</span> <span class="token string">'Maharashtra'</span><span class="token punctuation">,</span> <span class="token string">'IN'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2200</span><span class="token punctuation">,</span> <span class="token string">'12-98 Victoria Street'</span><span class="token punctuation">,</span> <span class="token string">'2901'</span><span class="token punctuation">,</span> <span class="token string">'Sydney'</span><span class="token punctuation">,</span> <span class="token string">'New South Wales'</span><span class="token punctuation">,</span> <span class="token string">'AU'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2300</span><span class="token punctuation">,</span> <span class="token string">'198 Clementi North'</span><span class="token punctuation">,</span> <span class="token string">'540198'</span><span class="token punctuation">,</span> <span class="token string">'Singapore'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">'SG'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2400</span><span class="token punctuation">,</span> <span class="token string">'8204 Arthur St'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">'London'</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">'UK'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2500</span><span class="token punctuation">,</span> <span class="token string">'Magdalen Centre, The Oxford Science Park'</span><span class="token punctuation">,</span> <span class="token string">'OX9 9ZB'</span><span class="token punctuation">,</span> <span class="token string">'Oxford'</span><span class="token punctuation">,</span> <span class="token string">'Oxford'</span><span class="token punctuation">,</span> <span class="token string">'UK'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2600</span><span class="token punctuation">,</span> <span class="token string">'9702 Chester Road'</span><span class="token punctuation">,</span> <span class="token string">'09629850293'</span><span class="token punctuation">,</span> <span class="token string">'Stretford'</span><span class="token punctuation">,</span> <span class="token string">'Manchester'</span><span class="token punctuation">,</span> <span class="token string">'UK'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2700</span><span class="token punctuation">,</span> <span class="token string">'Schwanthalerstr. 7031'</span><span class="token punctuation">,</span> <span class="token string">'80925'</span><span class="token punctuation">,</span> <span class="token string">'Munich'</span><span class="token punctuation">,</span> <span class="token string">'Bavaria'</span><span class="token punctuation">,</span> <span class="token string">'DE'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2800</span><span class="token punctuation">,</span> <span class="token string">'Rua Frei Caneca 1360 '</span><span class="token punctuation">,</span> <span class="token string">'01307-002'</span><span class="token punctuation">,</span> <span class="token string">'Sao Paulo'</span><span class="token punctuation">,</span> <span class="token string">'Sao Paulo'</span><span class="token punctuation">,</span> <span class="token string">'BR'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2900</span><span class="token punctuation">,</span> <span class="token string">'20 Rue des Corps-Saints'</span><span class="token punctuation">,</span> <span class="token string">'1730'</span><span class="token punctuation">,</span> <span class="token string">'Geneva'</span><span class="token punctuation">,</span> <span class="token string">'Geneve'</span><span class="token punctuation">,</span> <span class="token string">'CH'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token string">'Murtenstrasse 921'</span><span class="token punctuation">,</span> <span class="token string">'3095'</span><span class="token punctuation">,</span> <span class="token string">'Bern'</span><span class="token punctuation">,</span> <span class="token string">'BE'</span><span class="token punctuation">,</span> <span class="token string">'CH'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3100</span><span class="token punctuation">,</span> <span class="token string">'Pieter Breughelstraat 837'</span><span class="token punctuation">,</span> <span class="token string">'3029SK'</span><span class="token punctuation">,</span> <span class="token string">'Utrecht'</span><span class="token punctuation">,</span> <span class="token string">'Utrecht'</span><span class="token punctuation">,</span> <span class="token string">'NL'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3200</span><span class="token punctuation">,</span> <span class="token string">'Mariano Escobedo 9991'</span><span class="token punctuation">,</span> <span class="token string">'11932'</span><span class="token punctuation">,</span> <span class="token string">'Mexico City'</span><span class="token punctuation">,</span> <span class="token string">'Distrito Federal,'</span><span class="token punctuation">,</span> <span class="token string">'MX'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Table structure for order</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>order<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>order<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>order_id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>order_name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8_general_ci ROW_FORMAT <span class="token operator">=</span> Dynamic<span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Records of order</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>order<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'shkstart'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>order<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'tomcat'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>order<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'dubbo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Table structure for regions</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>regions<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>regions<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>region_id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>region_name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>region_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">,</span>
  <span class="token keyword">UNIQUE</span> <span class="token keyword">INDEX</span> <span class="token identifier"><span class="token punctuation">`</span>reg_id_pk<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>region_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8_general_ci ROW_FORMAT <span class="token operator">=</span> Dynamic<span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Records of regions</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>regions<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'Europe'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>regions<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'Americas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>regions<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'Asia'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>regions<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'Middle East and Africa'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- View structure for emp_details_view</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">DROP</span> <span class="token keyword">VIEW</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>emp_details_view<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">ALGORITHM</span> <span class="token operator">=</span> <span class="token keyword">UNDEFINED</span> <span class="token keyword">SQL</span> SECURITY <span class="token keyword">DEFINER</span> <span class="token keyword">VIEW</span> <span class="token identifier"><span class="token punctuation">`</span>emp_details_view<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>e<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>employee_id<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>employee_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>e<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>job_id<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>job_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>e<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>manager_id<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>manager_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>e<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>d<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>location_id<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>location_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>l<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>country_id<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>country_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>e<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>first_name<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>first_name<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>e<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>last_name<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>last_name<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>e<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>salary<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>salary<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>e<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>commission_pct<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>commission_pct<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>d<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>department_name<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>department_name<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>j<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>job_title<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>job_title<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>l<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>city<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>city<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>l<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>state_province<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>state_province<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>c<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>country_name<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>country_name<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>r<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>region_name<span class="token punctuation">`</span></span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>region_name<span class="token punctuation">`</span></span> <span class="token keyword">from</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>employees<span class="token punctuation">`</span></span> <span class="token identifier"><span class="token punctuation">`</span>e<span class="token punctuation">`</span></span> <span class="token keyword">join</span> <span class="token identifier"><span class="token punctuation">`</span>departments<span class="token punctuation">`</span></span> <span class="token identifier"><span class="token punctuation">`</span>d<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">join</span> <span class="token identifier"><span class="token punctuation">`</span>jobs<span class="token punctuation">`</span></span> <span class="token identifier"><span class="token punctuation">`</span>j<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">join</span> <span class="token identifier"><span class="token punctuation">`</span>locations<span class="token punctuation">`</span></span> <span class="token identifier"><span class="token punctuation">`</span>l<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">join</span> <span class="token identifier"><span class="token punctuation">`</span>countries<span class="token punctuation">`</span></span> <span class="token identifier"><span class="token punctuation">`</span>c<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">join</span> <span class="token identifier"><span class="token punctuation">`</span>regions<span class="token punctuation">`</span></span> <span class="token identifier"><span class="token punctuation">`</span>r<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>e<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token identifier"><span class="token punctuation">`</span>d<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>d<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>location_id<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token identifier"><span class="token punctuation">`</span>l<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>location_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>l<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>country_id<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token identifier"><span class="token punctuation">`</span>c<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>country_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>c<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>region_id<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token identifier"><span class="token punctuation">`</span>r<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>region_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>j<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>job_id<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token identifier"><span class="token punctuation">`</span>e<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>job_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">SET</span> FOREIGN_KEY_CHECKS <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="基本的查询语句" tabindex="-1"><a class="header-anchor" href="#基本的查询语句" aria-hidden="true">#</a> 基本的查询语句</h1>
<h2 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> SELECT...</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 不需要from 虚表</span>
<span class="token keyword">SELECT</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token number">9</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="select-from" tabindex="-1"><a class="header-anchor" href="#select-from" aria-hidden="true">#</a> SELECT ... FROM</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span>   departments<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一般不建议使用通配符 * ，会降低查询和所使用的应用程序的效率，建议选择特定的列，如下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> location_id
<span class="token keyword">FROM</span>   departments<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="别名-as" tabindex="-1"><a class="header-anchor" href="#别名-as" aria-hidden="true">#</a> 别名 AS</h2>
<blockquote>
<p>列名	AS	别名</p>
<ul>
<li><strong>别名建议使用双引号</strong></li>
<li><strong>AS 可以省略</strong></li>
<li><strong>别名中包含空格或特殊的字符并区分大小写时，不建议省略双引号。</strong></li>
<li><strong>使用别名可以简化查询，列名前使用表名前缀可以提高查询效率。</strong></li>
<li><strong>如果使用了表的别名，在查询字段中、过滤条件中就只能使用别名进行代替，不能使用原有的表名，否则就会报错。</strong></li>
</ul>
</blockquote>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name <span class="token keyword">AS</span> name<span class="token punctuation">,</span> commission_pct comm
<span class="token keyword">FROM</span>   employees<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="去重-distinct" tabindex="-1"><a class="header-anchor" href="#去重-distinct" aria-hidden="true">#</a> 去重 DISTINCT</h2>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 但列去重</span>
<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> department_id <span class="token keyword">FROM</span> employees<span class="token punctuation">;</span>
<span class="token comment">-- 多列去重</span>
<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> department_id<span class="token punctuation">,</span>salary <span class="token keyword">FROM</span> employees<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意事项：</p>
<ul>
<li>DISTINCT 是对后面所有列名的组合进行去重</li>
<li>DISTINCT 需要放到所有列名的前面，如果写成 <code v-pre>SELECT salary, DISTINCT department_id FROM employees</code>会报错</li>
</ul>
</blockquote>
<h2 id="空值" tabindex="-1"><a class="header-anchor" href="#空值" aria-hidden="true">#</a> 空值</h2>
<blockquote>
<ul>
<li>所有运算符或列值遇到 null 值，运算的结果都为 null</li>
<li>在 MySQL 里面， 空值不等于空字符串。一个空字符串的长度是 0，而一个空值的长度是空并且占用空间</li>
</ul>
</blockquote>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>salary<span class="token punctuation">,</span>commission_pct<span class="token punctuation">,</span>
<span class="token number">12</span> <span class="token operator">*</span> salary <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> commission_pct<span class="token punctuation">)</span> <span class="token string">"annual_sal"</span>
<span class="token keyword">FROM</span> employees<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询常数" tabindex="-1"><a class="header-anchor" href="#查询常数" aria-hidden="true">#</a> 查询常数</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token string">'Sample'</span> <span class="token keyword">as</span> sample<span class="token punctuation">,</span> classification <span class="token keyword">FROM</span> creature<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询常数即在 SELECT 查询结果中增加一列固定的常数列。这列的取值由个人指定的，而不是从数据表中动态取出的。</p>
<h2 id="显示表结构" tabindex="-1"><a class="header-anchor" href="#显示表结构" aria-hidden="true">#</a> 显示表结构</h2>
<p>使用 DESCRIBE 或 DESC 命令，表示表结构</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DESCRIBE</span> employees<span class="token punctuation">;</span>
<span class="token keyword">DESC</span> employees<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mysql<span class="token operator">></span> desc employees<span class="token punctuation">;</span>
+----------------+-------------+------+-----+---------+-------+
<span class="token operator">|</span> Field          <span class="token operator">|</span> Type        <span class="token operator">|</span> Null <span class="token operator">|</span> Key <span class="token operator">|</span> Default <span class="token operator">|</span> Extra <span class="token operator">|</span>
+----------------+-------------+------+-----+---------+-------+
<span class="token operator">|</span> employee_id    <span class="token operator">|</span> int<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>      <span class="token operator">|</span> NO   <span class="token operator">|</span> PRI <span class="token operator">|</span> <span class="token number">0</span>       <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> first_name     <span class="token operator">|</span> varchar<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> NULL    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> last_name      <span class="token operator">|</span> varchar<span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token operator">|</span> NO   <span class="token operator">|</span>     <span class="token operator">|</span> NULL    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> email          <span class="token operator">|</span> varchar<span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token operator">|</span> NO   <span class="token operator">|</span> UNI <span class="token operator">|</span> NULL    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> phone_number   <span class="token operator">|</span> varchar<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> NULL    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> hire_date      <span class="token operator">|</span> <span class="token function">date</span>        <span class="token operator">|</span> NO   <span class="token operator">|</span>     <span class="token operator">|</span> NULL    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> job_id         <span class="token operator">|</span> varchar<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">|</span> NO   <span class="token operator">|</span> MUL <span class="token operator">|</span> NULL    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> salary         <span class="token operator">|</span> double<span class="token punctuation">(</span><span class="token number">8,2</span><span class="token punctuation">)</span> <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> NULL    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> commission_pct <span class="token operator">|</span> double<span class="token punctuation">(</span><span class="token number">2,2</span><span class="token punctuation">)</span> <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> NULL    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> manager_id     <span class="token operator">|</span> int<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>      <span class="token operator">|</span> YES  <span class="token operator">|</span> MUL <span class="token operator">|</span> NULL    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> department_id  <span class="token operator">|</span> int<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>      <span class="token operator">|</span> YES  <span class="token operator">|</span> MUL <span class="token operator">|</span> NULL    <span class="token operator">|</span>       <span class="token operator">|</span>
+----------------+-------------+------+-----+---------+-------+
<span class="token number">11</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>其中，各个字段的含义分别解释如下：</p>
<ul>
<li>Field：表示字段名称。</li>
<li>Type：表示字段类型，这里 barcode、goodsname 是文本型的，price 是整数类型的。</li>
<li>Null：表示该列是否可以存储NULL值。</li>
<li>Key：表示该列是否已编制索引。PRI表示该列是表主键的一部分；UNI表示该列是UNIQUE索引的一部分；MUL表示在列中某个给定值允许出现多次。</li>
<li>Default：表示该列是否有默认值，如果有，那么值是多少。</li>
<li>Extra：表示可以获取的与给定列有关的附加信息，例如 AUTO_INCREMENT 等。</li>
</ul>
</blockquote>
<h2 id="过滤-where" tabindex="-1"><a class="header-anchor" href="#过滤-where" aria-hidden="true">#</a> 过滤 where</h2>
<p>语法：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段<span class="token number">1</span><span class="token punctuation">,</span>字段<span class="token number">2</span>
<span class="token keyword">FROM</span> 表名
<span class="token keyword">WHERE</span> 过滤条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> department_id
<span class="token keyword">FROM</span>   employees
<span class="token keyword">WHERE</span>  department_id <span class="token operator">=</span> <span class="token number">90</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h1>
<h2 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h2>
<p>算术运算符主要用于数学运算，其可以连接运算符前后的两个数值或表达式，对数值或表达式进行加（+）、减（-）、乘（*）、除（/）和取模（%）运算</p>
<p>示例：加法与减法</p>
<blockquote>
<p><strong>一个整数与整数进行加法和减法操作，结果为整数；整数与浮点数进行加法和减法操作，结果为浮点数。</strong></p>
<p><strong>在 MySQL 中 + 只表示数值相加。如果遇到非数值类型，先尝试转成数值，如果转失败，就按 0 计算。</strong></p>
<p><strong>MySQL 中字符串拼接要使用字符串函数 CONCAT( ) 实现</strong></p>
</blockquote>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">-</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">50</span> <span class="token operator">-</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">35.5</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">-</span> <span class="token number">35.5</span> <span class="token keyword">FROM</span> dual<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----+---------+---------+----------+--------------+------------+------------+</span>
<span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">-</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">50</span> <span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">50</span> <span class="token operator">-</span><span class="token number">30</span> <span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">35.5</span> <span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">-</span> <span class="token number">35.5</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----+---------+---------+----------+--------------+------------+------------+</span>
<span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">|</span>     <span class="token number">100</span> <span class="token operator">|</span>     <span class="token number">100</span> <span class="token operator">|</span>      <span class="token number">150</span> <span class="token operator">|</span>          <span class="token number">120</span> <span class="token operator">|</span>      <span class="token number">135.5</span> <span class="token operator">|</span>       <span class="token number">64.5</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----+---------+---------+----------+--------------+------------+------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> <span class="token number">2</span><span class="token operator">+</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">,</span> concat<span class="token punctuation">(</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'c'</span> <span class="token punctuation">)</span> <span class="token keyword">FROM</span> dual<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">--------+---------+------------------+</span>
<span class="token operator">|</span> <span class="token number">2</span><span class="token operator">+</span> <span class="token string">'a'</span> <span class="token operator">|</span> <span class="token string">'b'</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">|</span> concat<span class="token punctuation">(</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'c'</span> <span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------+---------+------------------+</span>
<span class="token operator">|</span>      <span class="token number">2</span> <span class="token operator">|</span>       <span class="token number">3</span> <span class="token operator">|</span> <span class="token number">4</span>c               <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------+---------+------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token keyword">warnings</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：乘法与除法</p>
<blockquote>
<p>在数学运算中，0 不能用作除数，在 MySQL 中，一个数除以 0 为 NULL</p>
<p>整数与浮点数相除，结果为 浮点数</p>
<p>除不尽时，保留 4 位小数</p>
</blockquote>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">/</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">100</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">100</span> <span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">DIV</span> <span class="token number">0</span> <span class="token keyword">FROM</span> dual<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----+---------+-----------+-----------+---------+-----------------+---------+-----------+</span>
<span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token number">1.0</span> <span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">/</span> <span class="token number">1.0</span> <span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">/</span><span class="token number">3</span>  <span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">DIV</span> <span class="token number">0</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----+---------+-----------+-----------+---------+-----------------+---------+-----------+</span>
<span class="token operator">|</span> <span class="token number">100</span> <span class="token operator">|</span>     <span class="token number">100</span> <span class="token operator">|</span>     <span class="token number">100.0</span> <span class="token operator">|</span>  <span class="token number">100.0000</span> <span class="token operator">|</span> <span class="token number">50.0000</span> <span class="token operator">|</span>        <span class="token number">105.0000</span> <span class="token operator">|</span> <span class="token number">33.3333</span> <span class="token operator">|</span>      <span class="token boolean">NULL</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----+---------+-----------+-----------+---------+-----------------+---------+-----------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：求模（求余）运算符</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> <span class="token number">12</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">12</span> MOD <span class="token number">5</span> <span class="token keyword">FROM</span> dual<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">--------+----------+</span>
<span class="token operator">|</span> <span class="token number">12</span> <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token number">12</span> MOD <span class="token number">5</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------+----------+</span>
<span class="token operator">|</span>      <span class="token number">0</span> <span class="token operator">|</span>        <span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------+----------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h2>
<p>比较的结果为真则返回 1，比较的结果为假则返回 0，其他情况则返回 NULL。</p>
<h1 id="排序与分页" tabindex="-1"><a class="header-anchor" href="#排序与分页" aria-hidden="true">#</a> 排序与分页</h1>
<h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h2>
<blockquote>
<p>基本语法：  ORDER BY 列名 ASC</p>
<ul>
<li>ASC（ascend）：升序</li>
<li>DESC（descend）：降序</li>
</ul>
<p><strong>注意事项：</strong></p>
<ul>
<li>ORDER BY 子句在 SELECT 语句的结尾</li>
<li>可以使用不在 SELECT 列表中的列排序</li>
<li>对多列进行排序的时候，首先排序的第一列必须有相同的列值，才会对第二列进行排序。如果第一列数据中所有值都是唯一的，将不再对第二列进行排序。</li>
</ul>
</blockquote>
<p>单列排序：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> salary<span class="token operator">*</span><span class="token number">12</span> annsal
<span class="token keyword">FROM</span>   employees
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> annsal<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多列排序：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> department_id<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span>   employees
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> department_id<span class="token punctuation">,</span> salary <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h2>
<blockquote>
<p><strong>MySQL中使用 LIMIT 实现分页</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 格式：即从哪一行开始显示，每页显式几条记录</span>
<span class="token keyword">LIMIT</span> <span class="token punctuation">[</span>位置偏移量<span class="token punctuation">,</span><span class="token punctuation">]</span> 行数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>位置偏移量可以省略，默认为 0 ，即从第一行开始显示</p>
<p>MySQL 8.0 中可以使用 “LIMIT 3 OFFSET 4”，意思是获取从第5条记录开始后面的 3 条记录，和 “LIMIT 4,3;” 返回的结果相同。</p>
<p>分页：（当前页数-1）* 每页条数，每页条数</p>
<p>有时可以使用 LIMIT  1，只返回一条记录。</p>
</blockquote>
<p><strong>注意事项：</strong></p>
<blockquote>
<p>不同的 DBMS 中使用的关键字可能不同。在 MySQL、PostgreSQL、MariaDB 和 SQLite 中使用 LIMIT 关键字，而且需要放到 SELECT 语句的最后面。</p>
<ul>
<li>如果是 SQL Server 和 Access，需要使用 <code v-pre>TOP</code> 关键字，比如：</li>
</ul>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>SELECT TOP 5 name, hp_max FROM heros ORDER BY hp_max DESC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>如果是 DB2，使用<code v-pre>FETCH FIRST 5 ROWS ONLY</code>这样的关键字：</li>
</ul>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>SELECT name, hp_max FROM heros ORDER BY hp_max DESC FETCH FIRST 5 ROWS ONLY
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>如果是 Oracle，你需要基于 <code v-pre>ROWNUM</code> 来统计行数：</li>
</ul>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>SELECT rownum,last_name,salary FROM employees WHERE rownum &lt; 5 ORDER BY salary DESC;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要说明的是，这条语句是先取出来前 5 条数据行，然后再按照 hp_max 从高到低的顺序进行排序。但这样产生的结果和上述方法的并不一样。可以使用子查询进行分页：</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>SELECT rownum, last_name,salary
FROM (
    SELECT last_name,salary
    FROM employees
    ORDER BY salary DESC)
WHERE rownum &lt; 10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到与上述方法一致的结果。</p>
</blockquote>
<h1 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h1>
<p>多表查询，也称为关联查询，指两个或更多个表一起完成查询操作。</p>
<p>多表查询如果不加约束条件，会查询出多表的记录数的乘积大小的表数据：笛卡尔积。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> department_name
<span class="token keyword">FROM</span> employees<span class="token punctuation">,</span> departments<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="笛卡尔积-交叉连接" tabindex="-1"><a class="header-anchor" href="#笛卡尔积-交叉连接" aria-hidden="true">#</a> 笛卡尔积（交叉连接）</h2>
<p>笛卡尔乘积是一个数学运算。假设我有两个集合 X 和 Y，那么 X 和 Y 的笛卡尔积就是 X 和 Y 的所有可能组合，也就是第一个对象来自于 X，第二个对象来自于 Y 的所有可能。组合的个数即为两个集合中元素个数的乘积数。</p>
<p>SQL92中，笛卡尔积也称为<code v-pre>交叉连接</code>，英文是 <code v-pre>CROSS JOIN</code>。在 SQL99 中也是使用 CROSS JOIN表示交叉连接。它的作用就是可以把任意表进行连接，即使这两张表不相关。</p>
<p>在 MySQL 中如下情况会出现笛卡尔积：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">#查询员工姓名和所在部门名称</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>department_name <span class="token keyword">FROM</span> employees<span class="token punctuation">,</span>departments<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>department_name <span class="token keyword">FROM</span> employees <span class="token keyword">CROSS</span> <span class="token keyword">JOIN</span> departments<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>department_name <span class="token keyword">FROM</span> employees <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> departments<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>department_name <span class="token keyword">FROM</span> employees <span class="token keyword">JOIN</span> departments<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>笛卡尔积出现的条件：</strong></p>
<blockquote>
<ul>
<li>省略多个表的连接条件（或关联条件）</li>
<li>连接条件（或关联条件）无效</li>
<li>所有表中的所有行互相连接</li>
</ul>
<p><strong>为了避免笛卡尔积， 可以在 WHERE 加入有效的连接条件。</strong></p>
</blockquote>
<p>正确示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span>	table1<span class="token punctuation">.</span><span class="token keyword">column</span><span class="token punctuation">,</span> table2<span class="token punctuation">.</span><span class="token keyword">column</span>
<span class="token keyword">FROM</span>	table1<span class="token punctuation">,</span> table2
<span class="token keyword">WHERE</span>	table1<span class="token punctuation">.</span>column1 <span class="token operator">=</span> table2<span class="token punctuation">.</span>column2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：表中有相同列时，在列名之前加上表名前缀或别名，建议使用别名进行相同列名的区分</strong></p>
<h2 id="多表查询分类" tabindex="-1"><a class="header-anchor" href="#多表查询分类" aria-hidden="true">#</a> 多表查询分类</h2>
<h3 id="分类一-等值连接与非等值连接" tabindex="-1"><a class="header-anchor" href="#分类一-等值连接与非等值连接" aria-hidden="true">#</a> 分类一：等值连接与非等值连接</h3>
<h4 id="等值连接" tabindex="-1"><a class="header-anchor" href="#等值连接" aria-hidden="true">#</a> 等值连接</h4>
<blockquote>
<p>通过多张表中相等的字段值进行关联，过滤数据</p>
<p>连接 n 个表,至少需要 n-1个连接条件</p>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> e<span class="token punctuation">.</span>employee_id<span class="token punctuation">,</span> e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span> e<span class="token punctuation">.</span>department_id<span class="token punctuation">,</span>
       d<span class="token punctuation">.</span>department_id<span class="token punctuation">,</span> d<span class="token punctuation">.</span>location_id
<span class="token keyword">FROM</span>   employees e <span class="token punctuation">,</span> departments d
<span class="token keyword">WHERE</span>  e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h4 id="非等值连接" tabindex="-1"><a class="header-anchor" href="#非等值连接" aria-hidden="true">#</a> 非等值连接</h4>
<blockquote>
<p>过多张表中不相等（如某字段在另一张表中的数据范围）的字段值进行关联，过滤数据</p>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span> e<span class="token punctuation">.</span>salary<span class="token punctuation">,</span> j<span class="token punctuation">.</span>grade_level
<span class="token keyword">FROM</span>   employees e<span class="token punctuation">,</span> job_grades j
<span class="token keyword">WHERE</span>  e<span class="token punctuation">.</span>salary <span class="token operator">BETWEEN</span> j<span class="token punctuation">.</span>lowest_sal <span class="token operator">AND</span> j<span class="token punctuation">.</span>highest_sal<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h3 id="分类二-自连接与非自连接" tabindex="-1"><a class="header-anchor" href="#分类二-自连接与非自连接" aria-hidden="true">#</a> 分类二：自连接与非自连接</h3>
<h4 id="自连接" tabindex="-1"><a class="header-anchor" href="#自连接" aria-hidden="true">#</a> 自连接</h4>
<blockquote>
<p>当 table1 和 table2 本质上是同一张表，只是用取别名的方式虚拟成两张表以代表不同的意义。然后两个表再进行内连接，外连接等查询。</p>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> CONCAT<span class="token punctuation">(</span>worker<span class="token punctuation">.</span>last_name <span class="token punctuation">,</span><span class="token string">' works for '</span><span class="token punctuation">,</span> manager<span class="token punctuation">.</span>last_name<span class="token punctuation">)</span>
   <span class="token keyword">FROM</span>   employees worker<span class="token punctuation">,</span> employees manager
<span class="token keyword">WHERE</span>  worker<span class="token punctuation">.</span>manager_id <span class="token operator">=</span> manager<span class="token punctuation">.</span>employee_id <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h4 id="非自连接" tabindex="-1"><a class="header-anchor" href="#非自连接" aria-hidden="true">#</a> 非自连接</h4>
<blockquote>
<p>除去自连接。</p>
</blockquote>
<h3 id="分类三-内连接与外连接" tabindex="-1"><a class="header-anchor" href="#分类三-内连接与外连接" aria-hidden="true">#</a> 分类三：内连接与外连接</h3>
<h4 id="内连接" tabindex="-1"><a class="header-anchor" href="#内连接" aria-hidden="true">#</a> 内连接</h4>
<blockquote>
<p>结果只包含两张表中共有数据，合并具有同一列的两个以上的表的行，<strong>结果集中不包含一个表与另一个表不匹配的行</strong></p>
</blockquote>
<h4 id="外连接" tabindex="-1"><a class="header-anchor" href="#外连接" aria-hidden="true">#</a> 外连接</h4>
<blockquote>
<ul>
<li>
<p>外连接：两个表在连接过程中除了返回满足连接条件的行以外<strong>还返回左（或右）表中不满足条件的行</strong> <strong>，这种连接称为左（或右） 外连接</strong>。没有匹配的行时, 结果表中相应的列为空（NULL）。</p>
</li>
<li>
<p>如果是左外连接，则连接条件中左边的表也称为<code v-pre>主表</code>，右边的表称为<code v-pre>从表</code>。</p>
<p>如果是右外连接，则连接条件中右边的表也称为<code v-pre>主表</code>，左边的表称为<code v-pre>从表</code>。</p>
</li>
<li>
<p><strong>主表和从表看连接条件，比如三张表 LEFT JOIN，第三张表的主表规模是前两张表的规模大小，通过 ON 筛选。</strong></p>
</li>
</ul>
</blockquote>
<p>SQL92 和 SQL99 对内连接和外连接语法不同</p>
<h4 id="sql92-使用-实现内外连接" tabindex="-1"><a class="header-anchor" href="#sql92-使用-实现内外连接" aria-hidden="true">#</a> SQL92：使用 (+) 实现内外连接</h4>
<blockquote>
<ul>
<li>
<p>在 SQL92 中采用（+）代表从表所在的位置。即左或右外连接中，(+) 表示哪个是从表。</p>
</li>
<li>
<p>Oracle 对 SQL92 支持较好，而 MySQL 则不支持 SQL92 的外连接。</p>
</li>
<li>
<p>而且在 SQL92 中，只有左外连接和右外连接，没有满（或全）外连接。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">#左外连接</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>department_name
<span class="token keyword">FROM</span> employees <span class="token punctuation">,</span>departments
<span class="token keyword">WHERE</span> employees<span class="token punctuation">.</span>department_id <span class="token operator">=</span> departments<span class="token punctuation">.</span>department_id<span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">#右外连接</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>department_name
<span class="token keyword">FROM</span> employees <span class="token punctuation">,</span>departments
<span class="token keyword">WHERE</span> employees<span class="token punctuation">.</span>department_id<span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span> <span class="token operator">=</span> departments<span class="token punctuation">.</span>department_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</blockquote>
<h4 id="sql99-语法实现多表查询" tabindex="-1"><a class="header-anchor" href="#sql99-语法实现多表查询" aria-hidden="true">#</a> SQL99 语法实现多表查询</h4>
<h5 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h5>
<blockquote>
<p>使用 JOIN...ON 子句创建连接的语法结构：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> table1<span class="token punctuation">.</span><span class="token keyword">column</span><span class="token punctuation">,</span> table2<span class="token punctuation">.</span><span class="token keyword">column</span><span class="token punctuation">,</span>table3<span class="token punctuation">.</span><span class="token keyword">column</span>
<span class="token keyword">FROM</span> table1
    <span class="token keyword">JOIN</span> table2 <span class="token keyword">ON</span> table1 和 table2 的连接条件
        <span class="token keyword">JOIN</span> table3 <span class="token keyword">ON</span> table2 和 table3 的连接条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>可以使用</strong> <strong>ON</strong> <strong>子句指定额外的连接条件</strong>。</li>
<li>这个连接条件是与其它条件分开的。</li>
<li><strong>ON</strong> <strong>子句使语句具有更高的易读性</strong>。</li>
<li><strong>关键字 JOIN、INNER JOIN、CROSS JOIN 的含义都表示内连接</strong></li>
</ul>
</blockquote>
<h5 id="内连接-inner-join" tabindex="-1"><a class="header-anchor" href="#内连接-inner-join" aria-hidden="true">#</a> 内连接 INNER JOIN</h5>
<blockquote>
<ul>
<li>
<p>语法：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段列表
<span class="token keyword">FROM</span> A表 <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> B表
<span class="token keyword">ON</span> 关联条件
<span class="token keyword">WHERE</span> 等其他子句<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> city<span class="token punctuation">,</span> department_name
<span class="token keyword">FROM</span>   employees e 
<span class="token keyword">JOIN</span>   departments d
<span class="token keyword">ON</span>     d<span class="token punctuation">.</span>department_id <span class="token operator">=</span> e<span class="token punctuation">.</span>department_id 
<span class="token keyword">JOIN</span>   locations l
<span class="token keyword">ON</span>     d<span class="token punctuation">.</span>location_id <span class="token operator">=</span> l<span class="token punctuation">.</span>location_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</blockquote>
<h5 id="外连接-outer-join" tabindex="-1"><a class="header-anchor" href="#外连接-outer-join" aria-hidden="true">#</a> 外连接 OUTER JOIN</h5>
<h6 id="左外连接-left-outer-join" tabindex="-1"><a class="header-anchor" href="#左外连接-left-outer-join" aria-hidden="true">#</a> 左外连接 LEFT OUTER JOIN</h6>
<blockquote>
<ul>
<li>
<p>语法：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">#实现查询结果是A</span>
<span class="token keyword">SELECT</span> 字段列表
<span class="token keyword">FROM</span> A表 <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> B表
<span class="token keyword">ON</span> 关联条件
<span class="token keyword">WHERE</span> 等其他子句<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span> e<span class="token punctuation">.</span>department_id<span class="token punctuation">,</span> d<span class="token punctuation">.</span>department_name
<span class="token keyword">FROM</span>   employees e
<span class="token keyword">LEFT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> departments d
<span class="token keyword">ON</span>   <span class="token punctuation">(</span>e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id<span class="token punctuation">)</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</blockquote>
<h6 id="右外连接-right-outer-join" tabindex="-1"><a class="header-anchor" href="#右外连接-right-outer-join" aria-hidden="true">#</a> 右外连接 RIGHT OUTER JOIN</h6>
<blockquote>
<ul>
<li>
<p>语法：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">#实现查询结果是B</span>
<span class="token keyword">SELECT</span> 字段列表
<span class="token keyword">FROM</span> A表 <span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span> B表
<span class="token keyword">ON</span> 关联条件
<span class="token keyword">WHERE</span> 等其他子句<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>举例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span> e<span class="token punctuation">.</span>department_id<span class="token punctuation">,</span> d<span class="token punctuation">.</span>department_name
<span class="token keyword">FROM</span>   employees e
<span class="token keyword">RIGHT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> departments d
<span class="token keyword">ON</span>    <span class="token punctuation">(</span>e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id<span class="token punctuation">)</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>注意：</p>
<p>需要注意的是，LEFT JOIN 和 RIGHT JOIN 只存在于 SQL99 及以后的标准中，在 SQL92 中不存在，只能用 (+) 表示。</p>
</li>
</ul>
</blockquote>
<h6 id="满外连接-full-outer-join" tabindex="-1"><a class="header-anchor" href="#满外连接-full-outer-join" aria-hidden="true">#</a> 满外连接 FULL OUTER JOIN</h6>
<ul>
<li>满外连接的结果 = 左右表匹配的数据 + 左表没有匹配到的数据 + 右表没有匹配到的数据。</li>
<li>SQL99是支持满外连接的。使用 FULL  JOIN 或 FULL  OUTER   JOIN来实现。</li>
<li>需要注意的是，MySQL 不支持 FULL  JOIN，但是可以用 LEFT  JOIN  <strong>UNION</strong>  RIGHT  JOIN代替。</li>
</ul>
<h2 id="union的使用" tabindex="-1"><a class="header-anchor" href="#union的使用" aria-hidden="true">#</a> UNION的使用</h2>
<blockquote>
<p><strong>合并查询结果</strong></p>
<p>利用 UNION 关键字，可以给出多条SELECT语句，并将它们的结果组合成单个结果集。合并时，两个表对应的列数和数据类型必须相同，并且相互对应。各个 SELECT 语句之间使用 UNION 或 UNION ALL 关键字分隔。</p>
<p><strong>语法格式：</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">column</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">FROM</span> table1
<span class="token keyword">UNION</span> <span class="token punctuation">[</span><span class="token keyword">ALL</span><span class="token punctuation">]</span>
<span class="token keyword">SELECT</span> <span class="token keyword">column</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">FROM</span> table2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>UNION			返回两个查询的结果集的并集，去除重复记录</li>
<li>UNION   ALL   返回两个查询的结果集的并集，不去重</li>
</ul>
<p>注意：执行 UNION ALL 语句时所需要的资源比 UNION 语句少。如果明确知道合并数据后的结果数据不存在重复数据，或者不需要去除重复的数据，则尽量使用 UNION ALL 语句，以提高数据查询的效率。</p>
<ul>
<li>示例：查询部门编号&gt;90或邮箱包含a的员工信息</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 方式一</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> email <span class="token operator">LIKE</span> <span class="token string">'%a%'</span> <span class="token operator">OR</span> department_id<span class="token operator">></span><span class="token number">90</span><span class="token punctuation">;</span>

<span class="token comment">-- 方式二</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> employees  <span class="token keyword">WHERE</span> email <span class="token operator">LIKE</span> <span class="token string">'%a%'</span>
<span class="token keyword">UNION</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> employees  <span class="token keyword">WHERE</span> department_id<span class="token operator">></span><span class="token number">90</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例：查询中国用户中男性的信息以及美国用户中年男性的用户信息</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> id<span class="token punctuation">,</span>cname <span class="token keyword">FROM</span> t_chinamale <span class="token keyword">WHERE</span> csex<span class="token operator">=</span><span class="token string">'男'</span>
<span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
<span class="token keyword">SELECT</span> id<span class="token punctuation">,</span>tname <span class="token keyword">FROM</span> t_usmale <span class="token keyword">WHERE</span> tGender<span class="token operator">=</span><span class="token string">'male'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h2 id="通用的join查询" tabindex="-1"><a class="header-anchor" href="#通用的join查询" aria-hidden="true">#</a> 通用的JOIN查询</h2>
<h3 id="sql顺序" tabindex="-1"><a class="header-anchor" href="#sql顺序" aria-hidden="true">#</a> SQL顺序</h3>
<p>SQL书写顺序：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> 
<span class="token keyword">FROM</span>
<span class="token keyword">JOIN</span> <span class="token keyword">ON</span>
<span class="token keyword">WHERE</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
<span class="token keyword">HAVING</span>
<span class="token keyword">DISTINCT</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
<span class="token keyword">LIMIT</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL执行顺序：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">FROM</span>
<span class="token keyword">JOIN</span> <span class="token keyword">ON</span>
<span class="token keyword">WHERE</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
<span class="token keyword">HAVING</span>
<span class="token keyword">SELECT</span>
<span class="token keyword">DISTINCT</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
<span class="token keyword">LIMIT</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7种join理论" tabindex="-1"><a class="header-anchor" href="#_7种join理论" aria-hidden="true">#</a> 7种JOIN理论</h3>
<p><strong>注意：MySQL不支持最下面 JOIN 理论</strong></p>
<figure><img src="@source/DataBase/MySQL/7种JOIN理论.png" alt="1554979255233" tabindex="0" loading="lazy"><figcaption>1554979255233</figcaption></figure>
<p><strong>代码示例：</strong></p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>#中图：内连接 A∩B
SELECT employee_id,last_name,department_name
FROM employees e JOIN departments d
ON e.`department_id` = d.`department_id`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>#左上图：左外连接
SELECT employee_id,last_name,department_name
FROM employees e LEFT JOIN departments d
ON e.`department_id` = d.`department_id`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>#右上图：右外连接
SELECT employee_id,last_name,department_name
FROM employees e RIGHT JOIN departments d
ON e.`department_id` = d.`department_id`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>#左中图：A - A∩B
SELECT employee_id,last_name,department_name
FROM employees e LEFT JOIN departments d
ON e.`department_id` = d.`department_id`
WHERE d.`department_id` IS NULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>#右中图：B-A∩B
SELECT employee_id,last_name,department_name
FROM employees e RIGHT JOIN departments d
ON e.`department_id` = d.`department_id`
WHERE e.`department_id` IS NULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>#左下图：满外连接
# 左中图 + 右上图  A∪B
SELECT employee_id,last_name,department_name
FROM employees e LEFT JOIN departments d
ON e.`department_id` = d.`department_id`
WHERE d.`department_id` IS NULL
UNION ALL  #没有去重操作，效率高
SELECT employee_id,last_name,department_name
FROM employees e RIGHT JOIN departments d
ON e.`department_id` = d.`department_id`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>#右下图
#左中图 + 右中图  A ∪B- A∩B 或者 (A -  A∩B) ∪ （B - A∩B）
SELECT employee_id,last_name,department_name
FROM employees e LEFT JOIN departments d
ON e.`department_id` = d.`department_id`
WHERE d.`department_id` IS NULL
UNION ALL
SELECT employee_id,last_name,department_name
FROM employees e RIGHT JOIN departments d
ON e.`department_id` = d.`department_id`
WHERE e.`department_id` IS NULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql99-语法新特性" tabindex="-1"><a class="header-anchor" href="#sql99-语法新特性" aria-hidden="true">#</a> SQL99 语法新特性</h2>
<h3 id="自然连接" tabindex="-1"><a class="header-anchor" href="#自然连接" aria-hidden="true">#</a> 自然连接</h3>
<p>SQL99 在 SQL92 的基础上提供了一些特殊语法，比如 <code v-pre>NATURAL JOIN</code> 用来表示自然连接。我们可以把自然连接理解为 SQL92 中的等值连接。它会帮你自动查询两张连接表中<code v-pre>所有相同的字段</code>，然后进行<code v-pre>等值连接</code>。</p>
<p>在 SQL92 标准中：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>last_name<span class="token punctuation">,</span>department_name
<span class="token keyword">FROM</span> employees e <span class="token keyword">JOIN</span> departments d
<span class="token keyword">ON</span> e<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span> <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span>
<span class="token operator">AND</span> e<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>manager_id<span class="token punctuation">`</span></span> <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>manager_id<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 SQL99 中可以写成：</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>SELECT employee_id,last_name,department_name
FROM employees e NATURAL JOIN departments d;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="using-连接" tabindex="-1"><a class="header-anchor" href="#using-连接" aria-hidden="true">#</a> USING 连接</h3>
<p>进行连接的时候，SQL99 还支持使用 USING 指定数据表里的<code v-pre>同名字段</code>进行等值连接。但只能配合 JOIN 一起使用。比如：</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>SELECT employee_id,last_name,department_name
FROM employees e JOIN departments d
USING (department_id);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与自然连接 NATURAL JOIN 不同的是，USING 指定了具体的相同的字段名称，需要在 USING 的括号 ( ) 中填入要指定的同名字段。同时使用 <code v-pre>JOIN...USING</code> 可以简化 JOIN ON 的等值连接。它与下面的 SQL 查询结果是相同的：</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>SELECT employee_id,last_name,department_name
FROM employees e ,departments d
WHERE e.department_id = d.department_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>表连接的约束条件可以有三种方式：WHERE, ON, USING</p>
<ul>
<li>WHERE：适用于所有关联查询</li>
<li><code v-pre>ON</code>：只能和JOIN一起使用，只能写关联条件。虽然关联条件可以并到WHERE中和其他条件一起写，但分开写可读性更好。</li>
<li>USING：只能和JOIN一起使用，而且要求<strong>两个</strong>关联字段在关联表中名称一致，而且只能表示关联字段值相等</li>
</ul>
<blockquote>
<p>【强制】超过三个表禁止 join。需要 join 的字段，数据类型保持绝对一致；多表关联查询时， 保证被关联的字段需要有索引。</p>
<p>说明：即使双表 join 也要注意表索引、SQL 性能。</p>
<p>来源：阿里巴巴《Java开发手册》</p>
</blockquote>
<h1 id="单行函数" tabindex="-1"><a class="header-anchor" href="#单行函数" aria-hidden="true">#</a> 单行函数</h1>
<p>在 SQL 语言中，可以将函数分为内置函数和自定义函数。</p>
<h2 id="不同-dbms-函数的差异" tabindex="-1"><a class="header-anchor" href="#不同-dbms-函数的差异" aria-hidden="true">#</a> 不同 DBMS 函数的差异</h2>
<blockquote>
<p>使用 SQL 语言的时候，不是直接和这门语言打交道，而是通过它使用不同的数据库软件，即 DBMS。**DBMS 之间的差异性很大，远大于同一个语言不同版本之间的差异。**实际上，只有很少的函数是被 DBMS 同时支持的。</p>
<p>比如，大多数 DBMS 使用（||）或者（+）来做拼接符，而在 MySQL 中的字符串拼接函数为 concat()。大部分 DBMS 会有自己特定的函数，这就意味着<strong>采用 SQL 函数的代码可移植性是很差的</strong>，因此在使用函数的时候需要特别注意。</p>
</blockquote>
<h2 id="mysql的内置函数及分类" tabindex="-1"><a class="header-anchor" href="#mysql的内置函数及分类" aria-hidden="true">#</a> MySQL的内置函数及分类</h2>
<blockquote>
<p>MySQL 提供了丰富的内置函数，这些函数使得数据的维护与管理更加方便，能够更好地提供数据的分析与统计功能，在一定程度上提高了开发人员进行数据分析与统计的效率。</p>
<p>MySQL 提供的内置函数从<code v-pre>实现的功能角度</code>可以分为数值函数、字符串函数、日期和时间函数、流程控制函数、加密与解密函数、获取MySQL信息函数、聚合函数等。这些内置函数可以分为两类：<code v-pre>单行函数</code>、<code v-pre>聚合函数（或分组函数）</code>。</p>
<p><strong>单行函数</strong></p>
<ul>
<li>操作数据对象</li>
<li>接受参数返回一个结果</li>
<li><strong>只对一行进行变换</strong></li>
<li><strong>每行返回一个结果</strong></li>
<li>可以嵌套</li>
<li>参数可以是一列或一个值</li>
</ul>
</blockquote>
<h2 id="数值函数" tabindex="-1"><a class="header-anchor" href="#数值函数" aria-hidden="true">#</a> 数值函数</h2>
<h3 id="基本函数" tabindex="-1"><a class="header-anchor" href="#基本函数" aria-hidden="true">#</a> 基本函数</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>ABS(x)</td>
<td>返回x的绝对值</td>
</tr>
<tr>
<td>SIGN(X)</td>
<td>返回X的符号。正数返回1，负数返回-1，0返回0</td>
</tr>
<tr>
<td>PI()</td>
<td>返回圆周率的值</td>
</tr>
<tr>
<td>CEIL(x)，CEILING(x)</td>
<td>返回大于或等于某个值的最小整数</td>
</tr>
<tr>
<td>FLOOR(x)</td>
<td>返回小于或等于某个值的最大整数</td>
</tr>
<tr>
<td>LEAST(e1,e2,e3…)</td>
<td>返回列表中的最小值</td>
</tr>
<tr>
<td>GREATEST(e1,e2,e3…)</td>
<td>返回列表中的最大值</td>
</tr>
<tr>
<td>MOD(x,y)</td>
<td>返回X除以Y后的余数</td>
</tr>
<tr>
<td>RAND()</td>
<td>返回0~1的随机值</td>
</tr>
<tr>
<td>RAND(x)</td>
<td>返回 0~1 的随机值，其中 x 的值用作种子值，相同的 X 值会产生相同的随机数</td>
</tr>
<tr>
<td>ROUND(x)</td>
<td>返回一个对 x 的值进行四舍五入后，最接近于 X 的整数</td>
</tr>
<tr>
<td>ROUND(x,y)</td>
<td>返回一个对 x 的值进行四舍五入后最接近 X 的值，并保留到小数点后面Y位</td>
</tr>
<tr>
<td>TRUNCATE(x,y)</td>
<td>返回数字 x 截断为 y 位小数的结果</td>
</tr>
<tr>
<td>SQRT(x)</td>
<td>返回 x 的平方根。当 X 的值为负数时，返回NULL</td>
</tr>
</tbody>
</table>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> ABS<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">,</span>ABS<span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>SIGN<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">,</span>SIGN<span class="token punctuation">(</span><span class="token number">43</span><span class="token punctuation">)</span><span class="token punctuation">,</span>PI<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----------+---------+-----------+----------+----------+</span>
<span class="token operator">|</span> ABS<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token operator">|</span> ABS<span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">|</span> SIGN<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">23</span><span class="token punctuation">)</span> <span class="token operator">|</span> SIGN<span class="token punctuation">(</span><span class="token number">43</span><span class="token punctuation">)</span> <span class="token operator">|</span> PI<span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------+---------+-----------+----------+----------+</span>
<span class="token operator">|</span>       <span class="token number">123</span> <span class="token operator">|</span>      <span class="token number">32</span> <span class="token operator">|</span>        <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">|</span>        <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">3.141593</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------+---------+-----------+----------+----------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> CEIL<span class="token punctuation">(</span><span class="token number">32.32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>CEILING<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">43.23</span><span class="token punctuation">)</span><span class="token punctuation">,</span>FLOOR<span class="token punctuation">(</span><span class="token number">32.32</span><span class="token punctuation">)</span><span class="token punctuation">,</span> FLOOR<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">43.23</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">MOD</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-------------+-----------------+--------------+---------------+-----------+</span>
<span class="token operator">|</span> CEIL<span class="token punctuation">(</span><span class="token number">32.32</span><span class="token punctuation">)</span> <span class="token operator">|</span> CEILING<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">43.23</span><span class="token punctuation">)</span> <span class="token operator">|</span> FLOOR<span class="token punctuation">(</span><span class="token number">32.32</span><span class="token punctuation">)</span> <span class="token operator">|</span> FLOOR<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">43.23</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token function">MOD</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------+-----------------+--------------+---------------+-----------+</span>
<span class="token operator">|</span>          <span class="token number">33</span> <span class="token operator">|</span>             <span class="token operator">-</span><span class="token number">43</span> <span class="token operator">|</span>           <span class="token number">32</span> <span class="token operator">|</span>           <span class="token operator">-</span><span class="token number">44</span> <span class="token operator">|</span>         <span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------+-----------------+--------------+---------------+-----------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> RAND<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>RAND<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>RAND<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>RAND<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">--------------------+---------------------+--------------------+--------------------+</span>
<span class="token operator">|</span> RAND<span class="token punctuation">(</span><span class="token punctuation">)</span>             <span class="token operator">|</span> RAND<span class="token punctuation">(</span><span class="token punctuation">)</span>              <span class="token operator">|</span> RAND<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>           <span class="token operator">|</span> RAND<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>           <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------+---------------------+--------------------+--------------------+</span>
<span class="token operator">|</span> <span class="token number">0.5655271136812187</span> <span class="token operator">|</span> <span class="token number">0.21062797327584398</span> <span class="token operator">|</span> <span class="token number">0.6570515219653505</span> <span class="token operator">|</span> <span class="token number">0.6570515219653505</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------+---------------------+--------------------+--------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">12.33</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">12.343</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">12.324</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">TRUNCATE</span><span class="token punctuation">(</span><span class="token number">12.66</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">TRUNCATE</span><span class="token punctuation">(</span><span class="token number">12.66</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">--------------+-----------------+------------------+-------------------+--------------------+</span>
<span class="token operator">|</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">12.33</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">12.343</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">12.324</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">TRUNCATE</span><span class="token punctuation">(</span><span class="token number">12.66</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">TRUNCATE</span><span class="token punctuation">(</span><span class="token number">12.66</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------+-----------------+------------------+-------------------+--------------------+</span>
<span class="token operator">|</span>           <span class="token number">12</span> <span class="token operator">|</span>           <span class="token number">12.34</span> <span class="token operator">|</span>               <span class="token number">10</span> <span class="token operator">|</span>              <span class="token number">12.6</span> <span class="token operator">|</span>                 <span class="token number">10</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------+-----------------+------------------+-------------------+--------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="角度与弧度互换函数" tabindex="-1"><a class="header-anchor" href="#角度与弧度互换函数" aria-hidden="true">#</a> 角度与弧度互换函数</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>RADIANS(x)</td>
<td>将角度转化为弧度，其中，参数x为角度值</td>
</tr>
<tr>
<td>DEGREES(x)</td>
<td>将弧度转化为角度，其中，参数x为弧度值</td>
</tr>
</tbody>
</table>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> RADIANS<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>RADIANS<span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">,</span>RADIANS<span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">,</span>DEGREES<span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>PI<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">--------------------+--------------------+--------------------+-----------------+</span>
<span class="token operator">|</span> RADIANS<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>        <span class="token operator">|</span> RADIANS<span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span>        <span class="token operator">|</span> RADIANS<span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span>        <span class="token operator">|</span> DEGREES<span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>PI<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------+--------------------+--------------------+-----------------+</span>
<span class="token operator">|</span> <span class="token number">0.5235987755982988</span> <span class="token operator">|</span> <span class="token number">1.0471975511965976</span> <span class="token operator">|</span> <span class="token number">1.5707963267948966</span> <span class="token operator">|</span>             <span class="token number">360</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------+--------------------+--------------------+-----------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三角函数" tabindex="-1"><a class="header-anchor" href="#三角函数" aria-hidden="true">#</a> 三角函数</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>SIN(x)</td>
<td>返回x的正弦值，其中，参数x为弧度值</td>
</tr>
<tr>
<td>ASIN(x)</td>
<td>返回x的反正弦值，即获取正弦为x的值。如果x的值不在-1到1之间，则返回NULL</td>
</tr>
<tr>
<td>COS(x)</td>
<td>返回x的余弦值，其中，参数x为弧度值</td>
</tr>
<tr>
<td>ACOS(x)</td>
<td>返回x的反余弦值，即获取余弦为x的值。如果x的值不在-1到1之间，则返回NULL</td>
</tr>
<tr>
<td>TAN(x)</td>
<td>返回x的正切值，其中，参数x为弧度值</td>
</tr>
<tr>
<td>ATAN(x)</td>
<td>返回x的反正切值，即返回正切值为x的值</td>
</tr>
<tr>
<td>ATAN2(m,n)</td>
<td>返回两个参数的反正切值</td>
</tr>
<tr>
<td>COT(x)</td>
<td>返回x的余切值，其中，X为弧度值</td>
</tr>
</tbody>
</table>
<blockquote>
<p>举例：</p>
<p>ATAN2(M,N)函数返回两个参数的反正切值。<br>
与ATAN(X)函数相比，ATAN2(M,N)需要两个参数，例如有两个点point(x1,y1)和point(x2,y2)，使用ATAN(X)函数计算反正切值为ATAN((y2-y1)/(x2-x1))，使用ATAN2(M,N)计算反正切值则为ATAN2(y2-y1,x2-x1)。由使用方式可以看出，当x2-x1等于0时，ATAN(X)函数会报错，而ATAN2(M,N)函数则仍然可以计算。</p>
<p>ATAN2(M,N)函数的使用示例如下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> SIN<span class="token punctuation">(</span>RADIANS<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>DEGREES<span class="token punctuation">(</span>ASIN<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>TAN<span class="token punctuation">(</span>RADIANS<span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>DEGREES<span class="token punctuation">(</span>ATAN<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">---------------------+------------------+--------------------+------------------+</span>
<span class="token operator">|</span> SIN<span class="token punctuation">(</span>RADIANS<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token operator">|</span> DEGREES<span class="token punctuation">(</span>ASIN<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span> TAN<span class="token punctuation">(</span>RADIANS<span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token operator">|</span> DEGREES<span class="token punctuation">(</span>ATAN<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------+------------------+--------------------+------------------+</span>
<span class="token operator">|</span> <span class="token number">0.49999999999999994</span> <span class="token operator">|</span>               <span class="token number">90</span> <span class="token operator">|</span> <span class="token number">0.9999999999999999</span> <span class="token operator">|</span>               <span class="token number">45</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------+------------------+--------------------+------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h3 id="指数与对数" tabindex="-1"><a class="header-anchor" href="#指数与对数" aria-hidden="true">#</a> 指数与对数</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>POW(x,y)，POWER(X,Y)</td>
<td>返回x的y次方</td>
</tr>
<tr>
<td>EXP(X)</td>
<td>返回e的X次方，其中e是一个常数，2.718281828459045</td>
</tr>
<tr>
<td>LN(X)，LOG(X)</td>
<td>返回以e为底的X的对数，当X &lt;= 0 时，返回的结果为NULL</td>
</tr>
<tr>
<td>LOG10(X)</td>
<td>返回以10为底的X的对数，当X &lt;= 0 时，返回的结果为NULL</td>
</tr>
<tr>
<td>LOG2(X)</td>
<td>返回以2为底的X的对数，当X &lt;= 0 时，返回NULL</td>
</tr>
</tbody>
</table>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT POW(2,5),POWER(2,4),EXP(2),LN(10),LOG10(10),LOG2(4) FROM DUAL;
+----------+------------+------------------+-------------------+-----------+---------+
| POW(2,5) | POWER(2,4) | EXP(2)           | LN(10)            | LOG10(10) | LOG2(4) |
+----------+------------+------------------+-------------------+-----------+---------+
|       32 |         16 | 7.38905609893065 | 2.302585092994046 |         1 |       2 |
+----------+------------+------------------+-------------------+-----------+---------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进制间的转换" tabindex="-1"><a class="header-anchor" href="#进制间的转换" aria-hidden="true">#</a> 进制间的转换</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>BIN(x)</td>
<td>返回x的二进制编码</td>
</tr>
<tr>
<td>HEX(x)</td>
<td>返回x的十六进制编码</td>
</tr>
<tr>
<td>OCT(x)</td>
<td>返回x的八进制编码</td>
</tr>
<tr>
<td>CONV(x,f1,f2)</td>
<td>返回f1进制数变成f2进制数</td>
</tr>
</tbody>
</table>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT BIN(10),HEX(10),OCT(10),CONV(10,2,8) FROM DUAL;
+---------+---------+---------+--------------+
| BIN(10) | HEX(10) | OCT(10) | CONV(10,2,8) |
+---------+---------+---------+--------------+
| 1010    | A       | 12      | 2            |
+---------+---------+---------+--------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串函数" tabindex="-1"><a class="header-anchor" href="#字符串函数" aria-hidden="true">#</a> 字符串函数</h2>
<p>【注意：MySQL中，字符串的位置是从1开始的。】</p>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>ASCII(S)</td>
<td>返回字符串S中的第一个字符的ASCII码值</td>
</tr>
<tr>
<td>CHAR_LENGTH(s)</td>
<td>返回字符串s的字符数。作用与CHARACTER_LENGTH(s)相同</td>
</tr>
<tr>
<td>LENGTH(s)</td>
<td>返回字符串s的字节数，和字符集有关</td>
</tr>
<tr>
<td>CONCAT(s1,s2,......,sn)</td>
<td>连接s1,s2,......,sn为一个字符串</td>
</tr>
<tr>
<td>CONCAT_WS(x, s1,s2,......,sn)</td>
<td>同CONCAT(s1,s2,...)函数，但是每个字符串之间要加上x</td>
</tr>
<tr>
<td>INSERT(str, idx, len, replacestr)</td>
<td>将字符串str从第idx位置开始，len个字符长的子串替换为字符串replacestr</td>
</tr>
<tr>
<td>REPLACE(str, a, b)</td>
<td>用字符串b替换字符串str中所有出现的字符串a</td>
</tr>
<tr>
<td>UPPER(s) 或 UCASE(s)</td>
<td>将字符串s的所有字母转成大写字母</td>
</tr>
<tr>
<td>LOWER(s)  或LCASE(s)</td>
<td>将字符串s的所有字母转成小写字母</td>
</tr>
<tr>
<td>LEFT(str,n)</td>
<td>返回字符串str最左边的n个字符</td>
</tr>
<tr>
<td>RIGHT(str,n)</td>
<td>返回字符串str最右边的n个字符</td>
</tr>
<tr>
<td>LPAD(str, len, pad)</td>
<td>用字符串pad对str最左边进行填充，直到str的长度为len个字符</td>
</tr>
<tr>
<td>RPAD(str ,len, pad)</td>
<td>用字符串pad对str最右边进行填充，直到str的长度为len个字符</td>
</tr>
<tr>
<td>LTRIM(s)</td>
<td>去掉字符串s左侧的空格</td>
</tr>
<tr>
<td>RTRIM(s)</td>
<td>去掉字符串s右侧的空格</td>
</tr>
<tr>
<td>TRIM(s)</td>
<td>去掉字符串s开始与结尾的空格</td>
</tr>
<tr>
<td>TRIM(s1 FROM s)</td>
<td>去掉字符串s开始与结尾的s1</td>
</tr>
<tr>
<td>TRIM(LEADING s1 FROM s)</td>
<td>去掉字符串s开始处的s1</td>
</tr>
<tr>
<td>TRIM(TRAILING s1 FROM s)</td>
<td>去掉字符串s结尾处的s1</td>
</tr>
<tr>
<td>REPEAT(str, n)</td>
<td>返回str重复n次的结果</td>
</tr>
<tr>
<td>SPACE(n)</td>
<td>返回n个空格</td>
</tr>
<tr>
<td>STRCMP(s1,s2)</td>
<td>比较字符串s1,s2的ASCII码值的大小</td>
</tr>
<tr>
<td>SUBSTR(s,index,len)</td>
<td>返回从字符串s的index位置其len个字符，作用与SUBSTRING(s,n,len)、MID(s,n,len)相同</td>
</tr>
<tr>
<td>LOCATE(substr,str)</td>
<td>返回字符串substr在字符串str中首次出现的位置，作用于POSITION(substr IN str)、INSTR(str,substr)相同。未找到，返回0</td>
</tr>
<tr>
<td>ELT(m,s1,s2,…,sn)</td>
<td>返回指定位置的字符串，如果m=1，则返回s1，如果m=2，则返回s2，如果m=n，则返回sn</td>
</tr>
<tr>
<td>FIELD(s,s1,s2,…,sn)</td>
<td>返回字符串s在字符串列表中第一次出现的位置</td>
</tr>
<tr>
<td>FIND_IN_SET(s1,s2)</td>
<td>返回字符串s1在字符串s2中出现的位置。其中，字符串s2是一个以逗号分隔的字符串</td>
</tr>
<tr>
<td>REVERSE(s)</td>
<td>返回s反转后的字符串</td>
</tr>
<tr>
<td>NULLIF(value1,value2)</td>
<td>比较两个字符串，如果value1与value2相等，则返回NULL，否则返回value1</td>
</tr>
</tbody>
</table>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> FIELD<span class="token punctuation">(</span><span class="token string">'mm'</span><span class="token punctuation">,</span><span class="token string">'hello'</span><span class="token punctuation">,</span><span class="token string">'msm'</span><span class="token punctuation">,</span><span class="token string">'amma'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>FIND_IN_SET<span class="token punctuation">(</span><span class="token string">'mm'</span><span class="token punctuation">,</span><span class="token string">'hello,mm,amma'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----------------------------------+-----------------------------------+</span>
<span class="token operator">|</span> FIELD<span class="token punctuation">(</span><span class="token string">'mm'</span><span class="token punctuation">,</span><span class="token string">'hello'</span><span class="token punctuation">,</span><span class="token string">'msm'</span><span class="token punctuation">,</span><span class="token string">'amma'</span><span class="token punctuation">)</span> <span class="token operator">|</span> FIND_IN_SET<span class="token punctuation">(</span><span class="token string">'mm'</span><span class="token punctuation">,</span><span class="token string">'hello,mm,amma'</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------------------------------+-----------------------------------+</span>
<span class="token operator">|</span>                                <span class="token number">0</span> <span class="token operator">|</span>                                 <span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------------------------------+-----------------------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> <span class="token keyword">NULLIF</span><span class="token punctuation">(</span><span class="token string">'mysql'</span><span class="token punctuation">,</span><span class="token string">'mysql'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">NULLIF</span><span class="token punctuation">(</span><span class="token string">'mysql'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-------------------------+---------------------+</span>
<span class="token operator">|</span> <span class="token keyword">NULLIF</span><span class="token punctuation">(</span><span class="token string">'mysql'</span><span class="token punctuation">,</span><span class="token string">'mysql'</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">NULLIF</span><span class="token punctuation">(</span><span class="token string">'mysql'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------------------+---------------------+</span>
<span class="token operator">|</span> <span class="token boolean">NULL</span>                    <span class="token operator">|</span> mysql               <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------------------+---------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日期和时间函数" tabindex="-1"><a class="header-anchor" href="#日期和时间函数" aria-hidden="true">#</a> 日期和时间函数</h2>
<h3 id="获取日期、时间" tabindex="-1"><a class="header-anchor" href="#获取日期、时间" aria-hidden="true">#</a> 获取日期、时间</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>CURDATE()</strong> ，CURRENT_DATE()</td>
<td>返回当前日期，只包含年、月、日</td>
</tr>
<tr>
<td><strong>CURTIME()</strong> ， CURRENT_TIME()</td>
<td>返回当前时间，只包含时、分、秒</td>
</tr>
<tr>
<td><strong>NOW()</strong> / SYSDATE() / CURRENT_TIMESTAMP() / LOCALTIME() / LOCALTIMESTAMP()</td>
<td>返回当前系统日期和时间</td>
</tr>
<tr>
<td>UTC_DATE()</td>
<td>返回UTC（世界标准时间）日期</td>
</tr>
<tr>
<td>UTC_TIME()</td>
<td>返回UTC（世界标准时间）时间</td>
</tr>
</tbody>
</table>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>CURTIME<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">CURRENT_TIMESTAMP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>SYSDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">0</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------------+-----------+---------------------+---------------------+----------------+</span>
<span class="token operator">|</span> CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">|</span> CURTIME<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">CURRENT_TIMESTAMP</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>               <span class="token operator">|</span> SYSDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">0</span>    <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------+-----------+---------------------+---------------------+----------------+</span>
<span class="token operator">|</span> <span class="token number">2023</span><span class="token operator">-</span><span class="token number">03</span><span class="token operator">-</span><span class="token number">08</span> <span class="token operator">|</span> <span class="token number">22</span>:<span class="token number">34</span>:<span class="token number">24</span>  <span class="token operator">|</span> <span class="token number">2023</span><span class="token operator">-</span><span class="token number">03</span><span class="token operator">-</span><span class="token number">08</span> <span class="token number">22</span>:<span class="token number">34</span>:<span class="token number">24</span> <span class="token operator">|</span> <span class="token number">2023</span><span class="token operator">-</span><span class="token number">03</span><span class="token operator">-</span><span class="token number">08</span> <span class="token number">22</span>:<span class="token number">34</span>:<span class="token number">24</span> <span class="token operator">|</span> <span class="token number">20230308223424</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------+-----------+---------------------+---------------------+----------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日期与时间戳的转换" tabindex="-1"><a class="header-anchor" href="#日期与时间戳的转换" aria-hidden="true">#</a> 日期与时间戳的转换</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>UNIX_TIMESTAMP()</td>
<td>以UNIX时间戳的形式返回当前时间。SELECT UNIX_TIMESTAMP() -&gt;1634348884</td>
</tr>
<tr>
<td>UNIX_TIMESTAMP(date)</td>
<td>将时间date以UNIX时间戳的形式返回。</td>
</tr>
<tr>
<td>FROM_UNIXTIME(timestamp)</td>
<td>将UNIX时间戳的时间转换为普通格式的时间</td>
</tr>
</tbody>
</table>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> UNIX_TIMESTAMP<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>UNIX_TIMESTAMP<span class="token punctuation">(</span>CURTIME<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>UNIX_TIMESTAMP<span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">---------------------------+---------------------------+-----------------------+</span>
<span class="token operator">|</span> UNIX_TIMESTAMP<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span> UNIX_TIMESTAMP<span class="token punctuation">(</span>CURTIME<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span> UNIX_TIMESTAMP<span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------+---------------------------+-----------------------+</span>
<span class="token operator">|</span>                <span class="token number">1678204800</span> <span class="token operator">|</span>                <span class="token number">1678286411</span> <span class="token operator">|</span>            <span class="token number">1678286411</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------+---------------------------+-----------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span>  <span class="token keyword">SELECT</span> UNIX_TIMESTAMP<span class="token punctuation">(</span><span class="token string">'2022-02-28 08:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>FROM_UNIXTIME<span class="token punctuation">(</span><span class="token number">1596380910</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">---------------------------------------+---------------------------+</span>
<span class="token operator">|</span> UNIX_TIMESTAMP<span class="token punctuation">(</span><span class="token string">'2022-02-28 08:00:00'</span><span class="token punctuation">)</span> <span class="token operator">|</span> FROM_UNIXTIME<span class="token punctuation">(</span><span class="token number">1596380910</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------------------+---------------------------+</span>
<span class="token operator">|</span>                            <span class="token number">1646006400</span> <span class="token operator">|</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">02</span> <span class="token number">23</span>:<span class="token number">08</span>:<span class="token number">30</span>       <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------------------+---------------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取月份、星期、星期数、天数等" tabindex="-1"><a class="header-anchor" href="#获取月份、星期、星期数、天数等" aria-hidden="true">#</a> 获取月份、星期、星期数、天数等</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>YEAR(date) / MONTH(date) / DAY(date)</td>
<td>返回具体的日期值</td>
</tr>
<tr>
<td>HOUR(time) / MINUTE(time) / SECOND(time)</td>
<td>返回具体的时间值</td>
</tr>
<tr>
<td>MONTHNAME(date)</td>
<td>返回月份：January，...</td>
</tr>
<tr>
<td>DAYNAME(date)</td>
<td>返回星期几：MONDAY，TUESDAY.....SUNDAY</td>
</tr>
<tr>
<td>WEEKDAY(date)</td>
<td>返回周几，注意，周1是0，周2是1，。。。周日是6</td>
</tr>
<tr>
<td>QUARTER(date)</td>
<td>返回日期对应的季度，范围为1～4</td>
</tr>
<tr>
<td>WEEK(date) ， WEEKOFYEAR(date)</td>
<td>返回一年中的第几周</td>
</tr>
<tr>
<td>DAYOFYEAR(date)</td>
<td>返回日期是一年中的第几天</td>
</tr>
<tr>
<td>DAYOFMONTH(date)</td>
<td>返回日期位于所在月份的第几天</td>
</tr>
<tr>
<td>DAYOFWEEK(date)</td>
<td>返回周几，注意：周日是1，周一是2，。。。周六是7</td>
</tr>
</tbody>
</table>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> <span class="token keyword">YEAR</span><span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">MONTH</span><span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">DAY</span><span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----------------+------------------+----------------+</span>
<span class="token operator">|</span> <span class="token keyword">YEAR</span><span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">MONTH</span><span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">DAY</span><span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+------------------+----------------+</span>
<span class="token operator">|</span>            <span class="token number">2023</span> <span class="token operator">|</span>                <span class="token number">3</span> <span class="token operator">|</span>              <span class="token number">8</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+------------------+----------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> <span class="token keyword">HOUR</span><span class="token punctuation">(</span>CURTIME<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">MINUTE</span><span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">SECOND</span><span class="token punctuation">(</span>SYSDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----------------+---------------+-------------------+</span>
<span class="token operator">|</span> <span class="token keyword">HOUR</span><span class="token punctuation">(</span>CURTIME<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">MINUTE</span><span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">SECOND</span><span class="token punctuation">(</span>SYSDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+---------------+-------------------+</span>
<span class="token operator">|</span>              <span class="token number">22</span> <span class="token operator">|</span>            <span class="token number">47</span> <span class="token operator">|</span>                <span class="token number">18</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+---------------+-------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> WEEKDAY<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>DAYOFYEAR<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>DAYOFMONTH<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>DAYOFWEEK<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">--------------------+------------------+-------------------+------------------+</span>
<span class="token operator">|</span> WEEKDAY<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span> DAYOFYEAR<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span> DAYOFMONTH<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span> DAYOFWEEK<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------+------------------+-------------------+------------------+</span>
<span class="token operator">|</span>                  <span class="token number">2</span> <span class="token operator">|</span>               <span class="token number">67</span> <span class="token operator">|</span>                 <span class="token number">8</span> <span class="token operator">|</span>                <span class="token number">4</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------+------------------+-------------------+------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日期的格式化与解析" tabindex="-1"><a class="header-anchor" href="#日期的格式化与解析" aria-hidden="true">#</a> 日期的格式化与解析</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>DATE_FORMAT(date,fmt)</td>
<td>按照字符串fmt格式化日期date值</td>
</tr>
<tr>
<td>TIME_FORMAT(time,fmt)</td>
<td>按照字符串fmt格式化时间time值</td>
</tr>
<tr>
<td>GET_FORMAT(date_type, format_type)</td>
<td>返回日期字符串的显示格式</td>
</tr>
<tr>
<td>STR_TO_DATE(str, fmt)</td>
<td>按照字符串fmt对str进行解析，解析为一个日期</td>
</tr>
</tbody>
</table>
<p>上述<code v-pre>非GET_FORMAT</code>函数中fmt参数常用的格式符：</p>
<p>常用格式：%Y-%m-%d %H:%i:%s</p>
<table>
<thead>
<tr>
<th>格式符</th>
<th>说明</th>
<th>格式符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>%Y</td>
<td>4位数字表示年份</td>
<td>%y</td>
<td>表示两位数字表示年份</td>
</tr>
<tr>
<td>%M</td>
<td>月名表示月份（January,....）</td>
<td>%m</td>
<td>两位数字表示月份（01,02,03。。。）</td>
</tr>
<tr>
<td>%b</td>
<td>缩写的月名（Jan.，Feb.，....）</td>
<td>%c</td>
<td>数字表示月份（1,2,3,...）</td>
</tr>
<tr>
<td>%D</td>
<td>英文后缀表示月中的天数（1st,2nd,3rd,...）</td>
<td>%d</td>
<td>两位数字表示月中的天数(01,02...)</td>
</tr>
<tr>
<td>%e</td>
<td>数字形式表示月中的天数（1,2,3,4,5.....）</td>
<td></td>
<td></td>
</tr>
<tr>
<td>%H</td>
<td>两位数字表示小数，24小时制（01,02..）</td>
<td>%h和%I</td>
<td>两位数字表示小时，12小时制（01,02..）</td>
</tr>
<tr>
<td>%k</td>
<td>数字形式的小时，24小时制(1,2,3)</td>
<td>%l</td>
<td>数字形式表示小时，12小时制（1,2,3,4....）</td>
</tr>
<tr>
<td>%i</td>
<td>两位数字表示分钟（00,01,02）</td>
<td>%S和%s</td>
<td>两位数字表示秒(00,01,02...)</td>
</tr>
<tr>
<td>%W</td>
<td>一周中的星期名称（Sunday...）</td>
<td>%a</td>
<td>一周中的星期缩写（Sun.，Mon.,Tues.，..）</td>
</tr>
<tr>
<td>%w</td>
<td>以数字表示周中的天数(0=Sunday,1=Monday....)</td>
<td></td>
<td></td>
</tr>
<tr>
<td>%j</td>
<td>以3位数字表示年中的天数(001,002...)</td>
<td>%U</td>
<td>以数字表示年中的第几周，（1,2,3。。）其中Sunday为周中第一天</td>
</tr>
<tr>
<td>%u</td>
<td>以数字表示年中的第几周，（1,2,3。。）其中Monday为周中第一天</td>
<td></td>
<td></td>
</tr>
<tr>
<td>%T</td>
<td>24小时制</td>
<td>%r</td>
<td>12小时制</td>
</tr>
<tr>
<td>%p</td>
<td>AM或PM</td>
<td>%%</td>
<td>表示%</td>
</tr>
</tbody>
</table>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> DATE_FORMAT<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'%H:%i:%s'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>STR_TO_DATE<span class="token punctuation">(</span><span class="token string">'09/01/2009'</span><span class="token punctuation">,</span><span class="token string">'%m/%d/%Y'</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">--------------------------------+--------------------------------------+</span>
<span class="token operator">|</span> DATE_FORMAT<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'%H:%i:%s'</span><span class="token punctuation">)</span> <span class="token operator">|</span> STR_TO_DATE<span class="token punctuation">(</span><span class="token string">'09/01/2009'</span><span class="token punctuation">,</span><span class="token string">'%m/%d/%Y'</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------------------+--------------------------------------+</span>
<span class="token operator">|</span> <span class="token number">22</span>:<span class="token number">56</span>:<span class="token number">44</span>                       <span class="token operator">|</span> <span class="token number">2009</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span>                           <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------------------+--------------------------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> STR_TO_DATE<span class="token punctuation">(</span><span class="token string">'20140422154706'</span><span class="token punctuation">,</span><span class="token string">'%Y%m%d%H%i%s'</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> date01<span class="token punctuation">,</span>STR_TO_DATE<span class="token punctuation">(</span><span class="token string">'2020-01-01 00:00:00'</span><span class="token punctuation">,</span><span class="token string">'%Y-%m-%d'</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> date02<span class="token punctuation">,</span>STR_TO_DATE<span class="token punctuation">(</span><span class="token string">'2014-04-22 15:47:06'</span><span class="token punctuation">,</span><span class="token string">'%Y-%m-%d %H:%i:%s'</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> date03<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">---------------------+------------+---------------------+</span>
<span class="token operator">|</span> date01              <span class="token operator">|</span> date02     <span class="token operator">|</span> date03              <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------+------------+---------------------+</span>
<span class="token operator">|</span> <span class="token number">2014</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">22</span> <span class="token number">15</span>:<span class="token number">47</span>:<span class="token number">06</span> <span class="token operator">|</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token operator">|</span> <span class="token number">2014</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">22</span> <span class="token number">15</span>:<span class="token number">47</span>:<span class="token number">06</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------+------------+---------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span><span class="token punctuation">,</span> <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GET_FORMAT函数中 date_type 和 format_type 参数取值如下：</p>
<figure><img src="@source/DataBase/MySQL/Get_Format与date_type关系.png" alt="Get_Format与date_type关系.png" tabindex="0" loading="lazy"><figcaption>Get_Format与date_type关系.png</figcaption></figure>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> GET_FORMAT<span class="token punctuation">(</span><span class="token keyword">DATE</span><span class="token punctuation">,</span> <span class="token string">'USA'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>DATE_FORMAT<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>GET_FORMAT<span class="token punctuation">(</span><span class="token keyword">DATE</span><span class="token punctuation">,</span><span class="token string">'USA'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-------------------------+-------------------------------------------+</span>
<span class="token operator">|</span> GET_FORMAT<span class="token punctuation">(</span><span class="token keyword">DATE</span><span class="token punctuation">,</span> <span class="token string">'USA'</span><span class="token punctuation">)</span> <span class="token operator">|</span> DATE_FORMAT<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>GET_FORMAT<span class="token punctuation">(</span><span class="token keyword">DATE</span><span class="token punctuation">,</span><span class="token string">'USA'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------------------+-------------------------------------------+</span>
<span class="token operator">|</span> <span class="token operator">%</span>m<span class="token punctuation">.</span><span class="token operator">%</span>d<span class="token punctuation">.</span><span class="token operator">%</span>Y                <span class="token operator">|</span> <span class="token number">03.08</span><span class="token number">.2023</span>                                <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------------------+-------------------------------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="流程控制函数" tabindex="-1"><a class="header-anchor" href="#流程控制函数" aria-hidden="true">#</a> 流程控制函数</h2>
<p>流程处理函数可以根据不同的条件，执行不同的处理流程，可以在 SQL 语句中实现不同的条件选择。MySQL 中的流程处理函数主要包括 <strong>IF( )、IFNULL( ) 和 CASE( )</strong> 函数。</p>
<ul>
<li>
<p>IF(value,value1,value2)</p>
<p>如果 value 的值为 TRUE，返回 value1，否则返回 value2</p>
</li>
<li>
<p>IFNULL(value1, value2)</p>
<p>如果 value1 不为 NULL，返回 value1，否则返回 value2</p>
</li>
<li>
<p>CASE WHEN 条件1 THEN 结果1 WHEN 条件2 THEN 结果2 .... [ELSE result] END</p>
</li>
<li>
<p>CASE  expr WHEN 常量值1 THEN 值1 WHEN 常量值1 THEN 值1 .... [ELSE 值n] END</p>
</li>
</ul>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> <span class="token keyword">IF</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token string">'Right'</span><span class="token punctuation">,</span><span class="token string">'Wrong'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">---------------------------+</span>
<span class="token operator">|</span> <span class="token keyword">IF</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token string">'Right'</span><span class="token punctuation">,</span><span class="token string">'Wrong'</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------+</span>
<span class="token operator">|</span> <span class="token keyword">Right</span>                     <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> IFNULL<span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token string">'Hello MySQL'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----------------------------+</span>
<span class="token operator">|</span> IFNULL<span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token string">'Hello MySQL'</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------------------------+</span>
<span class="token operator">|</span> Hello MySQL                <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">CASE</span> 
　　<span class="token keyword">WHEN</span> <span class="token number">1</span> <span class="token operator">></span> <span class="token number">0</span>
　　<span class="token keyword">THEN</span> <span class="token string">'1 > 0'</span>
　　<span class="token keyword">WHEN</span> <span class="token number">2</span> <span class="token operator">></span> <span class="token number">0</span>
　　<span class="token keyword">THEN</span> <span class="token string">'2 > 0'</span>
　　<span class="token keyword">ELSE</span> <span class="token string">'3 > 0'</span>
　　<span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">CASE</span> <span class="token number">1</span> 
　　<span class="token keyword">WHEN</span> <span class="token number">1</span> <span class="token keyword">THEN</span> <span class="token string">'1'</span>
　　<span class="token keyword">WHEN</span> <span class="token number">2</span> <span class="token keyword">THEN</span> <span class="token string">'2'</span>
<span class="token keyword">ELSE</span> <span class="token string">'0'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> oid<span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>status<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token keyword">CASE</span> <span class="token identifier"><span class="token punctuation">`</span>status<span class="token punctuation">`</span></span> <span class="token keyword">WHEN</span> <span class="token number">1</span> <span class="token keyword">THEN</span> <span class="token string">'未付款'</span> 
								   <span class="token keyword">WHEN</span> <span class="token number">2</span> <span class="token keyword">THEN</span> <span class="token string">'已付款'</span> 
								   <span class="token keyword">WHEN</span> <span class="token number">3</span> <span class="token keyword">THEN</span> <span class="token string">'已发货'</span>  
								   <span class="token keyword">WHEN</span> <span class="token number">4</span> <span class="token keyword">THEN</span> <span class="token string">'确认收货'</span>  
								   <span class="token keyword">ELSE</span> <span class="token string">'无效订单'</span> <span class="token keyword">END</span> 
<span class="token keyword">FROM</span> t_order<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="聚合-组-函数" tabindex="-1"><a class="header-anchor" href="#聚合-组-函数" aria-hidden="true">#</a> 聚合（组）函数</h1>
<h2 id="聚合函数介绍" tabindex="-1"><a class="header-anchor" href="#聚合函数介绍" aria-hidden="true">#</a> 聚合函数介绍</h2>
<blockquote>
<ul>
<li>
<p>聚合函数作用于一组数据，并对一组数据返回一个值。</p>
</li>
<li>
<p><strong>聚合函数类型</strong></p>
<ul>
<li>COUNT(*) 			统计所有记录</li>
<li>COUNT(field)       统计field 不为null 的数量</li>
<li>AVG(field)            统计field平均值，不包括null</li>
<li>SUM(field)           求和，不包括null</li>
<li>MAX(field)           统计字段最大值</li>
<li>MIN(field)           统计字段最小值</li>
</ul>
</li>
<li>
<p>聚合函数不能嵌套调用。比如不能出现类似 “AVG(SUM(字段名称))” 形式的调用。</p>
</li>
</ul>
</blockquote>
<p><strong>注意事项：</strong></p>
<blockquote>
<ul>
<li>
<p>以上五个分组函数都忽略 NULL 值，除了 COUNT(*)</p>
</li>
<li>
<p>SUM 和 AVG 一般用于处理数值型</p>
</li>
<li>
<p>MAX、MIN、COUNT 可以处理任何数据类型</p>
</li>
<li>
<p>都可以搭配 DISTINCT 使用，用于统计去重后的结果</p>
</li>
<li>
<p>和分组函数一同查询的字段要求是 GROUP BY 后的字段</p>
</li>
<li>
<p>COUNT 的参数可以支持：字段、常量值，一般放 1。建议使用 COUNT(*)</p>
</li>
<li>
<p>效率：</p>
<ul>
<li>
<p>MYISAM 存储引擎下，COUNT(*) 的效率高。</p>
</li>
<li>
<p>INNODB 存储引擎下，COUNT(*) 和 COUNT(1) 的效率差不多，比 COUNT(字段) 要高一些。</p>
<p>不要使用 count(列名)来替代 <code v-pre>count(*)</code>，<code v-pre>count(*)</code>是 SQL92 定义的标准统计行数的语法, count(列名)不会统计 NULL 值。</p>
</li>
</ul>
</li>
</ul>
</blockquote>
<h2 id="group-by" tabindex="-1"><a class="header-anchor" href="#group-by" aria-hidden="true">#</a> GROUP BY</h2>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<p><strong>可以使用 GROUP BY 子句将表中的数据分成若干组</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">column</span><span class="token punctuation">,</span> group_function<span class="token punctuation">(</span><span class="token keyword">column</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> <span class="token keyword">table</span>
<span class="token punctuation">[</span><span class="token keyword">WHERE</span>	condition<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">GROUP</span> <span class="token keyword">BY</span>	group_by_expression<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">ORDER</span> <span class="token keyword">BY</span>	<span class="token keyword">column</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>明确：WHERE一定放在FROM后面</strong></p>
</blockquote>
<p><strong>在SELECT列表中所有未包含在组函数中的列都应该包含在 GROUP BY子句中</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span>   department_id<span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span>     employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>包含在 GROUP BY 子句中的列不必包含在 SELECT 列表中</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span>   <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span>     employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多列分组" tabindex="-1"><a class="header-anchor" href="#多列分组" aria-hidden="true">#</a> 多列分组</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span><span class="token keyword">SELECT</span>   department_id dept_id<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span>     employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id<span class="token punctuation">,</span> job_id <span class="token punctuation">;</span>

<span class="token operator">+</span><span class="token comment">---------+------------+-------------+</span>
<span class="token operator">|</span> dept_id <span class="token operator">|</span> job_id     <span class="token operator">|</span> <span class="token function">SUM</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+------------+-------------+</span>
<span class="token operator">|</span>      <span class="token number">90</span> <span class="token operator">|</span> AD_PRES    <span class="token operator">|</span>    <span class="token number">24000.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>      <span class="token number">90</span> <span class="token operator">|</span> AD_VP      <span class="token operator">|</span>    <span class="token number">34000.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>      <span class="token number">60</span> <span class="token operator">|</span> IT_PROG    <span class="token operator">|</span>    <span class="token number">28800.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">100</span> <span class="token operator">|</span> FI_MGR     <span class="token operator">|</span>    <span class="token number">12000.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">100</span> <span class="token operator">|</span> FI_ACCOUNT <span class="token operator">|</span>    <span class="token number">39600.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>      <span class="token number">30</span> <span class="token operator">|</span> PU_MAN     <span class="token operator">|</span>    <span class="token number">11000.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>      <span class="token number">30</span> <span class="token operator">|</span> PU_CLERK   <span class="token operator">|</span>    <span class="token number">13900.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>      <span class="token number">50</span> <span class="token operator">|</span> ST_MAN     <span class="token operator">|</span>    <span class="token number">36400.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>      <span class="token number">50</span> <span class="token operator">|</span> ST_CLERK   <span class="token operator">|</span>    <span class="token number">55700.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>      <span class="token number">80</span> <span class="token operator">|</span> SA_MAN     <span class="token operator">|</span>    <span class="token number">61000.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>      <span class="token number">80</span> <span class="token operator">|</span> SA_REP     <span class="token operator">|</span>   <span class="token number">243500.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>    <span class="token boolean">NULL</span> <span class="token operator">|</span> SA_REP     <span class="token operator">|</span>     <span class="token number">7000.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>      <span class="token number">50</span> <span class="token operator">|</span> SH_CLERK   <span class="token operator">|</span>    <span class="token number">64300.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>      <span class="token number">10</span> <span class="token operator">|</span> AD_ASST    <span class="token operator">|</span>     <span class="token number">4400.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>      <span class="token number">20</span> <span class="token operator">|</span> MK_MAN     <span class="token operator">|</span>    <span class="token number">13000.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>      <span class="token number">20</span> <span class="token operator">|</span> MK_REP     <span class="token operator">|</span>     <span class="token number">6000.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>      <span class="token number">40</span> <span class="token operator">|</span> HR_REP     <span class="token operator">|</span>     <span class="token number">6500.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>      <span class="token number">70</span> <span class="token operator">|</span> PR_REP     <span class="token operator">|</span>    <span class="token number">10000.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">110</span> <span class="token operator">|</span> AC_MGR     <span class="token operator">|</span>    <span class="token number">12000.00</span> <span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">110</span> <span class="token operator">|</span> AC_ACCOUNT <span class="token operator">|</span>     <span class="token number">8300.00</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+------------+-------------+</span>
<span class="token number">20</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="group-by中使用with-rollup" tabindex="-1"><a class="header-anchor" href="#group-by中使用with-rollup" aria-hidden="true">#</a> GROUP BY中使用WITH ROLLUP??</h3>
<p>使用<code v-pre>WITH ROLLUP</code>关键字之后，在所有查询出的分组记录之后增加一条记录，该记录计算查询出的所有记录的总和，即统计记录数量。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> department_id <span class="token operator">></span> <span class="token number">80</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id <span class="token keyword">WITH ROLLUP</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：当使用 ROLLUP 时，不能同时使用ORDER BY子句进行结果排序，即ROLLUP和ORDER BY是互相排斥的。</p>
<h2 id="having" tabindex="-1"><a class="header-anchor" href="#having" aria-hidden="true">#</a> HAVING</h2>
<h3 id="基本使用-1" tabindex="-1"><a class="header-anchor" href="#基本使用-1" aria-hidden="true">#</a> 基本使用</h3>
<blockquote>
<p><strong>过滤分组：HAVING子句</strong></p>
<ol>
<li>行已经被分组。</li>
<li>使用了聚合函数。</li>
<li>满足 HAVING 子句中条件的分组将被显示。</li>
<li>HAVING 不能单独使用，必须要跟 GROUP BY 一起使用。</li>
<li><strong>非法使用聚合函数 ： 不能在 WHERE 子句中使用聚合函数。</strong></li>
</ol>
</blockquote>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 部门最高工资比 10000 高的工资</span>
<span class="token comment">-- 正确写法</span>
<span class="token keyword">SELECT</span>   department_id<span class="token punctuation">,</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span>     employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token keyword">HAVING</span>   <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token operator">></span><span class="token number">10000</span> <span class="token punctuation">;</span>
<span class="token comment">-- 错误写法</span>
<span class="token keyword">SELECT</span>   department_id<span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span>     employees
<span class="token keyword">WHERE</span>    <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">8000</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="where-和-having-的对比" tabindex="-1"><a class="header-anchor" href="#where-和-having-的对比" aria-hidden="true">#</a> WHERE 和 HAVING 的对比</h3>
<h1 id="多表查询-1" tabindex="-1"><a class="header-anchor" href="#多表查询-1" aria-hidden="true">#</a> 多表查询</h1>
<h1 id="mysql-事务" tabindex="-1"><a class="header-anchor" href="#mysql-事务" aria-hidden="true">#</a> MySQL 事务</h1>
<h1 id="mysql-50-题" tabindex="-1"><a class="header-anchor" href="#mysql-50-题" aria-hidden="true">#</a> MySQL 50 题</h1>
<p>准备学生表、分数表、课程表、教师表，表关系如下：</p>
<figure><img src="@source/DataBase/MySQL/MySQL50题.png" alt="MySQL50题.png" tabindex="0" loading="lazy"><figcaption>MySQL50题.png</figcaption></figure>
<h2 id="数据准备" tabindex="-1"><a class="header-anchor" href="#数据准备" aria-hidden="true">#</a> 数据准备</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Student<span class="token punctuation">(</span>
s_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
s_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">''</span><span class="token punctuation">,</span>
s_birth <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">''</span><span class="token punctuation">,</span>
s_sex <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">''</span><span class="token punctuation">,</span>
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>s_id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Course<span class="token punctuation">(</span>
c_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
c_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">''</span><span class="token punctuation">,</span>
t_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>c_id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Teacher<span class="token punctuation">(</span>
t_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
t_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">''</span><span class="token punctuation">,</span>
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>t_id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Score<span class="token punctuation">(</span>
s_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
c_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
s_score <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>s_id<span class="token punctuation">,</span>c_id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> Student <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'01'</span> <span class="token punctuation">,</span> <span class="token string">'赵雷'</span> <span class="token punctuation">,</span> <span class="token string">'1990-01-01'</span> <span class="token punctuation">,</span> <span class="token string">'男'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Student <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'02'</span> <span class="token punctuation">,</span> <span class="token string">'钱电'</span> <span class="token punctuation">,</span> <span class="token string">'1990-12-21'</span> <span class="token punctuation">,</span> <span class="token string">'男'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Student <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'03'</span> <span class="token punctuation">,</span> <span class="token string">'孙风'</span> <span class="token punctuation">,</span> <span class="token string">'1990-05-20'</span> <span class="token punctuation">,</span> <span class="token string">'男'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Student <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'04'</span> <span class="token punctuation">,</span> <span class="token string">'李云'</span> <span class="token punctuation">,</span> <span class="token string">'1990-08-06'</span> <span class="token punctuation">,</span> <span class="token string">'男'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Student <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'05'</span> <span class="token punctuation">,</span> <span class="token string">'周梅'</span> <span class="token punctuation">,</span> <span class="token string">'1991-12-01'</span> <span class="token punctuation">,</span> <span class="token string">'女'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Student <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'06'</span> <span class="token punctuation">,</span> <span class="token string">'吴兰'</span> <span class="token punctuation">,</span> <span class="token string">'1992-03-01'</span> <span class="token punctuation">,</span> <span class="token string">'女'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Student <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'07'</span> <span class="token punctuation">,</span> <span class="token string">'郑竹'</span> <span class="token punctuation">,</span> <span class="token string">'1989-07-01'</span> <span class="token punctuation">,</span> <span class="token string">'女'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Student <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'08'</span> <span class="token punctuation">,</span> <span class="token string">'王菊'</span> <span class="token punctuation">,</span> <span class="token string">'1990-01-20'</span> <span class="token punctuation">,</span> <span class="token string">'女'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> Course <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'01'</span> <span class="token punctuation">,</span> <span class="token string">'语文'</span> <span class="token punctuation">,</span> <span class="token string">'02'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Course <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'02'</span> <span class="token punctuation">,</span> <span class="token string">'数学'</span> <span class="token punctuation">,</span> <span class="token string">'01'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Course <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'03'</span> <span class="token punctuation">,</span> <span class="token string">'英语'</span> <span class="token punctuation">,</span> <span class="token string">'03'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">insert</span> <span class="token keyword">into</span> Teacher <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'01'</span> <span class="token punctuation">,</span> <span class="token string">'张三'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Teacher <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'02'</span> <span class="token punctuation">,</span> <span class="token string">'李四'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Teacher <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'03'</span> <span class="token punctuation">,</span> <span class="token string">'王五'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'01'</span> <span class="token punctuation">,</span> <span class="token string">'01'</span> <span class="token punctuation">,</span> <span class="token string">'80'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'01'</span> <span class="token punctuation">,</span> <span class="token string">'02'</span> <span class="token punctuation">,</span> <span class="token string">'90'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'01'</span> <span class="token punctuation">,</span> <span class="token string">'03'</span> <span class="token punctuation">,</span> <span class="token string">'99'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'02'</span> <span class="token punctuation">,</span> <span class="token string">'01'</span> <span class="token punctuation">,</span> <span class="token string">'70'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'02'</span> <span class="token punctuation">,</span> <span class="token string">'02'</span> <span class="token punctuation">,</span> <span class="token string">'60'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'02'</span> <span class="token punctuation">,</span> <span class="token string">'03'</span> <span class="token punctuation">,</span> <span class="token string">'80'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'03'</span> <span class="token punctuation">,</span> <span class="token string">'01'</span> <span class="token punctuation">,</span> <span class="token string">'80'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'03'</span> <span class="token punctuation">,</span> <span class="token string">'02'</span> <span class="token punctuation">,</span> <span class="token string">'80'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'03'</span> <span class="token punctuation">,</span> <span class="token string">'03'</span> <span class="token punctuation">,</span> <span class="token string">'80'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'04'</span> <span class="token punctuation">,</span> <span class="token string">'01'</span> <span class="token punctuation">,</span> <span class="token string">'50'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'04'</span> <span class="token punctuation">,</span> <span class="token string">'02'</span> <span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'04'</span> <span class="token punctuation">,</span> <span class="token string">'03'</span> <span class="token punctuation">,</span> <span class="token string">'20'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'05'</span> <span class="token punctuation">,</span> <span class="token string">'01'</span> <span class="token punctuation">,</span> <span class="token string">'76'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'05'</span> <span class="token punctuation">,</span> <span class="token string">'02'</span> <span class="token punctuation">,</span> <span class="token string">'87'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'06'</span> <span class="token punctuation">,</span> <span class="token string">'01'</span> <span class="token punctuation">,</span> <span class="token string">'31'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'06'</span> <span class="token punctuation">,</span> <span class="token string">'03'</span> <span class="token punctuation">,</span> <span class="token string">'34'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'07'</span> <span class="token punctuation">,</span> <span class="token string">'02'</span> <span class="token punctuation">,</span> <span class="token string">'89'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Score <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'07'</span> <span class="token punctuation">,</span> <span class="token string">'03'</span> <span class="token punctuation">,</span> <span class="token string">'98'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目及参考答案" tabindex="-1"><a class="header-anchor" href="#题目及参考答案" aria-hidden="true">#</a> 题目及参考答案</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 1. 查询"01"课程比"02"课程成绩高的学生的信息及课程分数</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_name<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_birth<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_sex<span class="token punctuation">,</span>
	sc1<span class="token punctuation">.</span>s_score <span class="token keyword">AS</span> <span class="token string">'C01'</span><span class="token punctuation">,</span>
	sc2<span class="token punctuation">.</span>s_score <span class="token keyword">AS</span> <span class="token string">'C02'</span> 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc1 <span class="token keyword">ON</span> s<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc1<span class="token punctuation">.</span>s_id 
	<span class="token operator">AND</span> sc1<span class="token punctuation">.</span>c_id <span class="token operator">=</span> <span class="token string">'01'</span>
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc2 <span class="token keyword">ON</span> sc2<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id 
	<span class="token operator">AND</span> sc2<span class="token punctuation">.</span>c_id <span class="token operator">=</span> <span class="token string">'02'</span> 
<span class="token keyword">WHERE</span>
	sc1<span class="token punctuation">.</span>s_score <span class="token operator">></span> sc2<span class="token punctuation">.</span>s_score<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 2. 查询"01"课程比"02"课程成绩低的学生的信息及课程分数</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	sc1<span class="token punctuation">.</span>s_score<span class="token punctuation">,</span>
	sc2<span class="token punctuation">.</span>s_score 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc1 <span class="token keyword">ON</span> sc1<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id 
	<span class="token operator">AND</span> sc1<span class="token punctuation">.</span>c_id <span class="token operator">=</span> <span class="token string">'01'</span>
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc2 <span class="token keyword">ON</span> sc2<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id 
	<span class="token operator">AND</span> sc2<span class="token punctuation">.</span>c_id <span class="token operator">=</span> <span class="token string">'02'</span> 
<span class="token keyword">WHERE</span>
	sc1<span class="token punctuation">.</span>s_score <span class="token operator">&lt;</span> sc2<span class="token punctuation">.</span>s_score<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 3. 查询平均成绩大于等于60分的同学的学生编号和学生姓名和平均成绩</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	<span class="token function">round</span><span class="token punctuation">(</span> <span class="token function">avg</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span> avgscore 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	s<span class="token punctuation">.</span>s_id 
<span class="token keyword">HAVING</span>
	avgscore <span class="token operator">>=</span> <span class="token number">60</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 4. 查询平均成绩小于60分的同学的学生编号和学生姓名和平均成绩(包括没成绩的)</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
<span class="token keyword">CASE</span>
		<span class="token keyword">WHEN</span> <span class="token function">round</span><span class="token punctuation">(</span> <span class="token function">avg</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token operator">IS</span> <span class="token boolean">NULL</span> <span class="token keyword">THEN</span>
		<span class="token number">0</span> <span class="token keyword">ELSE</span> <span class="token function">round</span><span class="token punctuation">(</span> <span class="token function">avg</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span> 
	<span class="token keyword">END</span> <span class="token keyword">AS</span> avgscore 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	s<span class="token punctuation">.</span>s_id 
<span class="token keyword">HAVING</span>
	avgscore <span class="token operator">&lt;</span> <span class="token number">60</span> 
	<span class="token operator">OR</span> avgscore <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 5. 查询所有同学的学生编号、学生姓名、选课总数、所有课程的总成绩</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_name<span class="token punctuation">,</span>
	<span class="token function">count</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_id <span class="token punctuation">)</span> total<span class="token punctuation">,</span>
<span class="token keyword">CASE</span>
		
		<span class="token keyword">WHEN</span> <span class="token function">sum</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span> <span class="token operator">IS</span> <span class="token boolean">NULL</span> <span class="token keyword">THEN</span>
		<span class="token number">0</span> <span class="token keyword">ELSE</span> <span class="token function">sum</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span> 
	<span class="token keyword">END</span> totalScore 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>s_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 6. 查询"李"姓老师的数量</span>
<span class="token comment">-- 方式一</span>
<span class="token keyword">SELECT</span>
	<span class="token function">count</span><span class="token punctuation">(</span> t<span class="token punctuation">.</span>t_id <span class="token punctuation">)</span><span class="token punctuation">,</span>
	t<span class="token punctuation">.</span>t_name 
<span class="token keyword">FROM</span>
	teacher t 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	t<span class="token punctuation">.</span>t_id 
<span class="token keyword">HAVING</span>
	t<span class="token punctuation">.</span>t_name <span class="token operator">LIKE</span> <span class="token string">'李%'</span><span class="token punctuation">;</span>
	
<span class="token comment">-- 方式二</span>
<span class="token keyword">SELECT</span>
	<span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> 
<span class="token keyword">FROM</span>
	teacher 
<span class="token keyword">WHERE</span>
	t_name <span class="token operator">LIKE</span> <span class="token string">'李%'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 7. 查询学过"张三"老师授课的同学的信息</span>
<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span>
	s<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span><span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id
	<span class="token keyword">JOIN</span> course c <span class="token keyword">ON</span> c<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>c_id
	<span class="token keyword">JOIN</span> teacher t <span class="token keyword">ON</span> t<span class="token punctuation">.</span>t_id <span class="token operator">=</span> c<span class="token punctuation">.</span>t_id 
<span class="token keyword">WHERE</span>
	t<span class="token punctuation">.</span>t_name <span class="token operator">=</span> <span class="token string">'张三'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 8.查询没学过"张三"老师授课的同学的信息</span>
<span class="token comment">/*
WHERE t.t_name != '张三';可能等于其他老师，这里是将所有情况都得到才进行过滤的
因此筛选出的行是有问题的，应该先过滤再筛选
不等于只能购过滤一条记录
SELECT DISTINCT
	s.* ,sc.*,c.*,t.*
FROM
	student s
	JOIN score sc ON sc.s_id = s.s_id
	JOIN course c ON c.c_id = sc.c_id
	JOIN teacher t ON t.t_id = c.t_id 
WHERE t.t_name != '张三';
*/</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span><span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student s 
<span class="token keyword">WHERE</span>
	s<span class="token punctuation">.</span>s_id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		sc<span class="token punctuation">.</span>s_id 
	<span class="token keyword">FROM</span>
		student s2
		<span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s2<span class="token punctuation">.</span>s_id 
	<span class="token keyword">WHERE</span>
	sc<span class="token punctuation">.</span>c_id <span class="token operator">IN</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> c<span class="token punctuation">.</span>c_id <span class="token keyword">FROM</span> course c <span class="token keyword">JOIN</span> teacher t <span class="token keyword">ON</span> t<span class="token punctuation">.</span>t_id <span class="token operator">=</span> c<span class="token punctuation">.</span>t_id <span class="token keyword">WHERE</span> t<span class="token punctuation">.</span>t_name <span class="token operator">=</span> <span class="token string">'张三'</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 9. 查询学过编号为"01"并且也学过编号为"02"的课程的同学的信息</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	sc1<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
	sc2<span class="token punctuation">.</span>c_id 
<span class="token keyword">FROM</span>
	student s<span class="token punctuation">,</span>
	score sc1<span class="token punctuation">,</span>
	score sc2 
<span class="token keyword">WHERE</span>
	s<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc1<span class="token punctuation">.</span>s_id 
	<span class="token operator">AND</span> s<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc2<span class="token punctuation">.</span>s_id 
	<span class="token operator">AND</span> sc1<span class="token punctuation">.</span>c_id <span class="token operator">=</span> <span class="token string">'01'</span> 
	<span class="token operator">AND</span> sc2<span class="token punctuation">.</span>c_id <span class="token operator">=</span> <span class="token string">'02'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 10. 查询学过编号为"01"但是没有学过编号为"02"的课程的同学的信息</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span><span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student s 
<span class="token keyword">WHERE</span>
	s<span class="token punctuation">.</span>s_id <span class="token operator">IN</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> s_id <span class="token keyword">FROM</span> score <span class="token keyword">WHERE</span> c_id <span class="token operator">=</span> <span class="token string">'01'</span> <span class="token punctuation">)</span> 
	<span class="token operator">AND</span> s<span class="token punctuation">.</span>s_id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> s_id <span class="token keyword">FROM</span> score <span class="token keyword">WHERE</span> c_id <span class="token operator">=</span> <span class="token string">'02'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 11. 查询没有学全所有课程的同学的信息</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span><span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> s<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>s_id 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	s<span class="token punctuation">.</span>s_id 
<span class="token keyword">HAVING</span>
	<span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> course <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 12. 查询至少有一门课与学号为"01"的同学所学相同的同学的信息</span>
<span class="token comment">-- 方法一：</span>
<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span>
	s<span class="token punctuation">.</span><span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id 
<span class="token keyword">WHERE</span>
	sc<span class="token punctuation">.</span>c_id <span class="token operator">IN</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> sc<span class="token punctuation">.</span>c_id <span class="token keyword">FROM</span> student s <span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id <span class="token operator">AND</span> sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> <span class="token string">'01'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">-- 方法二：</span>
<span class="token keyword">SELECT</span>
	<span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student s 
<span class="token keyword">WHERE</span>
	s_id <span class="token operator">IN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span>
		s_id 
	<span class="token keyword">FROM</span>
		score sc 
	<span class="token keyword">WHERE</span>
	c_id <span class="token operator">IN</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> c_id <span class="token keyword">FROM</span> score <span class="token keyword">WHERE</span> c_id <span class="token operator">=</span> <span class="token string">'01'</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 13. 查询和"01"号的同学学习的课程完全相同的其他同学的信息</span>
<span class="token comment">-- 方式一</span>
<span class="token keyword">SELECT</span>
	<span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student 
<span class="token keyword">WHERE</span>
	s_id <span class="token operator">IN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		sc<span class="token punctuation">.</span>s_id 
	<span class="token keyword">FROM</span>
		score sc 
	<span class="token keyword">WHERE</span>
		sc<span class="token punctuation">.</span>c_id <span class="token operator">IN</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> c_id <span class="token keyword">FROM</span> score <span class="token keyword">WHERE</span> s_id <span class="token operator">=</span> <span class="token string">'01'</span> <span class="token punctuation">)</span> 
		<span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">!=</span> <span class="token string">'01'</span> 
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
		sc<span class="token punctuation">.</span>s_id 
	<span class="token keyword">HAVING</span>
	<span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> score <span class="token keyword">WHERE</span> s_id <span class="token operator">=</span> <span class="token string">'01'</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 方式二</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span><span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student <span class="token keyword">AS</span> s
	<span class="token keyword">JOIN</span> score <span class="token keyword">AS</span> sc <span class="token keyword">ON</span> s<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>s_id 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>s_id 
<span class="token keyword">HAVING</span>
	GROUP_CONCAT<span class="token punctuation">(</span> sc<span class="token punctuation">.</span>c_id <span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> GROUP_CONCAT<span class="token punctuation">(</span> c_id <span class="token punctuation">)</span> <span class="token keyword">FROM</span> score <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> s_id <span class="token keyword">HAVING</span> s_id <span class="token operator">=</span> <span class="token string">'01'</span> <span class="token punctuation">)</span> 
	<span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">!=</span> <span class="token string">'01'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 14. 查询没学过"张三"老师讲授的任一门课程的学生姓名</span>
<span class="token keyword">SELECT</span>
	<span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student s 
<span class="token keyword">WHERE</span>
	s<span class="token punctuation">.</span>s_id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		sc<span class="token punctuation">.</span>s_id 
	<span class="token keyword">FROM</span>
		score sc
		<span class="token keyword">JOIN</span> course c <span class="token keyword">ON</span> c<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>c_id
		<span class="token keyword">JOIN</span> teacher t <span class="token keyword">ON</span> c<span class="token punctuation">.</span>t_id <span class="token operator">=</span> t<span class="token punctuation">.</span>t_id 
	<span class="token keyword">WHERE</span>
		t_name <span class="token operator">=</span> <span class="token string">'张三'</span> 
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 15. 查询两门及其以上不及格课程的同学的学号，姓名及其平均成绩</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_name<span class="token punctuation">,</span>
	<span class="token function">avg</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span> 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id 
<span class="token keyword">WHERE</span>
	sc<span class="token punctuation">.</span>s_id <span class="token operator">IN</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> s_id <span class="token keyword">FROM</span> score <span class="token keyword">WHERE</span> s_score <span class="token operator">&lt;</span> <span class="token number">60</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> s_id <span class="token keyword">HAVING</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">2</span> <span class="token punctuation">)</span> 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 16. 检索"01"课程分数小于60，按分数降序排列的学生信息</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>s_score 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id 
<span class="token keyword">WHERE</span>
	sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> <span class="token string">'01'</span> 
	<span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">&lt;</span> <span class="token number">60</span> 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>s_score <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 17. 按平均成绩从高到低显示所有学生的所有课程的成绩以及平均成绩</span>
<span class="token comment">-- 方式一</span>
<span class="token keyword">SELECT</span>
	sc<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	<span class="token punctuation">(</span> <span class="token keyword">SELECT</span> s_score <span class="token keyword">FROM</span> score <span class="token keyword">WHERE</span> s_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">AND</span> c_id <span class="token operator">=</span> <span class="token string">'01'</span> <span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token string">'01'</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span> <span class="token keyword">SELECT</span> s_score <span class="token keyword">FROM</span> score <span class="token keyword">WHERE</span> s_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">AND</span> c_id <span class="token operator">=</span> <span class="token string">'02'</span> <span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token string">'02'</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span> <span class="token keyword">SELECT</span> s_score <span class="token keyword">FROM</span> score <span class="token keyword">WHERE</span> s_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">AND</span> c_id <span class="token operator">=</span> <span class="token string">'03'</span> <span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token string">'03'</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token function">avg</span><span class="token punctuation">(</span> s_score <span class="token punctuation">)</span> <span class="token keyword">FROM</span> score sc <span class="token keyword">WHERE</span> s_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>s_id <span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token string">'avg'</span> 
<span class="token keyword">FROM</span>
	score sc 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>s_id 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	avg <span class="token keyword">DESC</span><span class="token punctuation">;</span>
<span class="token comment">-- 方式二</span>
<span class="token keyword">SELECT</span>
	sc<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	sc1<span class="token punctuation">.</span>s_score <span class="token keyword">AS</span> <span class="token string">'01'</span><span class="token punctuation">,</span>
	sc2<span class="token punctuation">.</span>s_score <span class="token keyword">AS</span> <span class="token string">'02'</span><span class="token punctuation">,</span>
	sc3<span class="token punctuation">.</span>s_score <span class="token keyword">AS</span> <span class="token string">'03'</span><span class="token punctuation">,</span>
	<span class="token function">round</span><span class="token punctuation">(</span> <span class="token function">avg</span><span class="token punctuation">(</span> sc4<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span> avg 
<span class="token keyword">FROM</span>
	score sc
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc1 <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc1<span class="token punctuation">.</span>s_id 
	<span class="token operator">AND</span> sc1<span class="token punctuation">.</span>c_id <span class="token operator">=</span> <span class="token string">'01'</span>
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc2 <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc2<span class="token punctuation">.</span>s_id 
	<span class="token operator">AND</span> sc2<span class="token punctuation">.</span>c_id <span class="token operator">=</span> <span class="token string">'02'</span>
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc3 <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc3<span class="token punctuation">.</span>s_id 
	<span class="token operator">AND</span> sc3<span class="token punctuation">.</span>c_id <span class="token operator">=</span> <span class="token string">'03'</span>
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc4 <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc4<span class="token punctuation">.</span>s_id 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>s_id 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	avg <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 18. 查询各科成绩最高分、最低分和平均分：以如下形式显示：</span>
<span class="token comment">-- 课程ID，课程name，最高分，最低分，平均分，及格率，中等率，优良率，优秀率</span>
<span class="token comment">-- 及格为>=60，中等为：70-80，优良为：80-90，优秀为：>=90</span>
<span class="token keyword">SELECT</span>
	sc<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
	c<span class="token punctuation">.</span>c_name<span class="token punctuation">,</span>
	<span class="token function">max</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span> maxScore<span class="token punctuation">,</span>
	<span class="token function">min</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span> <span class="token keyword">AS</span> minScore<span class="token punctuation">,</span>
	<span class="token function">avg</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span> avgScore<span class="token punctuation">,</span>
	<span class="token function">round</span><span class="token punctuation">(</span>
		<span class="token number">100</span> <span class="token operator">*</span><span class="token punctuation">(</span>
		<span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">>=</span> <span class="token number">60</span> <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span> <span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token number">2</span> 
	<span class="token punctuation">)</span> <span class="token keyword">AS</span> 及格率<span class="token punctuation">,</span>
	<span class="token function">round</span><span class="token punctuation">(</span>
		<span class="token number">100</span> <span class="token operator">*</span><span class="token punctuation">(</span>
		<span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">>=</span> <span class="token number">70</span> <span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">&lt;</span> <span class="token number">80</span> <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span><span class="token operator">/</span> <span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token number">2</span> 
	<span class="token punctuation">)</span> <span class="token keyword">AS</span> 中等率<span class="token punctuation">,</span>
	<span class="token function">round</span><span class="token punctuation">(</span>
		<span class="token number">100</span> <span class="token operator">*</span><span class="token punctuation">(</span>
		<span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">>=</span> <span class="token number">80</span> <span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">&lt;</span> <span class="token number">90</span> <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span><span class="token operator">/</span> <span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token number">2</span> 
	<span class="token punctuation">)</span> <span class="token keyword">AS</span> 优良率<span class="token punctuation">,</span>
	<span class="token function">round</span><span class="token punctuation">(</span>
		<span class="token number">100</span> <span class="token operator">*</span><span class="token punctuation">(</span>
		<span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">>=</span> <span class="token number">90</span> <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span><span class="token operator">/</span> <span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token number">2</span> 
	<span class="token punctuation">)</span> <span class="token keyword">AS</span> 优秀率 
<span class="token keyword">FROM</span>
	score sc
	<span class="token keyword">JOIN</span> course c <span class="token keyword">ON</span> c<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>c_id 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
	c<span class="token punctuation">.</span>c_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 19. 按各科成绩进行排序，并显示排名</span>
<span class="token keyword">SELECT</span> sc<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span> <span class="token keyword">DISTINCT</span> s_score <span class="token punctuation">)</span> <span class="token keyword">FROM</span> score <span class="token keyword">WHERE</span> c_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>c_id <span class="token operator">AND</span> s_score <span class="token operator">></span> sc<span class="token punctuation">.</span>s_score 
<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token keyword">AS</span> r 
<span class="token keyword">FROM</span>
	score <span class="token keyword">AS</span> sc 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
	r<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 20. 查询学生的总成绩并进行排名</span>
<span class="token comment">-- 不带序号</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	<span class="token function">sum</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span> 
<span class="token keyword">FROM</span>
	student s<span class="token punctuation">,</span>
	score sc 
<span class="token keyword">WHERE</span>
	s<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>s_id 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	s<span class="token punctuation">.</span>s_id 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	<span class="token number">2</span> <span class="token keyword">DESC</span><span class="token punctuation">;</span><span class="token comment">-- 带序号</span>
<span class="token keyword">SELECT</span>
	<span class="token operator">*</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		<span class="token function">count</span><span class="token punctuation">(</span> sc2<span class="token punctuation">.</span>sumScore <span class="token punctuation">)</span> 
	<span class="token keyword">FROM</span>
		<span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span>
			s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
			<span class="token function">sum</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span> <span class="token keyword">AS</span> sumScore 
		<span class="token keyword">FROM</span>
			student s<span class="token punctuation">,</span>
			score sc 
		<span class="token keyword">WHERE</span>
			s<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>s_id 
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
			s<span class="token punctuation">.</span>s_id 
		<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
			<span class="token number">2</span> <span class="token keyword">DESC</span> 
		<span class="token punctuation">)</span> sc2 
	<span class="token keyword">WHERE</span>
		sc2<span class="token punctuation">.</span>sumScore <span class="token operator">></span> sc1<span class="token punctuation">.</span>sumScore 
	<span class="token punctuation">)</span><span class="token operator">+</span> <span class="token number">1</span> <span class="token keyword">AS</span> r 
<span class="token keyword">FROM</span>
	<span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
		<span class="token function">sum</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span> <span class="token keyword">AS</span> sumScore 
	<span class="token keyword">FROM</span>
		student s<span class="token punctuation">,</span>
		score sc 
	<span class="token keyword">WHERE</span>
		s<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>s_id 
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
		s<span class="token punctuation">.</span>s_id 
	<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
		<span class="token number">2</span> <span class="token keyword">DESC</span> 
	<span class="token punctuation">)</span> sc1 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	r <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 21. 查询不同老师所教不同课程平均分从高到低显示</span>
<span class="token keyword">SELECT</span>
	t<span class="token punctuation">.</span>t_id<span class="token punctuation">,</span>
	t<span class="token punctuation">.</span>t_name<span class="token punctuation">,</span>
	<span class="token function">round</span><span class="token punctuation">(</span> <span class="token function">avg</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span> avgScore 
<span class="token keyword">FROM</span>
	course c
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> teacher t <span class="token keyword">ON</span> t<span class="token punctuation">.</span>t_id <span class="token operator">=</span> c<span class="token punctuation">.</span>t_id
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> c<span class="token punctuation">.</span>c_id 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	t<span class="token punctuation">.</span>t_id 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	avgScore <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 22. 查询所有课程的成绩第2名到第3名的学生信息及该课程成绩</span>
<span class="token comment">-- 注意：having在查询出结果之后执行</span>
<span class="token comment">-- 方式一：中间表关联</span>
<span class="token keyword">SELECT</span>
	sc<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token function">count</span><span class="token punctuation">(</span> <span class="token keyword">DISTINCT</span> s_score <span class="token punctuation">)</span> <span class="token keyword">FROM</span> score <span class="token keyword">WHERE</span> sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> c_id <span class="token operator">AND</span> s_score <span class="token operator">></span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span><span class="token operator">+</span> <span class="token number">1</span> <span class="token keyword">AS</span> r 
<span class="token keyword">FROM</span>
	score sc 
<span class="token keyword">HAVING</span>
	r <span class="token operator">BETWEEN</span> <span class="token number">2</span> 
	<span class="token operator">AND</span> <span class="token number">3</span> 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>c_id<span class="token punctuation">;</span>
<span class="token comment">-- 方式二</span>
<span class="token keyword">SELECT</span>
	<span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	score sc
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> student s <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id 
<span class="token keyword">WHERE</span>
	<span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token function">count</span><span class="token punctuation">(</span> <span class="token keyword">DISTINCT</span> s_score <span class="token punctuation">)</span> <span class="token keyword">FROM</span> score <span class="token keyword">WHERE</span> sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> c_id <span class="token operator">AND</span> s_score <span class="token operator">></span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span> <span class="token operator">BETWEEN</span> <span class="token number">2</span> 
	<span class="token operator">AND</span> <span class="token number">3</span> 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>c_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 23. 统计各科成绩各分数段人数：课程编号,课程名称, 100-85 , 85-70 , 70-60 , 0-60 及所占百分比</span>
<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span>
	c<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
	c<span class="token punctuation">.</span>c_name<span class="token punctuation">,</span>
	sc1<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>85-100<span class="token punctuation">`</span></span><span class="token punctuation">,</span>
	sc1<span class="token punctuation">.</span>percentA<span class="token punctuation">,</span>
	sc2<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>70-85<span class="token punctuation">`</span></span><span class="token punctuation">,</span>
	sc2<span class="token punctuation">.</span>percentB<span class="token punctuation">,</span>
	sc3<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>60-70<span class="token punctuation">`</span></span><span class="token punctuation">,</span>
	sc3<span class="token punctuation">.</span>percentC<span class="token punctuation">,</span>
	sc4<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>0-60<span class="token punctuation">`</span></span><span class="token punctuation">,</span>
	sc4<span class="token punctuation">.</span>percentD 
<span class="token keyword">FROM</span>
	score sc
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		sc<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
		<span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">></span> <span class="token number">85</span> <span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">&lt;=</span> <span class="token number">100</span> <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>85-100<span class="token punctuation">`</span></span><span class="token punctuation">,</span>
		<span class="token function">round</span><span class="token punctuation">(</span> <span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">></span> <span class="token number">85</span> <span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">&lt;=</span> <span class="token number">100</span> <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span><span class="token operator">/</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token keyword">AS</span> percentA 
	<span class="token keyword">FROM</span>
		score sc 
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
		sc<span class="token punctuation">.</span>c_id 
	<span class="token punctuation">)</span> <span class="token keyword">AS</span> sc1 <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc1<span class="token punctuation">.</span>c_id
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		sc<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
		<span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">></span> <span class="token number">70</span> <span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">&lt;=</span> <span class="token number">100</span> <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>70-85<span class="token punctuation">`</span></span><span class="token punctuation">,</span>
		<span class="token function">round</span><span class="token punctuation">(</span> <span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">></span> <span class="token number">70</span> <span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">&lt;=</span> <span class="token number">85</span> <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span><span class="token operator">/</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token keyword">AS</span> percentB 
	<span class="token keyword">FROM</span>
		score sc 
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
		sc<span class="token punctuation">.</span>c_id 
	<span class="token punctuation">)</span> <span class="token keyword">AS</span> sc2 <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc2<span class="token punctuation">.</span>c_id
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		sc<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
		<span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">></span> <span class="token number">60</span> <span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">&lt;=</span> <span class="token number">70</span> <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>60-70<span class="token punctuation">`</span></span><span class="token punctuation">,</span>
		<span class="token function">round</span><span class="token punctuation">(</span> <span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">></span> <span class="token number">60</span> <span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">&lt;=</span> <span class="token number">70</span> <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span><span class="token operator">/</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token keyword">AS</span> percentC 
	<span class="token keyword">FROM</span>
		score sc 
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
		sc<span class="token punctuation">.</span>c_id 
	<span class="token punctuation">)</span> <span class="token keyword">AS</span> sc3 <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc3<span class="token punctuation">.</span>c_id
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		sc<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
		<span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">&lt;=</span> <span class="token number">60</span> <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>0-60<span class="token punctuation">`</span></span><span class="token punctuation">,</span>
		<span class="token function">round</span><span class="token punctuation">(</span> <span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">&lt;=</span> <span class="token number">60</span> <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span><span class="token operator">/</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token keyword">AS</span> percentD 
	<span class="token keyword">FROM</span>
		score sc 
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
		sc<span class="token punctuation">.</span>c_id 
	<span class="token punctuation">)</span> <span class="token keyword">AS</span> sc4 <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc4<span class="token punctuation">.</span>c_id
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> course c <span class="token keyword">ON</span> c<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>c_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 24. 查询学生平均成绩及其名次 </span>
<span class="token keyword">SELECT</span>
	sc1<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	sc1<span class="token punctuation">.</span>avgScore<span class="token punctuation">,</span>
	<span class="token function">sum</span><span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> sc1<span class="token punctuation">.</span>avgScore <span class="token operator">&lt;</span> sc2<span class="token punctuation">.</span>avgScore <span class="token keyword">THEN</span> <span class="token number">1</span> <span class="token keyword">ELSE</span> <span class="token number">0</span> <span class="token keyword">END</span> <span class="token punctuation">)</span><span class="token operator">+</span> <span class="token number">1</span> r 
<span class="token keyword">FROM</span>
	<span class="token punctuation">(</span> <span class="token keyword">SELECT</span> s_id<span class="token punctuation">,</span> <span class="token function">avg</span><span class="token punctuation">(</span> s_score <span class="token punctuation">)</span> avgScore <span class="token keyword">FROM</span> score <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> s_id <span class="token punctuation">)</span> sc1
	<span class="token keyword">JOIN</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> s_id<span class="token punctuation">,</span> <span class="token function">avg</span><span class="token punctuation">(</span> s_score <span class="token punctuation">)</span> avgScore <span class="token keyword">FROM</span> score <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> s_id <span class="token punctuation">)</span> sc2 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	sc1<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	sc1<span class="token punctuation">.</span>avgScore 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	r<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 25. 查询各科成绩前三名的记录</span>
<span class="token keyword">SELECT</span>
	sc1<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	sc1<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
	sc1<span class="token punctuation">.</span>s_score<span class="token punctuation">,</span>
	<span class="token function">count</span><span class="token punctuation">(</span> sc2<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token keyword">AS</span> r 
<span class="token keyword">FROM</span>
	score sc1
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc2 <span class="token keyword">ON</span> sc1<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc2<span class="token punctuation">.</span>c_id 
	<span class="token operator">AND</span> sc1<span class="token punctuation">.</span>s_score <span class="token operator">&lt;</span> sc2<span class="token punctuation">.</span>s_score 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	<span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token number">2</span><span class="token punctuation">,</span>
	<span class="token number">3</span> 
<span class="token keyword">HAVING</span>
	<span class="token function">count</span><span class="token punctuation">(</span> sc2<span class="token punctuation">.</span>s_id <span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">3</span> 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	sc1<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
	r<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 26. 查询每门课程被选修的学生数</span>
<span class="token keyword">SELECT</span>
	c_id<span class="token punctuation">,</span>
	<span class="token function">count</span><span class="token punctuation">(</span> s_id <span class="token punctuation">)</span> 
<span class="token keyword">FROM</span>
	score 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	c_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 27. 查询出只有两门课程的全部学生的学号和姓名</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_name 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_name 
<span class="token keyword">HAVING</span>
	<span class="token function">count</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>c_id <span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 28. 查询男生、女生人数</span>
<span class="token keyword">SELECT</span>
	s_sex<span class="token punctuation">,</span>
	<span class="token function">count</span><span class="token punctuation">(</span> s_sex <span class="token punctuation">)</span> 
<span class="token keyword">FROM</span>
	student 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	s_sex<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 29. 查询名字中含有"风"字的学生信息</span>
<span class="token keyword">SELECT</span>
	<span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student 
<span class="token keyword">WHERE</span>
	s_name <span class="token operator">LIKE</span> <span class="token string">'%风%'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 30. 查询同名同性学生名单，并统计同名人数</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_name<span class="token punctuation">,</span>
	<span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> 
<span class="token keyword">FROM</span>
	student s 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	s<span class="token punctuation">.</span>s_name 
<span class="token keyword">HAVING</span>
	<span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 31. 查询1990年出生的学生名单(注：student表中s_birth列的类型是datetime)</span>
<span class="token keyword">SELECT</span>
	<span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student 
<span class="token keyword">WHERE</span>
	<span class="token keyword">YEAR</span> <span class="token punctuation">(</span> s_birth <span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1990</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span>
	<span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student 
<span class="token keyword">WHERE</span>
	s_birth <span class="token operator">LIKE</span> <span class="token string">'1990%'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 32. 查询每门课程的平均成绩，结果按平均成绩降序排列，平均成绩相同时，按课程编号升序排列</span>
<span class="token keyword">SELECT</span>
	sc<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
	<span class="token function">round</span><span class="token punctuation">(</span> <span class="token function">avg</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span> avgscore 
<span class="token keyword">FROM</span>
	score sc 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>c_id 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	avgscore <span class="token keyword">DESC</span><span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>c_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 33. 查询平均成绩大于等于85的所有学生的学号、姓名和平均成绩</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_name<span class="token punctuation">,</span>
	<span class="token function">round</span><span class="token punctuation">(</span> <span class="token function">avg</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span> avgscore 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_name 
<span class="token keyword">HAVING</span>
	avgscore <span class="token operator">>=</span> <span class="token number">85</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 34. 查询课程名称为"数学"，且分数低于60的学生姓名和分数</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_name<span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>s_score 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id
	<span class="token keyword">JOIN</span> course c <span class="token keyword">ON</span> c<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>c_id 
<span class="token keyword">WHERE</span>
	c<span class="token punctuation">.</span>c_name <span class="token operator">=</span> <span class="token string">'数学'</span> 
	<span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">&lt;</span> <span class="token number">60</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 35. 查询所有学生的课程及分数情况</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_name<span class="token punctuation">,</span>
	c<span class="token punctuation">.</span>c_name<span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>s_score 
<span class="token keyword">FROM</span>
	student s<span class="token punctuation">,</span>
	course c<span class="token punctuation">,</span>
	score sc 
<span class="token keyword">WHERE</span>
	s<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>s_id 
	<span class="token operator">AND</span> sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> c<span class="token punctuation">.</span>c_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 36. 查询任何一门课程成绩在70分以上的姓名、课程名称和分数</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_name<span class="token punctuation">,</span>
	c<span class="token punctuation">.</span>c_name<span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>s_score 
<span class="token keyword">FROM</span>
	student s<span class="token punctuation">,</span>
	course c<span class="token punctuation">,</span>
	score sc 
<span class="token keyword">WHERE</span>
	s<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>s_id 
	<span class="token operator">AND</span> sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> c<span class="token punctuation">.</span>c_id 
	<span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">>=</span> <span class="token number">70</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 37. 查询不及格的课程</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_name<span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>s_score<span class="token punctuation">,</span>
	c<span class="token punctuation">.</span>c_name 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id
	<span class="token keyword">JOIN</span> course c <span class="token keyword">ON</span> c<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>c_id 
<span class="token keyword">WHERE</span>
	sc<span class="token punctuation">.</span>s_score <span class="token operator">&lt;</span> <span class="token number">60</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 38. 查询课程编号为01且课程成绩在80分以上的学生的学号和姓名</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_name<span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>s_score 
<span class="token keyword">FROM</span>
	student s<span class="token punctuation">,</span>
	score sc 
<span class="token keyword">WHERE</span>
	s<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>s_id 
	<span class="token operator">AND</span> sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> <span class="token string">'01'</span> 
	<span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">>=</span> <span class="token number">80</span> 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>c_id <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 39. 求每门课程的学生人数</span>
<span class="token keyword">SELECT</span>
	sc<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
	<span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> 
<span class="token keyword">FROM</span>
	score sc 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>c_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 40. 查询选修"张三"老师所授课程的学生中，成绩最高的学生信息及其成绩</span>
<span class="token comment">-- 最高分只有一个</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_name<span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>s_score<span class="token punctuation">,</span>
	c<span class="token punctuation">.</span>c_name 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id
	<span class="token keyword">JOIN</span> course c <span class="token keyword">ON</span> c<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>c_id
	<span class="token keyword">JOIN</span> teacher t <span class="token keyword">ON</span> t<span class="token punctuation">.</span>t_id <span class="token operator">=</span> c<span class="token punctuation">.</span>t_id 
<span class="token keyword">WHERE</span>
	t<span class="token punctuation">.</span>t_name <span class="token operator">=</span> <span class="token string">'张三'</span> 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>s_score <span class="token keyword">DESC</span> 
	<span class="token keyword">LIMIT</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">-- 最高分有多个</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	s<span class="token punctuation">.</span>s_name<span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>s_score<span class="token punctuation">,</span>
	c<span class="token punctuation">.</span>c_name 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> sc<span class="token punctuation">.</span>s_id <span class="token operator">=</span> s<span class="token punctuation">.</span>s_id
	<span class="token keyword">JOIN</span> course c <span class="token keyword">ON</span> c<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>c_id
	<span class="token keyword">JOIN</span> teacher t <span class="token keyword">ON</span> t<span class="token punctuation">.</span>t_id <span class="token operator">=</span> c<span class="token punctuation">.</span>t_id 
<span class="token keyword">WHERE</span>
	t<span class="token punctuation">.</span>t_name <span class="token operator">=</span> <span class="token string">'张三'</span> 
	<span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		<span class="token function">max</span><span class="token punctuation">(</span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span> 
	<span class="token keyword">FROM</span>
		score sc<span class="token punctuation">,</span>
		course c<span class="token punctuation">,</span>
		teacher t 
	<span class="token keyword">WHERE</span>
		sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> c<span class="token punctuation">.</span>c_id 
		<span class="token operator">AND</span> c<span class="token punctuation">.</span>t_id <span class="token operator">=</span> t<span class="token punctuation">.</span>t_id 
		<span class="token operator">AND</span> t<span class="token punctuation">.</span>t_name <span class="token operator">=</span> <span class="token string">'张三'</span> 
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 41. 查询不同课程成绩相同的学生的学生编号、课程编号、学生成绩</span>
<span class="token keyword">SELECT</span>
	sc<span class="token punctuation">.</span><span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	score sc<span class="token punctuation">,</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		c_id<span class="token punctuation">,</span>
		s_score 
	<span class="token keyword">FROM</span>
		score 
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
		c_id<span class="token punctuation">,</span>
		s_score 
	<span class="token keyword">HAVING</span>
		<span class="token function">count</span><span class="token punctuation">(</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token operator">></span> <span class="token number">1</span> 
	<span class="token punctuation">)</span> <span class="token keyword">AS</span> sc2 
<span class="token keyword">WHERE</span>
	sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc2<span class="token punctuation">.</span>c_id 
	<span class="token operator">AND</span> sc<span class="token punctuation">.</span>s_score <span class="token operator">=</span> sc2<span class="token punctuation">.</span>s_score 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>s_score<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 42. 查询每门功课成绩最好的前两名</span>
<span class="token keyword">SELECT</span>
	sc<span class="token punctuation">.</span><span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	score sc 
<span class="token keyword">WHERE</span>
	<span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token function">count</span><span class="token punctuation">(</span> <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token keyword">FROM</span> score sc2 <span class="token keyword">WHERE</span> sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc2<span class="token punctuation">.</span>c_id <span class="token operator">AND</span> sc2<span class="token punctuation">.</span>s_score <span class="token operator">></span> sc<span class="token punctuation">.</span>s_score <span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">2</span> 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>s_score <span class="token keyword">DESC</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span>
	sc<span class="token punctuation">.</span><span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	score sc 
<span class="token keyword">WHERE</span>
	sc<span class="token punctuation">.</span>s_score <span class="token operator">IN</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token keyword">top</span> <span class="token number">2</span> sc2<span class="token punctuation">.</span>s_score <span class="token keyword">FROM</span> score sc2 <span class="token keyword">WHERE</span> sc<span class="token punctuation">.</span>c_id <span class="token operator">=</span> sc2<span class="token punctuation">.</span>c_id <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> sc2<span class="token punctuation">.</span>s_score <span class="token keyword">DESC</span> <span class="token punctuation">)</span> 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>s_score <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 43. 统计每门课程的学生选修人数（超过5人的课程才统计）。</span>
<span class="token comment">-- 要求输出课程号和选修人数，查询结果按人数降序排列，若人数相同，按课程号升序排列</span>
<span class="token keyword">SELECT</span>
	sc<span class="token punctuation">.</span>c_id<span class="token punctuation">,</span>
	<span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> student_num 
<span class="token keyword">FROM</span>
	score sc
	<span class="token keyword">JOIN</span> student s <span class="token keyword">ON</span> s<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>s_id 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	sc<span class="token punctuation">.</span>c_id 
<span class="token keyword">HAVING</span>
	student_num <span class="token operator">></span> <span class="token number">5</span> 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	student_num <span class="token keyword">DESC</span><span class="token punctuation">,</span>
	sc<span class="token punctuation">.</span>c_id <span class="token keyword">ASC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 44. 检索至少选修两门课程的学生学号</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span>s_id<span class="token punctuation">,</span>
	<span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> course_num 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> s<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>s_id 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	s<span class="token punctuation">.</span>s_id 
<span class="token keyword">HAVING</span>
	<span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 45. 查询选修了全部课程的学生信息</span>
<span class="token keyword">SELECT</span>
	s<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	<span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> 
<span class="token keyword">FROM</span>
	student s
	<span class="token keyword">JOIN</span> score sc <span class="token keyword">ON</span> s<span class="token punctuation">.</span>s_id <span class="token operator">=</span> sc<span class="token punctuation">.</span>s_id 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	s<span class="token punctuation">.</span>s_id 
<span class="token keyword">HAVING</span>
	<span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 46.查询各学生的年龄</span>
<span class="token comment">-- 1. 按年份计算</span>
<span class="token keyword">SELECT</span>
	s_id<span class="token punctuation">,</span>
	<span class="token keyword">YEAR</span> <span class="token punctuation">(</span>
	<span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-</span> <span class="token keyword">YEAR</span> <span class="token punctuation">(</span> s_birth <span class="token punctuation">)</span> <span class="token keyword">AS</span> age 
<span class="token keyword">FROM</span>
	student<span class="token punctuation">;</span>
<span class="token comment">-- 2. 按照出生日期计算</span>
<span class="token keyword">SELECT</span>
	s_id<span class="token punctuation">,</span>
	DATE_FORMAT<span class="token punctuation">(</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'%Y'</span> <span class="token punctuation">)</span><span class="token operator">-</span> DATE_FORMAT<span class="token punctuation">(</span> s_birth<span class="token punctuation">,</span> <span class="token string">'%Y'</span> <span class="token punctuation">)</span><span class="token operator">-</span> <span class="token punctuation">(</span> <span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> DATE_FORMAT<span class="token punctuation">(</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'%m%d'</span> <span class="token punctuation">)</span><span class="token operator">></span> DATE_FORMAT<span class="token punctuation">(</span> s_birth<span class="token punctuation">,</span> <span class="token string">'%m%d'</span> <span class="token punctuation">)</span> <span class="token keyword">THEN</span> <span class="token number">0</span> <span class="token keyword">ELSE</span> <span class="token number">1</span> <span class="token keyword">END</span> <span class="token punctuation">)</span> <span class="token keyword">AS</span> age 
<span class="token keyword">FROM</span>
	student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 47.查询本周过生日的学生</span>
<span class="token keyword">SELECT</span>
	<span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student 
<span class="token keyword">WHERE</span>
	WEEK <span class="token punctuation">(</span>
	DATE_FORMAT<span class="token punctuation">(</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'%Y%m%d'</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">=</span> WEEK <span class="token punctuation">(</span> Sage <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 48.查询下周过生日的学生</span>
<span class="token keyword">SELECT</span>
	<span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student 
<span class="token keyword">WHERE</span>
	WEEK <span class="token punctuation">(</span>
	DATE_FORMAT<span class="token punctuation">(</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'%Y%m%d'</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">=</span> WEEK <span class="token punctuation">(</span> Sage <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 49.查询本月过生日的学生</span>
<span class="token keyword">SELECT</span>
	<span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student 
<span class="token keyword">WHERE</span>
	<span class="token keyword">MONTH</span> <span class="token punctuation">(</span>
	DATE_FORMAT<span class="token punctuation">(</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'%Y%m%d'</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token keyword">MONTH</span> <span class="token punctuation">(</span> Sage <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 50. 查询下月过生日的学生</span>
<span class="token keyword">SELECT</span>
	<span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	student 
<span class="token keyword">WHERE</span>
	<span class="token keyword">MONTH</span> <span class="token punctuation">(</span>
	DATE_FORMAT<span class="token punctuation">(</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'%Y%m%d'</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token keyword">MONTH</span> <span class="token punctuation">(</span> Sage <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="索引优化分析" tabindex="-1"><a class="header-anchor" href="#索引优化分析" aria-hidden="true">#</a> 索引优化分析</h1>
<h2 id="针对的问题及其原因" tabindex="-1"><a class="header-anchor" href="#针对的问题及其原因" aria-hidden="true">#</a> 针对的问题及其原因</h2>
<p>针对问题：<strong>性能下降SQL慢、执行时间长、等待时间长。</strong></p>
<p><strong>问题原因</strong></p>
<ol>
<li>
<p>查询语句写的不好。</p>
</li>
<li>
<p>索引失效。（索引建立，但没有使用到）</p>
</li>
<li>
<p>关联太多的 JOIN（设计的缺陷或不得已的需求）。</p>
</li>
<li>
<p>服务器调优及各个参数设置（缓冲、线程数量等）。</p>
</li>
</ol>
<p>解决：先top 命令，查看磁盘空间。再复现问题，考虑解决方式。</p>
<p>建立索引示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- user表的name字段，【idx 索引 user表名 name字段名】</span>
<span class="token comment">-- 单值索引</span>
<span class="token keyword">create</span> <span class="token keyword">index</span> idx_user_name <span class="token keyword">on</span> <span class="token keyword">user</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 多值索引</span>
<span class="token keyword">create</span> <span class="token keyword">index</span> idx_user_nameEmail <span class="token keyword">on</span> <span class="token keyword">user</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>email<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通用的join查询-1" tabindex="-1"><a class="header-anchor" href="#通用的join查询-1" aria-hidden="true">#</a> 通用的JOIN查询</h2>
<h3 id="sql顺序-1" tabindex="-1"><a class="header-anchor" href="#sql顺序-1" aria-hidden="true">#</a> SQL顺序</h3>
<p>SQL书写顺序：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> 
<span class="token keyword">FROM</span>
<span class="token keyword">JOIN</span> <span class="token keyword">ON</span>
<span class="token keyword">WHERE</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
<span class="token keyword">HAVING</span>
<span class="token keyword">DISTINCT</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
<span class="token keyword">LIMIT</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL执行顺序：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">FROM</span>
<span class="token keyword">JOIN</span> <span class="token keyword">ON</span>
<span class="token keyword">WHERE</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
<span class="token keyword">HAVING</span>
<span class="token keyword">SELECT</span>
<span class="token keyword">DISTINCT</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
<span class="token keyword">LIMIT</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7种join理论-1" tabindex="-1"><a class="header-anchor" href="#_7种join理论-1" aria-hidden="true">#</a> 7种JOIN理论</h3>
<p>注意：<strong>MySQL不支持最下面JOIN理论</strong></p>
<p>创建测试表：</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>CREATE DATABASE db_join;
USE db_join;
CREATE TABLE tbl_dept (
	id INT ( 11 ) NOT NULL auto_increment,
	deptName VARCHAR ( 30 ) DEFAULT NULL,
	locAddr VARCHAR ( 40 ) DEFAULT NULL,
	PRIMARY KEY ( id ) 
) ENGINE = INNODB auto_increment = 1 DEFAULT charset = utf8;
CREATE TABLE tbl_emp (
	id INT ( 11 ) NOT NULL auto_increment,
	NAME VARCHAR ( 20 ) DEFAULT NULL,
	deptId INT ( 11 ) DEFAULT NULL,
	PRIMARY KEY ( id ),
	KEY fk_dept_id ( deptId ) #constraint fk_dept_id foreign key(deptId) references tbl_dept(id)
	
) ENGINE = INNODB auto_increment = 1 DEFAULT charset = utf8;

insert into tbl_dept(deptName,locAddr) values(&quot;RD&quot;,&quot;GanSu&quot;);
insert into tbl_dept(deptName,locAddr) values(&quot;HR&quot;,&quot;XiAN&quot;);
insert into tbl_dept(deptName,locAddr) values(&quot;MK&quot;,&quot;BeiJing&quot;);
insert into tbl_dept(deptName,locAddr) values(&quot;MIS&quot;,&quot;ShangHai&quot;);
insert into tbl_dept(deptName,locAddr) values(&quot;FD&quot;,&quot;ShenZhen&quot;);

insert into tbl_emp(name,deptId) values(&quot;E1&quot;,1);
insert into tbl_emp(name,deptId) values(&quot;E2&quot;,1);
insert into tbl_emp(name,deptId) values(&quot;E3&quot;,1);

insert into tbl_emp(name,deptId) values(&quot;EA&quot;,2);
insert into tbl_emp(name,deptId) values(&quot;EB&quot;,2);

insert into tbl_emp(name,deptId) values(&quot;W1&quot;,3);
insert into tbl_emp(name,deptId) values(&quot;W2&quot;,4);
insert into tbl_emp(name,deptId) values(&quot;W3&quot;,51);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询表数据：</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; use db_join;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A
Database changed
mysql&gt; select * from tbl_emp;
+----+------+--------+
| id | NAME | deptId |
+----+------+--------+
|  1 | E1   |      1 |
|  2 | E2   |      1 |
|  3 | E3   |      1 |
|  4 | EA   |      2 |
|  5 | EB   |      2 |
|  6 | W1   |      3 |
|  7 | W2   |      4 |
|  8 | W3   |     51 |
+----+------+--------+
8 rows in set (0.00 sec)
mysql&gt; select * from tbl_dept;
+----+----------+----------+
| id | deptName | locAddr  |
+----+----------+----------+
|  1 | RD       | GanSu    |
|  2 | HR       | XiAN     |
|  3 | MK       | BeiJing  |
|  4 | MIS      | ShangHai |
|  5 | FD       | ShenZhen |
+----+----------+----------+
5 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="情况一-两个表的交集数据" tabindex="-1"><a class="header-anchor" href="#情况一-两个表的交集数据" aria-hidden="true">#</a> 情况一：两个表的交集数据</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; select * from tbl_emp e inner join tbl_dept d on e.deptId = d.id;
+----+------+--------+----+----------+----------+
| id | NAME | deptId | id | deptName | locAddr  |
+----+------+--------+----+----------+----------+
|  1 | E1   |      1 |  1 | RD       | GanSu    |
|  2 | E2   |      1 |  1 | RD       | GanSu    |
|  3 | E3   |      1 |  1 | RD       | GanSu    |
|  4 | EA   |      2 |  2 | HR       | XiAN     |
|  5 | EB   |      2 |  2 | HR       | XiAN     |
|  6 | W1   |      3 |  3 | MK       | BeiJing  |
|  7 | W2   |      4 |  4 | MIS      | ShangHai |
+----+------+--------+----+----------+----------+
7 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="情况二-以表-tbl-emp-为主表关联-tbl-dept" tabindex="-1"><a class="header-anchor" href="#情况二-以表-tbl-emp-为主表关联-tbl-dept" aria-hidden="true">#</a> 情况二：以表 tbl_emp 为主表关联 tbl_dept</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; select * from tbl_emp e left join tbl_dept d on e.deptId = d.id;
+----+------+--------+------+----------+----------+
| id | NAME | deptId | id   | deptName | locAddr  |
+----+------+--------+------+----------+----------+
|  1 | E1   |      1 |    1 | RD       | GanSu    |
|  2 | E2   |      1 |    1 | RD       | GanSu    |
|  3 | E3   |      1 |    1 | RD       | GanSu    |
|  4 | EA   |      2 |    2 | HR       | XiAN     |
|  5 | EB   |      2 |    2 | HR       | XiAN     |
|  6 | W1   |      3 |    3 | MK       | BeiJing  |
|  7 | W2   |      4 |    4 | MIS      | ShangHai |
|  8 | W3   |     51 | NULL | NULL     | NULL     |
+----+------+--------+------+----------+----------+
8 rows in set (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="情况三-以-tbl-dept为主表关联-tbl-emp表" tabindex="-1"><a class="header-anchor" href="#情况三-以-tbl-dept为主表关联-tbl-emp表" aria-hidden="true">#</a> 情况三：以 tbl_dept为主表关联 tbl_emp表</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; select * from tbl_emp e right join tbl_dept d on e.deptId = d.id;
+------+------+--------+----+----------+----------+
| id   | NAME | deptId | id | deptName | locAddr  |
+------+------+--------+----+----------+----------+
|    1 | E1   |      1 |  1 | RD       | GanSu    |
|    2 | E2   |      1 |  1 | RD       | GanSu    |
|    3 | E3   |      1 |  1 | RD       | GanSu    |
|    4 | EA   |      2 |  2 | HR       | XiAN     |
|    5 | EB   |      2 |  2 | HR       | XiAN     |
|    6 | W1   |      3 |  3 | MK       | BeiJing  |
|    7 | W2   |      4 |  4 | MIS      | ShangHai |
| NULL | NULL |   NULL |  5 | FD       | ShenZhen |
+------+------+--------+----+----------+----------+
8 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="情况四-表-tbl-emp-特有的数据" tabindex="-1"><a class="header-anchor" href="#情况四-表-tbl-emp-特有的数据" aria-hidden="true">#</a> 情况四：表 tbl_emp 特有的数据</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; select * from tbl_emp e left join tbl_dept d on e.deptId = d.id where d.id is null;
+----+------+--------+------+----------+---------+
| id | NAME | deptId | id   | deptName | locAddr |
+----+------+--------+------+----------+---------+
|  8 | W3   |     51 | NULL | NULL     | NULL    |
+----+------+--------+------+----------+---------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="情况五-表-tbl-dept-特有的数据" tabindex="-1"><a class="header-anchor" href="#情况五-表-tbl-dept-特有的数据" aria-hidden="true">#</a> 情况五：表 tbl_dept 特有的数据</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; select * from tbl_emp e right join tbl_dept d on e.deptId = d.id where e.deptId is null;
+------+------+--------+----+----------+----------+
| id   | NAME | deptId | id | deptName | locAddr  |
+------+------+--------+----+----------+----------+
| NULL | NULL |   NULL |  5 | FD       | ShenZhen |
+------+------+--------+----+----------+----------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="情况六-两张表都有的数据" tabindex="-1"><a class="header-anchor" href="#情况六-两张表都有的数据" aria-hidden="true">#</a> 情况六：两张表都有的数据</h4>
<p>​		由于MySQL不支持 FULL JOIN，此处使用 UNION 代替。</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; select * from tbl_emp e left join tbl_dept d on e.deptId = d.id
    -&gt; union
    -&gt; select * from tbl_emp e right join tbl_dept d on e.deptId = d.id;
+------+------+--------+------+----------+----------+
| id   | NAME | deptId | id   | deptName | locAddr  |
+------+------+--------+------+----------+----------+
|    1 | E1   |      1 |    1 | RD       | GanSu    |
|    2 | E2   |      1 |    1 | RD       | GanSu    |
|    3 | E3   |      1 |    1 | RD       | GanSu    |
|    4 | EA   |      2 |    2 | HR       | XiAN     |
|    5 | EB   |      2 |    2 | HR       | XiAN     |
|    6 | W1   |      3 |    3 | MK       | BeiJing  |
|    7 | W2   |      4 |    4 | MIS      | ShangHai |
|    8 | W3   |     51 | NULL | NULL     | NULL     |
| NULL | NULL |   NULL |    5 | FD       | ShenZhen |
+------+------+--------+------+----------+----------+
9 rows in set (0.01 sec)	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="情况七-两张表特有的数据" tabindex="-1"><a class="header-anchor" href="#情况七-两张表特有的数据" aria-hidden="true">#</a> 情况七：两张表特有的数据</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; select * from tbl_emp e left join tbl_dept d on e.deptId = d.id where d.id is null
    -&gt; union
    -&gt; select * from tbl_emp e right join tbl_dept d on e.deptId = d.id where e.id is null;
+------+------+--------+------+----------+----------+
| id   | NAME | deptId | id   | deptName | locAddr  |
+------+------+--------+------+----------+----------+
|    8 | W3   |     51 | NULL | NULL     | NULL     |
| NULL | NULL |   NULL |    5 | FD       | ShenZhen |
+------+------+--------+------+----------+----------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2>
<h3 id="索引定义" tabindex="-1"><a class="header-anchor" href="#索引定义" aria-hidden="true">#</a> 索引定义</h3>
<p><strong>查找和排序都要用到索引。</strong>【查找 + 排序】</p>
<p>MySQL官方对索引的定义为：索引（Index）帮助MySQL高效获取数据的数据结构。</p>
<p>索引的本质：索引是数据结构。可以简单理解为 &quot;排好序的快速查找数据结构&quot;。</p>
<p>​		一般来说索引本身也很大，不可能全部存储在内存中，因此索引往往以索引文件的形式存储的磁盘上。我们平常所说的索引，如果没有特别指明，<strong>都是指B树</strong>（多路搜索树，并不一定是二叉的）结构组织的索引。</p>
<p>​		复合索引，前缀索引，唯一索引默认都是使用B+树索引，统称索引。当然，除了B+树这种类型的索引，其中聚集索引、次要索引、覆盖索引，统称索引，当然，除了B+树这种类型的索引之外，还有哈稀索引(hash index)等。</p>
<p>​		在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式引用（指向）数据，这样就可以在这些数据结构上实现高级查找算法。这种数据结构，就是索引。下图就是一种可能的索引方式示例（BTREE）：</p>
<figure><img src="@source/DataBase/MySQL/image-20221006182044473.png" alt="image-20221006182044473" tabindex="0" loading="lazy"><figcaption>image-20221006182044473</figcaption></figure>
<h3 id="索引失效" tabindex="-1"><a class="header-anchor" href="#索引失效" aria-hidden="true">#</a> 索引失效</h3>
<p>对数据的删除，没有及时修改索引，原本索引指向的位置，数据不会改变</p>
<h3 id="索引优势" tabindex="-1"><a class="header-anchor" href="#索引优势" aria-hidden="true">#</a> 索引优势</h3>
<ol>
<li>
<p>提高数据的检索效率，降低数据库的 IO 成本。</p>
</li>
<li>
<p>通过索引对数据进行排序，降低数据的排序成本，降低了 CPU 的消耗。</p>
</li>
</ol>
<h3 id="索引劣势" tabindex="-1"><a class="header-anchor" href="#索引劣势" aria-hidden="true">#</a> 索引劣势</h3>
<ol>
<li>实际上索引也是一张表，该表保存了主键与索引字段，并指向实体表的记录，所以索引列也是要占用空间的。</li>
<li>虽然索引大大提高了查询速度，同时却会降低更新表的速度，如对表进行INSERT、UPDATE和DELETE。因为更新表时，MySQL不仅要保存数据，还要保存一下索引文件每次更新添加了索引列的字段，都会调整因为更新所带来的键值变化后的索引信息。</li>
<li>索引只是提高效率的一个因素，如果MySQL有大数据量的表，就需要花时间研究建立最优秀的索引，或优化查询语句。</li>
<li>索引是不断优化和调整的，根据用户查询的信息不断调整。</li>
</ol>
<h3 id="索引分类" tabindex="-1"><a class="header-anchor" href="#索引分类" aria-hidden="true">#</a> 索引分类</h3>
<h4 id="单值索引" tabindex="-1"><a class="header-anchor" href="#单值索引" aria-hidden="true">#</a> 单值索引</h4>
<p>​		一个索引只包含单个列，一个表可以有对个单列索引。</p>
<h4 id="唯一索引" tabindex="-1"><a class="header-anchor" href="#唯一索引" aria-hidden="true">#</a> 唯一索引</h4>
<p>​		索引列的值必须唯一，但允许有空值。</p>
<h4 id="复合索引" tabindex="-1"><a class="header-anchor" href="#复合索引" aria-hidden="true">#</a> 复合索引</h4>
<p>​		一个索引包含多个列。</p>
<h3 id="基本语法-1" tabindex="-1"><a class="header-anchor" href="#基本语法-1" aria-hidden="true">#</a> 基本语法</h3>
<h4 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>create [unique] index indexName on tableName(columnName(length));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​		如果是 char，varchar 类型，length 长度可以小于字段的实际长度。如果是 blob 和 text 必须指定 length。</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>alter tableName add [unique] index indexName on (columnName(length));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>drop index indexName on tableName;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看" tabindex="-1"><a class="header-anchor" href="#查看" aria-hidden="true">#</a> 查看</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>show index from tableName;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用alter命令" tabindex="-1"><a class="header-anchor" href="#使用alter命令" aria-hidden="true">#</a> 使用alter命令</h4>
<p>有四种方式来添加数据表的索引：</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code># 该语句添加一个主键，这意味着索引值必须是唯一的， 且不能为NULL
ALTER TABLE tbl_name ADD PRIMARY KEY (column(length)) 
# 这条语句创建索引的值必须是唯一的(除了NULL外，NULL可能会出现多次)
ALTER TABLE tbl name ADD UNIQUE index_name (column(length)) 
# 添加普通索引，索引值可出现多次
ALTER TABLE tbl_name ADD INDEX index_name (column(length)) 
# 该语句指定了索引为FULLTEXT,用于全文索引
ALTER TABLE tbl _name ADD FULLTEXT index_name (column(length)) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql-索引结构" tabindex="-1"><a class="header-anchor" href="#mysql-索引结构" aria-hidden="true">#</a> MySQL 索引结构</h3>
<ol>
<li>BTree索引</li>
<li>Hash索引</li>
<li>full-text全文索引</li>
<li>R-Tree索引</li>
</ol>
<h3 id="btree检索原理" tabindex="-1"><a class="header-anchor" href="#btree检索原理" aria-hidden="true">#</a> BTree检索原理</h3>
<figure><img src="@source/DataBase/MySQL/BTree检索原理.png" alt="BTree检索原理.png" tabindex="0" loading="lazy"><figcaption>BTree检索原理.png</figcaption></figure>
<p><strong>1.</strong>   <strong>初始化介绍</strong></p>
<p>​		一颗b+树，浅蓝色的块我们称之为一个磁盘块，可以看到每个磁盘块包含几个数据项(深蓝色所示)和指针(黄色所示)，如磁盘块1包含数据项17和35，包含指针P1、P2、P3，P1表示小于17的磁盘块，P2表示在17和35之间的磁盘块，P3表示大于35的磁盘块。</p>
<p>​		真实的数据存在于叶子节点即3、5、9、10、13、15、28、29、36、60、75、79、90、99。非叶子节点不存储真实的数据，只存储指引搜索方向的数据项，如17、 35并不真实存在于数据表中。</p>
<p><strong>2.</strong>   <strong>查找过程</strong></p>
<p>​		如果要查找数据项29，那么首先会把磁盘块1由磁盘加载到内存，此时发生一次IO, 在内存中用二分查找确定29在17和35之间，锁定磁盘块1的P2指针，内存时间因为非常短（相比磁盘的IO）可以忽略不计，通过磁盘块1的P2指针的磁盘地址，把磁盘块3由磁盘加载到内存，发生第二次IO, 29 在 26 和 30 之间， 锁定磁盘块3的 P2 指针，通过指针加载磁盘块8到内存，发生第三次IO， 同时内存中做二分查找找到29，结束查询，总计三次IO。</p>
<p>​		真实的情况是，3层的b+树可以表示上百万的数据，如果上百万的数据查找只需要三次IO，性能提高将是巨大的，如果没有索引，每个数据项都要发生一次IO,那么总共需要百万次的IO，显然成本非常非常高。</p>
<h3 id="需要创建索引的情况" tabindex="-1"><a class="header-anchor" href="#需要创建索引的情况" aria-hidden="true">#</a> 需要创建索引的情况</h3>
<ol>
<li>
<p>主键自动建立唯一索引。</p>
</li>
<li>
<p>频繁作为查询条件的字段应该创建索引。</p>
</li>
<li>
<p>查询中与其它表关联的字段，外键关系建立索引。</p>
</li>
<li>
<p>频繁更新的字段不适合创建索引。因为每次更新不仅更新记录还会更新索引。</p>
</li>
<li>
<p>where条件里用不到的字段不创建索引。</p>
</li>
<li>
<p>单键/组合索引的选择问题，(在高并发下倾向创建组合索引)。</p>
</li>
<li>
<p>查询中排序的字段，排序字段若通过索引去访问将大大提高排序速度。</p>
</li>
<li>
<p>查询中统计或者分组字段。</p>
</li>
</ol>
<h3 id="不需要创建索引的情况" tabindex="-1"><a class="header-anchor" href="#不需要创建索引的情况" aria-hidden="true">#</a> 不需要创建索引的情况</h3>
<ol>
<li>
<p><strong>表记录太少，优化器会自动优化。</strong>（至少3百万）</p>
</li>
<li>
<p><strong>经常增删改的表。</strong>（原因：提高了查询速度，同时却会降低更新表的速度，如对表进行INSERT、UPDATE和DELETE。因为更新表时，MySQL不仅要保存数据，还要保存一下索引文件）。</p>
</li>
<li>
<p><strong>数据重复且分布平均的表字段，因此应该只为最经常查询和最经常排序的数据列建立索引</strong>。</p>
<p>注意，如果某个数据列包含许多重复的内容，为它建立索引就没有太大的实际效果。假如一个表有10万行记录，有一个字段A只有T和F两种值，且每个值的分布概率大约为50%，那么对这种表A字段建索引一般不会提高数据库的查询速度。索引的选择性是指索引列中不同值的数目与表中记录数的比。如果一个表中有2000条记录，表索引列有1980个不同的值，那么这个索引的选择性就是1980/2000=0.99。一个索引的选择性越接近于1,这个索引的效率就越高。</p>
</li>
</ol>
<h2 id="性能分析" tabindex="-1"><a class="header-anchor" href="#性能分析" aria-hidden="true">#</a> 性能分析</h2>
<h3 id="mysql-query-optimizer-查询优化器" tabindex="-1"><a class="header-anchor" href="#mysql-query-optimizer-查询优化器" aria-hidden="true">#</a> MySQL  Query  Optimizer（查询优化器）</h3>
<p>​		MySQL中有专门负责优化 <strong>SELECT</strong> 语句的优化器模块，主要功能：通过计算分析系统中收集到的统计信息，为客户端请求的 Query 提供它认为最优的执行计划（机器认为最优的数据检索方式，但不见得是DBA认为是最优的，这部分最耗费时间）。</p>
<p>​		当客户端向 MySQL 请求一条Query，命令解析器模块完成请求分类，区别出是 SELECT 并转发给 MySQL Query Optimizer时，MySQL Query Optimizer首先会对整条Query进行优化，处理掉一些常量表达式的预算，直接换算成常量值。并对Query中的查询条件进行简化和转换，如去掉一些无用或显而易见的条件、结构调整等。然后分析Query中的Hint 信息（如果有），看显示 Hint 信息是否可以完全确定该Query的执行计划。如果没有 Hint 或 Hint 信息还不足以完全确定执行计划，则会读取所涉及对象的统计信息，根据 Query 进行写相应的计算分析，然后再得出最后的执行计划。</p>
<h3 id="mysql常见瓶颈" tabindex="-1"><a class="header-anchor" href="#mysql常见瓶颈" aria-hidden="true">#</a> MySQL常见瓶颈</h3>
<ol>
<li>
<p>CPU：CPU在饱和的时候，一般发生在数据装入内存或从磁盘上读取数据的时候。</p>
</li>
<li>
<p>IO：磁盘 I/O 瓶颈发生在装入数据远大于内存容量的时候。</p>
</li>
<li>
<p>服务器硬件的性能瓶颈：top，free，iostat 和 vmstat 来查看系统的性能状态。</p>
</li>
</ol>
<h3 id="explain-查看执行计划" tabindex="-1"><a class="header-anchor" href="#explain-查看执行计划" aria-hidden="true">#</a> Explain（查看执行计划）</h3>
<h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h4>
<p>​		使用 EXPLAIN 关键字可以模拟优化器执行SQL查询语句，从而知道 MySQL 是如何处理 SQL 语句的。分析你的查询语句或是表结构的性能瓶颈。</p>
<h4 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h4>
<ol>
<li>
<p>表的读取顺序。</p>
</li>
<li>
<p>数据读取操作的操作类型。</p>
</li>
<li>
<p>哪些索引可以使用。</p>
</li>
<li>
<p>哪些索引被实际使用。</p>
</li>
<li>
<p>表之间的引用。</p>
</li>
<li>
<p>每张表有多少行被优化器查询。</p>
</li>
</ol>
<p><strong>语法：explain + Sql 语句</strong></p>
<figure><img src="@source/DataBase/MySQL/image-20221006184029571.png" alt="image-20221006184029571" tabindex="0" loading="lazy"><figcaption>image-20221006184029571</figcaption></figure>
<h3 id="explain-各字段说明" tabindex="-1"><a class="header-anchor" href="#explain-各字段说明" aria-hidden="true">#</a> explain 各字段说明</h3>
<h4 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h4>
<p>​		select 查询的序列号，包含一组数字，表示查询中执行select子句或操作表的顺序。</p>
<ol>
<li>id相同，执行顺序由上至下。</li>
<li>id不同，如果是子查询，id的序号会递增，id值越大优先级越高，越先被执行冒。</li>
<li>id相同类型不同，同时存在。</li>
</ol>
<p>示例：id相同，执行顺序由上向下。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006184319151.png" alt="image-20221006184319151" tabindex="0" loading="lazy"><figcaption>image-20221006184319151</figcaption></figure>
<p>示例：子查询，id越大，优先级越高，越优先执行。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006184338549.png" alt="image-20221006184338549" tabindex="0" loading="lazy"><figcaption>image-20221006184338549</figcaption></figure>
<p>示例：通过 id 分组，同一组中，由上向下执行，不同组中id越大，越先执行。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006184523873.png" alt="image-20221006184523873" tabindex="0" loading="lazy"><figcaption>image-20221006184523873</figcaption></figure>
<p>derived2 表示衍生的ID为2的虚表。</p>
<h4 id="select-type" tabindex="-1"><a class="header-anchor" href="#select-type" aria-hidden="true">#</a> select_type</h4>
<p>查询的类型：主要用来区分普通查询、联合查询、子查询等复杂查询。</p>
<p>id     select_type</p>
<p>1         SIMPLE</p>
<p>2         PRIMARY</p>
<p>3         SUBQUERY</p>
<p>4         DERIVED</p>
<p>5         UNION</p>
<p>6         UNION RESULT</p>
<p><strong>SIMPLE</strong>：简单的select查询，查询中不包含子查询或者UNION。</p>
<p><strong>PRIMARY</strong>：查询中若包含任何复杂的子部分，最外层查询则被标记为PRIMARY。</p>
<p><strong>SUBQUERY</strong>：在 SELECT 或 WHERE 列表中包含了子查询。</p>
<p><strong>DERIVED</strong>： <strong>FROM列表中包含的子查询被标记为DERIVED衍生</strong>，MySQL会递归执行这些子查询，把结果放在临时表里。</p>
<p><strong>UNION</strong>：若第二个SELECT出现在UNION之后，则被标记为UNION。若UNION包含在FROM子句的子查询中，外层</p>
<p>​				SELECT将被标记为：DERIVED。</p>
<p><strong>UNION RESULT</strong>：从UNION表获取结果的SELECT。</p>
<p>示例：UNION</p>
<figure><img src="@source/DataBase/MySQL/image-20221006185930088.png" alt="image-20221006185930088" tabindex="0" loading="lazy"><figcaption>image-20221006185930088</figcaption></figure>
<h4 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> table</h4>
<p>​		显示这一行的数据是关于哪一张表的。</p>
<h4 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h4>
<p>访问类型的排列。</p>
<p>主要有：<strong>ALL、index、range、ref、eq_ref、const，system、NULL。</strong></p>
<p>从最好到最差依次为：<strong>system &gt; const &gt; eq_ref &gt; ref &gt; range &gt; index &gt; ALL。</strong></p>
<p>type显示的是访问类型，是较为重要的一个指标，结果值从最好到最坏依次是：</p>
<p>system&gt;const&gt;eq_ref&gt;ref&gt;flltext&gt;ref_or_null&gt;index_merge&gt;unique_subquery&gt;index_subquery&gt;range&gt;index&gt;ALL</p>
<p><strong>system &gt; const &gt; eq_ref &gt; ref &gt; range &gt; index &gt; ALL。</strong></p>
<p>一般来说，得保证查询至少达到range级别，最好能达到 ref。</p>
<p><strong>1.</strong>   <strong>system</strong></p>
<p>表只有一行记录（等于系统表），这是 const 类型的特列，平时不会出现，这个也可以忽略不计。</p>
<p><strong>2.</strong>   <strong>const</strong></p>
<p>表示通过索引一次就找到了，const 用于比较 <strong>primary key 或者 unique 索引</strong>。因为只匹配一行数据，所以很快。如将主键置于 where 列表中，MySQL就能将该查询转换为一个常量。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006190248776.png" alt="image-20221006190248776" tabindex="0" loading="lazy"><figcaption>image-20221006190248776</figcaption></figure>
<p><strong>3.</strong>   <strong>eq_ref</strong></p>
<p>唯一性索引扫描，对于每个<strong>索引键</strong>，表中只有一条记录与之匹配。常见于主键或唯一索引扫描。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006190319449.png" alt="image-20221006190319449" tabindex="0" loading="lazy"><figcaption>image-20221006190319449</figcaption></figure>
<p><strong>4.</strong>   <strong>ref</strong></p>
<p>非唯一性索引扫描，返回匹配某个单独值的所有行。</p>
<p>本质上也是一种索引访问，它返回所有匹配某个单独值的行，然而它可能会找到多个符合条件的行，所以它应该属于查找和扫描的混合体。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006190406575.png" alt="image-20221006190406575" tabindex="0" loading="lazy"><figcaption>image-20221006190406575</figcaption></figure>
<p><strong>5.</strong>   <strong>range</strong></p>
<p>只检索给定范围的行，使用一个索引来选择行。key列显示使用了哪个索引。一般就是在你的where语句中出现了between、&lt;、&gt;、in等的查询。这种范围扫描索引扫描比全表扫描要好，因为它只需要开始于索引的某一点，而结束语另一点，不用扫描全部索引。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006190614716.png" alt="image-20221006190614716" tabindex="0" loading="lazy"><figcaption>image-20221006190614716</figcaption></figure>
<p><strong>6.</strong>   <strong>index</strong></p>
<p>Full Index Scan**，index 与 ALL 区别为 index 类型只遍历索引树。**这通常比ALL快，因为索引文件通常比数据文件小。也就是说虽然 all 和 Index 都是读全表，但 index 是从索引中读取的，而 all 是从硬盘中读的。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006190648292.png" alt="image-20221006190648292" tabindex="0" loading="lazy"><figcaption>image-20221006190648292</figcaption></figure>
<p><strong>7.</strong>   <strong>all</strong></p>
<p><strong>Full Table Scan，将遍历全表以找到匹配的行。</strong></p>
<figure><img src="@source/DataBase/MySQL/image-20221006190755759.png" alt="image-20221006190755759" tabindex="0" loading="lazy"><figcaption>image-20221006190755759</figcaption></figure>
<p><strong>备注：一般来说，得保证查询至少达到range级别，最好能达到ref。</strong></p>
<h4 id="possible-keys" tabindex="-1"><a class="header-anchor" href="#possible-keys" aria-hidden="true">#</a> possible_keys</h4>
<ol>
<li>显示可能应用在这张表中的索引，一个或多个。</li>
<li>查询涉及到的字段若存在索引，则该索引将被列出，但不一定被查询实际使用。</li>
</ol>
<h4 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> key</h4>
<ol>
<li>
<p>实际使用的索引。如果为 NULL，则没有使用索引。</p>
</li>
<li>
<p>查询中若使用了覆盖索引，则该索引仅出现在 key 列表中。</p>
</li>
</ol>
<p>**覆盖索引：**建立的索引的个数顺序和查询的字段一致，就会通过索引去查。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006190924207.png" alt="image-20221006190924207" tabindex="0" loading="lazy"><figcaption>image-20221006190924207</figcaption></figure>
<h4 id="ken-len" tabindex="-1"><a class="header-anchor" href="#ken-len" aria-hidden="true">#</a> ken_len</h4>
<ol>
<li>
<p>表示索引中使用的字节数，可通过该列计算查询中使用的索引的长度。在不损失精确性的情况下，长度越短越好。</p>
</li>
<li>
<p>key_ len 显示的值为索引字段的最大可能长度，并非实际使用长度，即 key_ len 是根据表定义计算而得，不是通过表</p>
</li>
</ol>
<p>​		内检索出的。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006191031290.png" alt="image-20221006191031290" tabindex="0" loading="lazy"><figcaption>image-20221006191031290</figcaption></figure>
<h4 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h4>
<p>显示索引的哪一列被使用了，如果可能的话，是一个常数。哪些列或常量被用于查找索引列上的值。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006191129061.png" alt="image-20221006191129061" tabindex="0" loading="lazy"><figcaption>image-20221006191129061</figcaption></figure>
<p>对于 t1 表，key_len = 26，索引 idx_col1_col2 被充分使用，t1.col2 = 'ac' 表示匹配到了一个常量。</p>
<h4 id="rows" tabindex="-1"><a class="header-anchor" href="#rows" aria-hidden="true">#</a> rows</h4>
<p><strong>根据表统计信息及索引选用情况，大致估算出找到所需的记录所需要读取的行数。</strong></p>
<figure><img src="@source/DataBase/MySQL/image-20221006191202220.png" alt="image-20221006191202220" tabindex="0" loading="lazy"><figcaption>image-20221006191202220</figcaption></figure>
<h4 id="extra" tabindex="-1"><a class="header-anchor" href="#extra" aria-hidden="true">#</a> Extra</h4>
<p>包含不适合在其他列中显示但十分重要的额外信息。</p>
<h5 id="using-filesort-文件内排序" tabindex="-1"><a class="header-anchor" href="#using-filesort-文件内排序" aria-hidden="true">#</a> Using filesort（文件内排序）</h5>
<p>​		说明 mysq| 会对数据使用一个外部的索引排序，而不是按照表内的索引顺序进行读取。MySQL中无法利用索引完的排序操作称为&quot;文件排序&quot;。出现 Using filesort 说明性能受到较大影响，应该尽量避免。</p>
<p>查询用到，排序没有用到**（索引 idx_col1_col2_col3 中 col2没有用到，中断了）**</p>
<figure><img src="@source/DataBase/MySQL/image-20221006191427766.png" alt="image-20221006191427766" tabindex="0" loading="lazy"><figcaption>image-20221006191427766</figcaption></figure>
<h5 id="using-temporary" tabindex="-1"><a class="header-anchor" href="#using-temporary" aria-hidden="true">#</a> Using temporary</h5>
<p>​		使了用<strong>临时表</strong>保存中间结果，MySQL在对查询结果排序时使用临时表。常见于排序 order by 和分组查询 group by。<strong>（group by 尽量和索引的个数和顺序一致，不算查询条件中的字段）</strong></p>
<p><strong>（order by 尽量和索引的个数和顺序一致，可以包含查询条件的字段）</strong></p>
<p><strong>尽可能避免 using filesort 和 using temporary。</strong></p>
<figure><img src="@source/DataBase/MySQL/image-20221006191619424.png" alt="image-20221006191619424" tabindex="0" loading="lazy"><figcaption>image-20221006191619424</figcaption></figure>
<p><strong>分组字段 col1和 col2 应该和索引的个数顺序一致，不应中断。</strong></p>
<h5 id="using-index" tabindex="-1"><a class="header-anchor" href="#using-index" aria-hidden="true">#</a> Using index</h5>
<p>表示相应的 select 操作中使用了<strong>覆盖索引(Covering Index)</strong>，避免访问了表的数据行，效率不错。</p>
<p>如果同时出现 Using where，表明索引被用来执行索引键值的查找。</p>
<p>如果没有同时出现Using where，<strong>表明索引用来读取数据而非执行查找动作。</strong></p>
<p><strong>覆盖索引(Covering Index)。</strong></p>
<p>覆盖索引(Covering Index)，也说为索引覆盖。</p>
<p>理解方式一：</p>
<p>​		就是 select 的数据列只用从索引中就能够取得，不必读取数据行，MySQL可以利用索引返回 select 列表中的字段，而不必根据索引再次读取数据文件，换句话说查询列要被所建的索引覆盖。</p>
<p>理解方式二：</p>
<p>​		索引是高效找到行的一个方法，但是一般数据库也能使用索引找到一个列的数据，因此它不必读取整个行。毕竟索引叶子节点存储了它们索引的数据；当能通过读取索引就可以得到想要的数据，那就不需要读取行了。一个索引包含了(或覆盖了)满足查询结果的数据就叫做覆盖索引。</p>
<p>注意：如果要使用覆盖索引，一定要注意select列表中只取出需要的列，不可 select *，因为如果将所有字段一起做索引会导致索引文件过大，查询性能下降。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006192057410.png" alt="image-20221006192057410" tabindex="0" loading="lazy"><figcaption>image-20221006192057410</figcaption></figure>
<h5 id="using-where" tabindex="-1"><a class="header-anchor" href="#using-where" aria-hidden="true">#</a> Using where</h5>
<p>​		表明使用了where过滤。</p>
<h5 id="using-join-buffer" tabindex="-1"><a class="header-anchor" href="#using-join-buffer" aria-hidden="true">#</a> Using join buffer</h5>
<p>​		使用了连接缓存。</p>
<h5 id="impossible-where" tabindex="-1"><a class="header-anchor" href="#impossible-where" aria-hidden="true">#</a> Impossible where</h5>
<p>​		where子句的值总是false，不能用来获取任何元组。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006192403646.png" alt="image-20221006192403646" tabindex="0" loading="lazy"><figcaption>image-20221006192403646</figcaption></figure>
<h5 id="select-tables-optimized-away" tabindex="-1"><a class="header-anchor" href="#select-tables-optimized-away" aria-hidden="true">#</a> select tables optimized away</h5>
<p>​		在没有GROUP BY子句的情况下，基于索引优化MIN/MAX操作或者对于MyISAM存储引擎优化COUNT(*) 操作，不必等到执行阶段再进行计算，查询执行计划生成的阶段即完成优化。</p>
<h5 id="distinct" tabindex="-1"><a class="header-anchor" href="#distinct" aria-hidden="true">#</a> distinct</h5>
<p>​		优化distinct操作，在找到第一匹配的元组后即停止找同样值的动作。</p>
<h5 id="示例说明" tabindex="-1"><a class="header-anchor" href="#示例说明" aria-hidden="true">#</a> 示例说明</h5>
<figure><img src="@source/DataBase/MySQL/image-20221006192733929.png" alt="image-20221006192733929" tabindex="0" loading="lazy"><figcaption>image-20221006192733929</figcaption></figure>
<p>​		先执行 union 后面的查询语句，select_type = union，再执行 from后面的虚表，再执行 select 字段中子查询，再执行 union 前面的主查询，最后执行union  result。</p>
<h3 id="单表优化案例" tabindex="-1"><a class="header-anchor" href="#单表优化案例" aria-hidden="true">#</a> 单表优化案例</h3>
<p>创建测试数据：</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>-- 创建数据库 index_db
create table if not exists article(
id int(10) unsigned not null primary key auto_increment,
author_id int(10) unsigned not null,
category_id int(10) unsigned not null,
views int(10) unsigned not null,
comments int(10) unsigned not null,
title varbinary(255) not null,
content text not null
);

insert into article(author_id,category_id,views,comments,title,content) values
(1,1,1,1,&quot;1&quot;,&quot;1&quot;),
(2,2,2,2,&quot;2&quot;,&quot;2&quot;),
(1,1,3,3,&quot;3&quot;,&quot;3&quot;);

select * from article;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：查询category_id为1，comments大于1，且view最多的article_id。</p>
<p>未建立索引：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">index</span> <span class="token keyword">from</span> article<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/DataBase/MySQL/image-20221006193639519.png" alt="image-20221006193639519" tabindex="0" loading="lazy"><figcaption>image-20221006193639519</figcaption></figure>
<p>执行SQL：</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>explain select id,author_id from article where category_id=1 and comments&gt;1 order by views desc limit 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/DataBase/MySQL/image-20221006193826920.png" alt="image-20221006193826920" tabindex="0" loading="lazy"><figcaption>image-20221006193826920</figcaption></figure>
<p>建立索引：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 对于复合索引，先根据category_id查找，再根据comments查找，再根据views查找</span>
<span class="token keyword">create</span> <span class="token keyword">index</span> idx_article_ccv <span class="token keyword">on</span> article <span class="token punctuation">(</span>category_id<span class="token punctuation">,</span>comments<span class="token punctuation">,</span>views<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">show</span> <span class="token keyword">index</span> <span class="token keyword">from</span> article<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/DataBase/MySQL/image-20221006194232740.png" alt="image-20221006194232740" tabindex="0" loading="lazy"><figcaption>image-20221006194232740</figcaption></figure>
<p>再次explain：</p>
<figure><img src="@source/DataBase/MySQL/image-20221006194414877.png" alt="image-20221006194414877" tabindex="0" loading="lazy"><figcaption>image-20221006194414877</figcaption></figure>
<p>修改查询条件：</p>
<figure><img src="@source/DataBase/MySQL/image-20221006194502965.png" alt="image-20221006194502965" tabindex="0" loading="lazy"><figcaption>image-20221006194502965</figcaption></figure>
<p>原因：<strong>comments&gt;1造成了索引失效，一般尽可能精确。</strong></p>
<p>删除并重新建立索引：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">index</span> idx_article_ccv <span class="token keyword">on</span> article<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">index</span> idx_article_cv <span class="token keyword">on</span> article<span class="token punctuation">(</span>category_id<span class="token punctuation">,</span>views<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">show</span> <span class="token keyword">index</span> <span class="token keyword">from</span> article<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/DataBase/MySQL/image-20221006194750583.png" alt="image-20221006194750583" tabindex="0" loading="lazy"><figcaption>image-20221006194750583</figcaption></figure>
<p>再次explain：</p>
<figure><img src="@source/DataBase/MySQL/image-20221006194914897.png" alt="image-20221006194914897" tabindex="0" loading="lazy"><figcaption>image-20221006194914897</figcaption></figure>
<h3 id="两表优化案例" tabindex="-1"><a class="header-anchor" href="#两表优化案例" aria-hidden="true">#</a> 两表优化案例</h3>
<p>准备数据：</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>create table if not exists class(
id int(10) unsigned not null auto_increment,
card int(10) unsigned not null,
primary key(id)
);
create table if not exists book(
	bookid int(10) unsigned not null auto_increment,
	card int(10) unsigned not null,
	primary key(bookid)
);
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));
insert into class(card) values(floor(1+(rand()*20)));

insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
insert into book(card) values(floor(1+(rand()*20)));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对表 book 和 class 做 inner join 查询：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">explain</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> class <span class="token keyword">inner</span> <span class="token keyword">join</span> book <span class="token keyword">on</span> book<span class="token punctuation">.</span>card <span class="token operator">=</span> class<span class="token punctuation">.</span>card<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/DataBase/MySQL/image-20221006195225436.png" alt="image-20221006195225436" tabindex="0" loading="lazy"><figcaption>image-20221006195225436</figcaption></figure>
<p><strong>索引应该添加到那张表进行优化？</strong></p>
<p><strong>对于inner join连接，索引的添加类似于单表。</strong></p>
<p><strong>情况一：左连接给右表添加索引</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> book <span class="token keyword">add</span> <span class="token keyword">index</span> Y<span class="token punctuation">(</span>card<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> class <span class="token keyword">left</span> <span class="token keyword">join</span> book <span class="token keyword">on</span> class<span class="token punctuation">.</span>card <span class="token operator">=</span> book<span class="token punctuation">.</span>card<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/DataBase/MySQL/image-20221006195603694.png" alt="image-20221006195603694" tabindex="0" loading="lazy"><figcaption>image-20221006195603694</figcaption></figure>
<p><strong>索引应该添加到那张表进行优化？</strong></p>
<p><strong>对于inner join连接，索引的添加类似于单表。</strong></p>
<p><strong>对于左连接和右连接：</strong></p>
<p><strong>情况一：左连接给右表添加索引</strong></p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>alter table book add index Y(card);
explain select * from class left join book on class.card = book.card;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/DataBase/MySQL/image-20221006195848293.png" alt="image-20221006195848293" tabindex="0" loading="lazy"><figcaption>image-20221006195848293</figcaption></figure>
<p><strong>情况二：左连接给坐左表添加索引</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">index</span> Y <span class="token keyword">on</span> book<span class="token punctuation">;</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> class <span class="token keyword">add</span> <span class="token keyword">index</span> X<span class="token punctuation">(</span>card<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> class <span class="token keyword">left</span> <span class="token keyword">join</span> book <span class="token keyword">on</span> class<span class="token punctuation">.</span>card <span class="token operator">=</span> book<span class="token punctuation">.</span>card<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/DataBase/MySQL/image-20221006195944984.png" alt="image-20221006195944984" tabindex="0" loading="lazy"><figcaption>image-20221006195944984</figcaption></figure>
<p>总结：</p>
<p><strong>左连接查询时，左表的数据都有，需要对右边的数据进行搜索，因此需要对右表的数据建立索引，反之相同。</strong></p>
<p><strong>索引可以只建立其中一张表，分情况使用左连接或右连接。</strong></p>
<figure><img src="@source/DataBase/MySQL/image-20221006200225231.png" alt="image-20221006200225231" tabindex="0" loading="lazy"><figcaption>image-20221006200225231</figcaption></figure>
<h3 id="三表优化案例" tabindex="-1"><a class="header-anchor" href="#三表优化案例" aria-hidden="true">#</a> 三表优化案例</h3>
<p>数据准备：再添加一张表phone再添加一张表phone</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>create table if not exists phone(
phoneid int(10) unsigned not null auto_increment,
card int(10) unsigned not null,
primary key(phoneid)
);
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
insert into phone(card) values(floor(1+(rand()*20)));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果三张表都不加索引：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">index</span> <span class="token keyword">from</span> class<span class="token punctuation">;</span>
<span class="token keyword">drop</span> <span class="token keyword">index</span> X <span class="token keyword">on</span> class<span class="token punctuation">;</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> class <span class="token keyword">left</span> <span class="token keyword">join</span> book <span class="token keyword">on</span> class<span class="token punctuation">.</span>card <span class="token operator">=</span> book<span class="token punctuation">.</span>card <span class="token keyword">left</span> <span class="token keyword">join</span> phone <span class="token keyword">on</span> book<span class="token punctuation">.</span>card <span class="token operator">=</span> phone<span class="token punctuation">.</span>card<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/DataBase/MySQL/image-20221006202906949.png" alt="image-20221006202906949" tabindex="0" loading="lazy"><figcaption>image-20221006202906949</figcaption></figure>
<p>给被 JOIN 表添加索引：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">index</span> Y <span class="token keyword">on</span> book<span class="token punctuation">(</span>card<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> phone <span class="token keyword">add</span> <span class="token keyword">index</span> Z<span class="token punctuation">(</span>card<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> class <span class="token keyword">left</span> <span class="token keyword">join</span> book <span class="token keyword">on</span> class<span class="token punctuation">.</span>card <span class="token operator">=</span> book<span class="token punctuation">.</span>card <span class="token keyword">left</span> <span class="token keyword">join</span> phone <span class="token keyword">on</span> book<span class="token punctuation">.</span>card <span class="token operator">=</span> phone<span class="token punctuation">.</span>card<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/DataBase/MySQL/image-20221006203113294.png" alt="image-20221006203113294" tabindex="0" loading="lazy"><figcaption>image-20221006203113294</figcaption></figure>
<figure><img src="@source/DataBase/MySQL/image-20221006205026827.png" alt="image-20221006205026827" tabindex="0" loading="lazy"><figcaption>image-20221006205026827</figcaption></figure>
<h2 id="索引优化" tabindex="-1"><a class="header-anchor" href="#索引优化" aria-hidden="true">#</a> 索引优化</h2>
<p>准备数据：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> staffs<span class="token punctuation">(</span>
id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">default</span> <span class="token string">''</span> <span class="token keyword">comment</span> <span class="token string">"姓名"</span><span class="token punctuation">,</span>
age <span class="token keyword">int</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">default</span> <span class="token number">0</span> <span class="token keyword">comment</span> <span class="token string">'年龄'</span><span class="token punctuation">,</span>
pos <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">default</span> <span class="token string">''</span> <span class="token keyword">comment</span> <span class="token string">'职位'</span><span class="token punctuation">,</span>
add_time <span class="token keyword">timestamp</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">default</span> <span class="token keyword">current_timestamp</span> <span class="token keyword">comment</span> <span class="token string">'入职时间'</span>
<span class="token punctuation">)</span> <span class="token keyword">charset</span> utf8 <span class="token keyword">comment</span> <span class="token string">'员工记录表'</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> staffs<span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>pos<span class="token punctuation">,</span>add_time<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'z3'</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token string">'manager'</span><span class="token punctuation">,</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> staffs<span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>pos<span class="token punctuation">,</span>add_time<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'July'</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token string">'dev'</span><span class="token punctuation">,</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> staffs<span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>pos<span class="token punctuation">,</span>add_time<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'2000'</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token string">'dev'</span><span class="token punctuation">,</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> staffs<span class="token punctuation">;</span>
<span class="token comment">-- 添加索引</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> staffs <span class="token keyword">add</span> <span class="token keyword">index</span> idx_staffs_nameAgePos<span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>pos<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="优化一-全值匹配" tabindex="-1"><a class="header-anchor" href="#优化一-全值匹配" aria-hidden="true">#</a> 优化一：全值匹配</h4>
<p>条件字段与索引字段全值匹配</p>
<p>条件字段的顺序和索引的字段顺序相同，且不能略过前面的索引，否则索引失效。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006214908963.png" alt="image-20221006214908963" tabindex="0" loading="lazy"><figcaption>image-20221006214908963</figcaption></figure>
<figure><img src="@source/DataBase/MySQL/image-20221006215142556.png" alt="image-20221006215142556" tabindex="0" loading="lazy"><figcaption>image-20221006215142556</figcaption></figure>
<h4 id="优化二-最佳左前缀法则" tabindex="-1"><a class="header-anchor" href="#优化二-最佳左前缀法则" aria-hidden="true">#</a> 优化二：最佳左前缀法则</h4>
<p>​		如果索引了多列，要遵守最左前缀法则。指的是查询从索引的最左前列开始并且不跳过索引中的列。</p>
<p>​		最左边的索引必须有。中间的索引不能断。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006220822455.png" alt="image-20221006220822455" tabindex="0" loading="lazy"><figcaption>image-20221006220822455</figcaption></figure>
<h4 id="优化三-不在索引列上做任何操作" tabindex="-1"><a class="header-anchor" href="#优化三-不在索引列上做任何操作" aria-hidden="true">#</a> 优化三：不在索引列上做任何操作</h4>
<p>​		不在索引列上做任何操作（计算、函数、(自动or手动)类型转换），会导致索引失效而转向全表扫描。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006220738234.png" alt="image-20221006220738234" tabindex="0" loading="lazy"><figcaption>image-20221006220738234</figcaption></figure>
<h4 id="优化四-存储引擎不能使用索引中范围条件右边的列" tabindex="-1"><a class="header-anchor" href="#优化四-存储引擎不能使用索引中范围条件右边的列" aria-hidden="true">#</a> 优化四：存储引擎不能使用索引中范围条件右边的列</h4>
<p>​		name 和 age 本身也用到了索引。其中 age 是排序用到了索引，name 是检索用到的。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006221117759.png" alt="image-20221006221117759" tabindex="0" loading="lazy"><figcaption>image-20221006221117759</figcaption></figure>
<h4 id="优化五-尽量使用覆盖索引" tabindex="-1"><a class="header-anchor" href="#优化五-尽量使用覆盖索引" aria-hidden="true">#</a> 优化五：尽量使用覆盖索引</h4>
<p>尽量使用覆盖索引（只访问索引的查询(索引列和查询列一致），减少select *。</p>
<p><strong>使用覆盖索引，占用的字节数更小，type级别更高。</strong></p>
<figure><img src="@source/DataBase/MySQL/image-20221006221525315.png" alt="image-20221006221525315" tabindex="0" loading="lazy"><figcaption>image-20221006221525315</figcaption></figure>
<h4 id="优化六-和-导致索引失效" tabindex="-1"><a class="header-anchor" href="#优化六-和-导致索引失效" aria-hidden="true">#</a> 优化六：!= 和 &lt;&gt;导致索引失效</h4>
<p>MySQL在使用不等于（!=或者&lt;&gt;）的时候无法使用索引会导致全表扫描。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006221655336.png" alt="image-20221006221655336" tabindex="0" loading="lazy"><figcaption>image-20221006221655336</figcaption></figure>
<h4 id="优化七-is-null-is-not-null也无法使用索引" tabindex="-1"><a class="header-anchor" href="#优化七-is-null-is-not-null也无法使用索引" aria-hidden="true">#</a> 优化七：is null，is not null也无法使用索引</h4>
<p>【为保证索引不失效，建议使用默认值】</p>
<figure><img src="@source/DataBase/MySQL/image-20221006221824011.png" alt="image-20221006221824011" tabindex="0" loading="lazy"><figcaption>image-20221006221824011</figcaption></figure>
<h4 id="优化八-like-以通配符开头-ab" tabindex="-1"><a class="header-anchor" href="#优化八-like-以通配符开头-ab" aria-hidden="true">#</a> 优化八：like 以通配符开头（%ab...'）</h4>
<p>like 以通配符开头（%ab...'），mysq|索引失效会变成全表扫描的操作。</p>
<figure><img src="@source/DataBase/MySQL/image-20221006222003661.png" alt="image-20221006222003661" tabindex="0" loading="lazy"><figcaption>image-20221006222003661</figcaption></figure>
<p>July%是范围匹配。</p>
<p>问题：解决 like  '%字符串%'  时索引不被使用的方法，<strong>查询字段采用索引</strong>。</p>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> tbl_user<span class="token punctuation">(</span>
id <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
age <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
email <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
<span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token keyword">engine</span><span class="token operator">=</span><span class="token keyword">innodb</span> <span class="token keyword">auto_increment</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">default</span> <span class="token keyword">charset</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> tbl_user<span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>email<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">"1aa1"</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">,</span><span class="token string">'b@163.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> tbl_user<span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>email<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">"2aa2"</span><span class="token punctuation">,</span><span class="token number">222</span><span class="token punctuation">,</span><span class="token string">'a@163.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> tbl_user<span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>email<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">"3aa3"</span><span class="token punctuation">,</span><span class="token number">256</span><span class="token punctuation">,</span><span class="token string">'c@163.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> tbl_user<span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>email<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">"4aa4"</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">,</span><span class="token string">'d@163.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>建立索引：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> tbl_user <span class="token keyword">add</span> <span class="token keyword">index</span> idx_user_nameAge <span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/DataBase/MySQL/image-20221006222148674.png" alt="image-20221006222148674" tabindex="0" loading="lazy"><figcaption>image-20221006222148674</figcaption></figure>
<h4 id="优化九-字符串不加单引号索引失效" tabindex="-1"><a class="header-anchor" href="#优化九-字符串不加单引号索引失效" aria-hidden="true">#</a> 优化九：字符串不加单引号索引失效</h4>
<p>字符串不加单引号索引失效，对于varchar类型，必须加引号。如 <strong>'2000' = 2000。</strong></p>
<figure><img src="@source/DataBase/MySQL/image-20221006222518353.png" alt="image-20221006222518353" tabindex="0" loading="lazy"><figcaption>image-20221006222518353</figcaption></figure>
<h4 id="优化十-少用or-用它来连接时会索引失效" tabindex="-1"><a class="header-anchor" href="#优化十-少用or-用它来连接时会索引失效" aria-hidden="true">#</a> 优化十：少用or，用它来连接时会索引失效</h4>
<figure><img src="@source/DataBase/MySQL/image-20221006222646312.png" alt="image-20221006222646312" tabindex="0" loading="lazy"><figcaption>image-20221006222646312</figcaption></figure>
<p>示例：索引是否被使用？</p>
<figure><img src="@source/DataBase/MySQL/image-20221006222718225.png" alt="image-20221006222718225" tabindex="0" loading="lazy"><figcaption>image-20221006222718225</figcaption></figure>
<h4 id="示例-索引失效的情况" tabindex="-1"><a class="header-anchor" href="#示例-索引失效的情况" aria-hidden="true">#</a> 示例：索引失效的情况</h4>
<p>数据准备：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> test03<span class="token punctuation">(</span>
id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
c1 <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
c2 <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
c3 <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
c4 <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
c5 <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> test03<span class="token punctuation">(</span>c1<span class="token punctuation">,</span>c2<span class="token punctuation">,</span>c3<span class="token punctuation">,</span>c4<span class="token punctuation">,</span>c5<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'a3'</span><span class="token punctuation">,</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token string">'a5'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> test03<span class="token punctuation">(</span>c1<span class="token punctuation">,</span>c2<span class="token punctuation">,</span>c3<span class="token punctuation">,</span>c4<span class="token punctuation">,</span>c5<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'b1'</span><span class="token punctuation">,</span><span class="token string">'b2'</span><span class="token punctuation">,</span><span class="token string">'b3'</span><span class="token punctuation">,</span><span class="token string">'b4'</span><span class="token punctuation">,</span><span class="token string">'b5'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> test03<span class="token punctuation">(</span>c1<span class="token punctuation">,</span>c2<span class="token punctuation">,</span>c3<span class="token punctuation">,</span>c4<span class="token punctuation">,</span>c5<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'c1'</span><span class="token punctuation">,</span><span class="token string">'c2'</span><span class="token punctuation">,</span><span class="token string">'c3'</span><span class="token punctuation">,</span><span class="token string">'c4'</span><span class="token punctuation">,</span><span class="token string">'c5'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> test03<span class="token punctuation">(</span>c1<span class="token punctuation">,</span>c2<span class="token punctuation">,</span>c3<span class="token punctuation">,</span>c4<span class="token punctuation">,</span>c5<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'d1'</span><span class="token punctuation">,</span><span class="token string">'d2'</span><span class="token punctuation">,</span><span class="token string">'d3'</span><span class="token punctuation">,</span><span class="token string">'d4'</span><span class="token punctuation">,</span><span class="token string">'d5'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> test03<span class="token punctuation">(</span>c1<span class="token punctuation">,</span>c2<span class="token punctuation">,</span>c3<span class="token punctuation">,</span>c4<span class="token punctuation">,</span>c5<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'e1'</span><span class="token punctuation">,</span><span class="token string">'e2'</span><span class="token punctuation">,</span><span class="token string">'e3'</span><span class="token punctuation">,</span><span class="token string">'e4'</span><span class="token punctuation">,</span><span class="token string">'e5'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> test03<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">index</span> idx_test03_c1234 <span class="token keyword">on</span> test03<span class="token punctuation">(</span>c1<span class="token punctuation">,</span>c2<span class="token punctuation">,</span>c3<span class="token punctuation">,</span>c4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">show</span> <span class="token keyword">index</span> <span class="token keyword">from</span> test03<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/DataBase/MySQL/image-20221006223209912.png" alt="image-20221006223209912" tabindex="0" loading="lazy"><figcaption>image-20221006223209912</figcaption></figure>
<figure><img src="@source/DataBase/MySQL/image-20221006223342768.png" alt="image-20221006223342768" tabindex="0" loading="lazy"><figcaption>image-20221006223342768</figcaption></figure>
<figure><img src="@source/DataBase/MySQL/image-20221006224016041.png" alt="image-20221006224016041" tabindex="0" loading="lazy"><figcaption>image-20221006224016041</figcaption></figure>
<figure><img src="@source/DataBase/MySQL/image-20221006224706809.png" alt="image-20221006224706809" tabindex="0" loading="lazy"><figcaption>image-20221006224706809</figcaption></figure>
<figure><img src="@source/DataBase/MySQL/image-20221006225059667.png" alt="image-20221006225059667" tabindex="0" loading="lazy"><figcaption>image-20221006225059667</figcaption></figure>
<p>注意报错：</p>
<figure><img src="@source/DataBase/MySQL/image-20221006225325685.png" alt="image-20221006225325685" tabindex="0" loading="lazy"><figcaption>image-20221006225325685</figcaption></figure>
<p>解决：<a href="https://blog.csdn.net/weixin_41948075/article/details/123656114" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_41948075/article/details/123656114<ExternalLinkIcon/></a></p>
<h4 id="一般性建议" tabindex="-1"><a class="header-anchor" href="#一般性建议" aria-hidden="true">#</a> 一般性建议</h4>
<ol>
<li>
<p>对于单键索引，尽量选择针对当前query过滤性更好的索引。</p>
</li>
<li>
<p>在选择组合索引的时候，当前Query中过滤性最好的字段在索引字段顺序中，位置越靠前越好。</p>
</li>
<li>
<p>在选择组合索引的时候，尽量选择可以能够包含当前query中的where字句中更多字段的索引。</p>
</li>
<li>
<p>尽可能通过分析统计信息和调整query的写法来达到选择合适索引的目的。</p>
</li>
</ol>
<h1 id="查询截取分析" tabindex="-1"><a class="header-anchor" href="#查询截取分析" aria-hidden="true">#</a> 查询截取分析</h1>
<p>针对生产环境的慢SQL：</p>
<ol>
<li>
<p>观察，至少跑1天，看看生产的慢SQL情况。</p>
</li>
<li>
<p>开启慢查询日志，设置阙值，比如超过5秒钟的就是慢SQL， 并将它抓取出来。</p>
</li>
<li>
<p>explain+慢SQL分析。</p>
</li>
<li>
<p>show profile查询SQL在Mysq1服务器里面的执行细节和生命周期情况。</p>
</li>
<li>
<p>SQL数据库服务器的参数调优。</p>
</li>
</ol>
<h2 id="查询优化" tabindex="-1"><a class="header-anchor" href="#查询优化" aria-hidden="true">#</a> 查询优化</h2>
<h3 id="小表驱动大表-in-和-exists" tabindex="-1"><a class="header-anchor" href="#小表驱动大表-in-和-exists" aria-hidden="true">#</a> 小表驱动大表（in 和 exists）</h3>
<p><strong>（尽可能少的连接，先&quot;遍历&quot;大表，会产生更多的资源消耗）</strong></p>
<p><strong>示例</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 优化原则;小的数据集驱动大的数据集</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> A <span class="token keyword">where</span> id <span class="token punctuation">(</span><span class="token keyword">select</span> id <span class="token keyword">from</span> B<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 等价于</span>
<span class="token keyword">for</span> <span class="token keyword">select</span> id <span class="token keyword">from</span> B
	<span class="token keyword">for</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> A <span class="token keyword">where</span> A<span class="token punctuation">.</span>id <span class="token operator">=</span> B<span class="token punctuation">.</span>id
<span class="token comment">-- 当B表的数据集小于A表的数据集时，in 优先于 exists</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> A <span class="token keyword">where</span> <span class="token keyword">exists</span><span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token number">1</span> <span class="token keyword">from</span> B <span class="token keyword">where</span> A<span class="token punctuation">.</span>id <span class="token operator">=</span> B<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 等价于</span>
<span class="token keyword">for</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> A 
	<span class="token keyword">for</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> B <span class="token keyword">where</span> B<span class="token punctuation">.</span>id <span class="token operator">=</span> A<span class="token punctuation">.</span>id
<span class="token comment">-- 当B表的数据集大于A表的数据集时，exists 优先于 in</span>
<span class="token comment">-- 注意：A表与B表的字段应该建立索引</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当B表的数据集小于A表的数据集时，用 in 优于 exists。</strong></p>
<p><strong>当B表的数据集大于A表的数据集时，用 exists 由于 in。</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tbl_dept<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----+----------+----------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> deptName <span class="token operator">|</span> locAddr  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+----------+----------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> RD       <span class="token operator">|</span> GanSu    <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span> HR       <span class="token operator">|</span> XiAN     <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">3</span> <span class="token operator">|</span> MK       <span class="token operator">|</span> BeiJing  <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">4</span> <span class="token operator">|</span> MIS      <span class="token operator">|</span> ShangHai <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">5</span> <span class="token operator">|</span> FD       <span class="token operator">|</span> ShenZhen <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+----------+----------+</span>
<span class="token number">5</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">></span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tbl_emp<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----+------+--------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> NAME <span class="token operator">|</span> deptId <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+--------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> E1   <span class="token operator">|</span>      <span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span> E2   <span class="token operator">|</span>      <span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">3</span> <span class="token operator">|</span> E3   <span class="token operator">|</span>      <span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">4</span> <span class="token operator">|</span> EA   <span class="token operator">|</span>      <span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">5</span> <span class="token operator">|</span> EB   <span class="token operator">|</span>      <span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">6</span> <span class="token operator">|</span> W1   <span class="token operator">|</span>      <span class="token number">3</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">7</span> <span class="token operator">|</span> W2   <span class="token operator">|</span>      <span class="token number">4</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">8</span> <span class="token operator">|</span> W3   <span class="token operator">|</span>     <span class="token number">51</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+--------+</span>
<span class="token number">8</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
mysql<span class="token operator">></span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tbl_dept d <span class="token keyword">where</span> <span class="token keyword">exists</span><span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token number">1</span> <span class="token keyword">from</span> tbl_emp e <span class="token keyword">where</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span> e<span class="token punctuation">.</span>deptId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----+----------+----------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> deptName <span class="token operator">|</span> locAddr  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+----------+----------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> RD       <span class="token operator">|</span> GanSu    <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span> HR       <span class="token operator">|</span> XiAN     <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">3</span> <span class="token operator">|</span> MK       <span class="token operator">|</span> BeiJing  <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">4</span> <span class="token operator">|</span> MIS      <span class="token operator">|</span> ShangHai <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+----------+----------+</span>
<span class="token number">4</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">></span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tbl_emp e <span class="token keyword">where</span> e<span class="token punctuation">.</span>deptId <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token keyword">select</span> id <span class="token keyword">from</span> tbl_dept<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----+------+--------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> NAME <span class="token operator">|</span> deptId <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+--------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> E1   <span class="token operator">|</span>      <span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span> E2   <span class="token operator">|</span>      <span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">3</span> <span class="token operator">|</span> E3   <span class="token operator">|</span>      <span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">4</span> <span class="token operator">|</span> EA   <span class="token operator">|</span>      <span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">5</span> <span class="token operator">|</span> EB   <span class="token operator">|</span>      <span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">6</span> <span class="token operator">|</span> W1   <span class="token operator">|</span>      <span class="token number">3</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">7</span> <span class="token operator">|</span> W2   <span class="token operator">|</span>      <span class="token number">4</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+--------+</span>
<span class="token number">7</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>in 和 exists 的区别</strong></p>
<p><strong>EXISTS</strong></p>
<p><strong>SELECT ... FROM table WHERE EXISTS (subquery)</strong></p>
<p>可以理解为：将主查询的数据，放到子查询中做条件验证，根据验证结果(TRUE或FALSE)来决定主查询的数据结果是否得以保留。</p>
<p><strong>EXISTS (subquery)只返回TRUE或FALSE, 因此子查询中的SELECT * 也可以是SELECT 1或select 'X',</strong> 官方说法是实际执行时会忽略SELECT清单，因此没有。</p>
<p><strong>区别</strong></p>
<ol>
<li>
<p>EXISTS子查询的实际执行过程可能经过了优化而不是我们理解上的逐条对比，如果担忧效率问题，可进行实际检验以确定是否有效率问题。</p>
</li>
<li>
<p>EXISTS子查询往往也可以用条件表达式、其他子查询或者JOIN来替代，何种最优需要具体问题具体分析。</p>
</li>
</ol>
<h3 id="order-by关键字优化" tabindex="-1"><a class="header-anchor" href="#order-by关键字优化" aria-hidden="true">#</a> ORDER BY关键字优化</h3>
<ol>
<li>ORDER BY子句尽可能使用 Index 排序，避免使用 Using filesort 方式排序。</li>
</ol>
<figure><img src="@source/DataBase/MySQL/image-20221006231402679.png" alt="image-20221006231402679" tabindex="0" loading="lazy"><figcaption>image-20221006231402679</figcaption></figure>
<figure><img src="@source/DataBase/MySQL/image-20221006231427799.png" alt="image-20221006231427799" tabindex="0" loading="lazy"><figcaption>image-20221006231427799</figcaption></figure>
<ol start="2">
<li>
<p>尽可能在索引列上完成排序操作，遵照索引建的最佳左前缀。</p>
</li>
<li>
<p>如果不在索引列上，filesort有两种算法：mysql就要启动双路排序和单路排序。</p>
</li>
</ol>
<h3 id="filesort" tabindex="-1"><a class="header-anchor" href="#filesort" aria-hidden="true">#</a> filesort</h3>
<p>MySQL支持二种方式的排序，filesort 和Index，index效率高。它指MySQL扫描索引本身完成排序。filesort 方式效率较低。</p>
<p>ORDER BY满足两情况，会使用Index方式排序：</p>
<ul>
<li>ORDER BY语句使用索引最左前列。</li>
<li>使用 where 子句与 order by 子句条件列组合满足索引最左前列。</li>
</ul>
<h3 id="group-by关键字优化" tabindex="-1"><a class="header-anchor" href="#group-by关键字优化" aria-hidden="true">#</a> group by关键字优化</h3>
<ol>
<li>
<p>group by实质是先排序后进行分组，遵照索引建的最佳左前缀</p>
</li>
<li>
<p>当无法使用索引列，增大max_length_for_sort_data参数的设置 + 增大sort_buffer_size参数的设置</p>
</li>
<li>
<p>where 高于 having, 能写在 where 限定的条件就不要去 having 限定了。</p>
</li>
</ol>
<h2 id="慢查询日志" tabindex="-1"><a class="header-anchor" href="#慢查询日志" aria-hidden="true">#</a> 慢查询日志</h2>
<h3 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h3>
<ol>
<li>
<p>MySQL的慢查询日志是 MySQL 提供的一种日志记录，它用来记录在 MySQL 中响应时间超过阀值的语句，具体指运行时间超过 long_query_time 值的 SQL，则会被记录到慢查询日志中。</p>
</li>
<li>
<p>具体指运行时间超过 long_query_time 值的SQL，则会被记录到慢查询日志中。long_query_time 的默认值为10，意思是运行10秒以上的语句。</p>
</li>
<li>
<p>由它来查看哪些SQL超出了我们的最大忍耐时间值，比如一条sq|执行超过5秒钟，我们就算慢SQL，希望能收集超过5秒的 sql，结合之前 explain 进行全面分析。</p>
</li>
</ol>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<p>默认情况下，MySQL数据库没有开启慢查询日志，需要我们手动来设置这个参数。</p>
<p>当然，如果不是调优需要的话，一般不建议启动该参数，因为开启慢查询日志会或多或少带来一定的性能影响。<strong>慢查询日志支持将日志记录写入文件。</strong></p>
<h4 id="查看是否开启以及如何开启" tabindex="-1"><a class="header-anchor" href="#查看是否开启以及如何开启" aria-hidden="true">#</a> 查看是否开启以及如何开启</h4>
<p>默认：<strong>show variables like &quot;%slow_query_log%&quot;;</strong></p>
<p>默认情况下 slow_query_log 的值为OFF，表示慢查询日志是禁用的，可以通过设置slow_ query log的值来开启。</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; show variables like '%slow_query_log%';
+---------------------+------------------------------------------+
| Variable_name       | Value                                    |
+---------------------+------------------------------------------+
| slow_query_log      | OFF                                      |
| slow_query_log_file | /usr/local/mysql/data/localhost-slow.log |
+---------------------+------------------------------------------+
2 rows in set (0.02 sec)

mysql&gt; set global slow_query_log = 1;
Query OK, 0 rows affected (0.01 sec)

mysql&gt; show variables like '%slow_query_log%';
+---------------------+------------------------------------------+
| Variable_name       | Value                                    |
+---------------------+------------------------------------------+
| slow_query_log      | ON                                       |
| slow_query_log_file | /usr/local/mysql/data/localhost-slow.log |
+---------------------+------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 set global slow_query_log=1 开启了慢查询日志<strong>只对当前数据库生效</strong>，如果MySQL重启后则会失效。</p>
<p><strong>如果要永久生效，就必须修改配置文件my.cnf (其它系统变量也是如此)</strong></p>
<p>修改 my.cnf 文件，[mysqld] 下增加或修改参数。</p>
<p>**slow_query_log **和 <strong>slow_query_log_file</strong>后，然后重启MySQL服务器。即将如下两行配置进my.cnf文件。</p>
<p><strong>slow_query_log=1</strong></p>
<p><strong>slow_query_log_file=/var/lib/mysql/localhost-slow.log 或者</strong></p>
<p><strong>slow_query_log_file=/usr/local/mysql/data/localhost-slow.log</strong></p>
<p>关于慢查询的参数<strong>slow_query_log_file</strong>，它指定慢查询日志文件的存放路径，系统默认会给一个缺省的文件<strong>localhost-slow.log</strong> （如果没有指定参数<strong>slow_query_log_file</strong>的话）。</p>
<h4 id="设置阈值时间" tabindex="-1"><a class="header-anchor" href="#设置阈值时间" aria-hidden="true">#</a> 设置阈值时间</h4>
<p>这个是由参数 long_query_time 控制， 默认情况下**long_query_time **的值为10秒。</p>
<p>命令：<strong>SHOW VARIABLES LIKE &quot;%long_query_time%&quot;;</strong></p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; show variables like '%long_query_time%';
+-----------------+-----------+
| Variable_name   | Value     |
+-----------------+-----------+
| long_query_time | 10.000000 |
+-----------------+-----------+
1 row in set (0.01 sec)

mysql&gt; set global long_query_time = 3;
Query OK, 0 rows affected (0.00 sec)

mysql&gt; show variables like '%long_query_time%';
+-----------------+-----------+
| Variable_name   | Value     |
+-----------------+-----------+
| long_query_time | 10.000000 |
+-----------------+-----------+
1 row in set (0.00 sec)

mysql&gt; show global variables like '%long_query_time%';
+-----------------+----------+
| Variable_name   | Value    |
+-----------------+----------+
| long_query_time | 3.000000 |
+-----------------+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用命令修改，也可以在 my.cnf 参数里面修改。</p>
<p>假如运行时间正好等于 long_query_time 的情况，并不会被记录下来。也就是说，在 MySQL 源码里是判断大于long_query_time，而非大于等于。</p>
<p><strong>设置后没有改变：需要重新连接或新开启一个会话才能看到修改的值。</strong></p>
<h4 id="慢查询示例" tabindex="-1"><a class="header-anchor" href="#慢查询示例" aria-hidden="true">#</a> 慢查询示例</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; select sleep(4);
+----------+
| sleep(4) |
+----------+
|        0 |
+----------+
1 row in set (4.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看慢查询日志：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat -n /usr/local/mysql/data/localhost-slow.log</span>
     <span class="token number">1</span>  /usr/local/mysql/bin/mysqld, Version: <span class="token number">5.7</span>.36 <span class="token punctuation">(</span>MySQL Community Server <span class="token punctuation">(</span>GPL<span class="token punctuation">))</span>. started with:
     <span class="token number">2</span>  Tcp port: <span class="token number">3306</span>  Unix socket: /tmp/mysql.sock
     <span class="token number">3</span>  Time                 Id Command    Argument
     <span class="token number">4</span>  <span class="token comment"># Time: 2022-04-29T10:19:17.035870Z</span>
     <span class="token number">5</span>  <span class="token comment"># User@Host: root[root] @ localhost []  Id:     4</span>
     <span class="token number">6</span>  <span class="token comment"># Query_time: 4.001412  Lock_time: 0.000000 Rows_sent: 1  Rows_examined: 0</span>
     <span class="token number">7</span>  use index_db<span class="token punctuation">;</span>
     <span class="token number">8</span>  SET <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">1651227557</span><span class="token punctuation">;</span>
     <span class="token number">9</span>  <span class="token keyword">select</span> sleep<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token number">10</span>  <span class="token comment"># Time: 2022-04-29T10:20:27.102982Z</span>
    <span class="token number">11</span>  <span class="token comment"># User@Host: root[root] @ localhost []  Id:     4</span>
    <span class="token number">12</span>  <span class="token comment"># Query_time: 4.000828  Lock_time: 0.000000 Rows_sent: 1  Rows_examined: 0</span>
    <span class="token number">13</span>  SET <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">1651227627</span><span class="token punctuation">;</span>
    <span class="token number">14</span>  <span class="token keyword">select</span> sleep<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询系统中有多少条慢SQL：</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; show global status like '%Slow_queries%';
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| Slow_queries  | 2     |
+---------------+-------+
1 row in set (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="文件配置" tabindex="-1"><a class="header-anchor" href="#文件配置" aria-hidden="true">#</a> 文件配置</h4>
<p><strong>[mysqld]下配置：</strong></p>
<p><strong>slow_query_log=1;</strong></p>
<p><strong>slow_guery_log_file=/var/ib/mysql/localhost-slow.log</strong></p>
<p><strong># slow_guery_log_file=/usr/local/mysql/localhost-slow.log</strong></p>
<p><strong>long_query_time=3;</strong></p>
<p><strong>log_output=FILE</strong></p>
<h3 id="日志分析工具-mysqldumpslow" tabindex="-1"><a class="header-anchor" href="#日志分析工具-mysqldumpslow" aria-hidden="true">#</a> 日志分析工具 mysqldumpslow</h3>
<p><strong>在生产环境中，如果要手工分析日志，查找、分析SQL，显然是个体力活，MySQL提供了日志分析工具：mysqldumpslow。</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># mysqldumpslow: 未找到命令</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/mysql/bin/mysqldumpslow /usr/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看帮助信息</strong></p>
<p><strong>mysqldumpslow --help</strong></p>
<p><strong>s：是表示按照何种方式排序</strong></p>
<p><strong>c：访问次数</strong></p>
<p><strong>|：锁定时间</strong></p>
<p><strong>r：返回记录</strong></p>
<p><strong>t：查询时间</strong></p>
<p><strong>al：平均锁定时间</strong></p>
<p><strong>ar：平均返回记录数</strong></p>
<p><strong>at：平均查询时间</strong></p>
<p><strong>t：即为返回前面多少条的数据</strong></p>
<p><strong>g：后边搭配一个正则匹配模式，大小写不敏感的</strong></p>
<p><strong>得到返回记录集最多的10个SQL</strong></p>
<p>日志文件位置：</p>
<p>/var/ib/mysql/localhost-slow.log</p>
<p>或者</p>
<p>/usr/local/mysql/data/localhost-slow.log</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysqldumpslow -s r -t 10 /usr/local/mysql/data/localhost-slow.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>得到访问次数最多的10个SQL</strong></p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysqldumpslow -s c -t 10 /var/ib/mysq/localhost-slow.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>得到按照时间排序的前10条里面含有左连接的查询语句</strong></p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysqldumpslow -s t -t 10 -g &quot;left join&quot; /war/lib/mysql/localhost-slow.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>另外建议在使用这些命令时结合|和more 使用，否则有可能出现爆屏情况</strong></p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysqldumpslow -s r -t 10 /var/ib/mysql/localhost-slow.log | more
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="批量数据脚本" tabindex="-1"><a class="header-anchor" href="#批量数据脚本" aria-hidden="true">#</a> 批量数据脚本</h2>
<h3 id="准备数据" tabindex="-1"><a class="header-anchor" href="#准备数据" aria-hidden="true">#</a> 准备数据</h3>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>create table dept(
id int unsigned primary key auto_increment,
deptno mediumint unsigned not null default 0,
dname varchar(20) not null default '',
loc varchar(13) not null default ''
) engine=innodb default charset=utf8;

create table emp(
id int unsigned primary key auto_increment,
empno int,
ename varchar(20),
job varchar(20),
mgr varchar(20),
hiredate date,
sal double,
comm double,
deptno varchar(20))
engine=innodb default charset=utf8;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置参数-log-bin-trust-function-creators" tabindex="-1"><a class="header-anchor" href="#设置参数-log-bin-trust-function-creators" aria-hidden="true">#</a> 设置参数 log_bin_trust_function_creators</h3>
<p>创建函数，假如报错: This function has none of DETERMINIS......</p>
<p>由于开启过慢查询日志，因为我们开启了bin-log, 我们就必须为我们的function指定一个参数。</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>show variables like &quot;log_bin_trust_function_creators';

set global log_bin_trust_function_creators=1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#这样添加了参数以后，如果mysqld重启，上述参数又会消失，永久方法:</p>
<p>windows下：my.ini[mysqld] 加上 log_bin_trust_function_creators=1</p>
<p>linux下 ：/etc/my.cnf 下 my.cnf[mysqld] 加上 log_bin_trust_function_creators=1</p>
<h3 id="创建函数" tabindex="-1"><a class="header-anchor" href="#创建函数" aria-hidden="true">#</a> 创建函数</h3>
<h4 id="随机产生字符串" tabindex="-1"><a class="header-anchor" href="#随机产生字符串" aria-hidden="true">#</a> 随机产生字符串</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>DELIMITER $$
CREATE FUNCTION rand_string(n INT) RETURNS VARCHAR(255)
BEGIN
DECLARE chars_str VARCHAR(100) DEFAULT 'abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ';
DECLARE return_str VARCHAR(255) DEFAULT '';
DECLARE i INT DEFAULT 0;
WHILE i&lt;n DO 
SET return_str =CONCAT(return_str,SUBSTRING(chars_str,FLOOR(1+RAND()*52),1));
SET i=i+ 1;
END WHILE;
RETURN return_str;
END $$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="随机产生部门编号" tabindex="-1"><a class="header-anchor" href="#随机产生部门编号" aria-hidden="true">#</a> 随机产生部门编号</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>DELIMITER $$
CREATE FUNCTION rand_num( )
RETURNS INT(5)
BEGIN
DECLARE i INT DEFAULT 0;
SET i= FLOOR(100+RAND()*10); 
RETURN i;
END $$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除函数：drop function rand_string;</p>
<h3 id="创建存储过程" tabindex="-1"><a class="header-anchor" href="#创建存储过程" aria-hidden="true">#</a> 创建存储过程</h3>
<h4 id="往emp表中插入数据的存储过程" tabindex="-1"><a class="header-anchor" href="#往emp表中插入数据的存储过程" aria-hidden="true">#</a> 往emp表中插入数据的存储过程</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>DELIMITER $$
CREATE PROCEDURE insert_emp(IN START INT(10),IN max_num INT(10))
BEGIN
DECLARE i INT DEFAULT 0; 
#set autocommit =0把autocommit设置成0,不需要提交多次
SET autocommit = 0;
REPEAT
SET i=i + 1;
INSERT INTO emp (empno, ename,job ,mgr ,hiredate ,sal ,comm ,deptno ) VALUES ((START+i)
,rand_string(6),'SALESMAN' ,0001 ,CURDATE(),2000,400,rand_num());
UNTIL i= max_num
END REPEAT;
COMMIT;
END $$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="往dept表中插入数据的存储过程" tabindex="-1"><a class="header-anchor" href="#往dept表中插入数据的存储过程" aria-hidden="true">#</a> 往dept表中插入数据的存储过程</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>drop procedure insert_dept;
DELIMITER $$
CREATE PROCEDURE insert_dept(IN START INT(10),IN max_num INT(10))
BEGIN
DECLARE i INT DEFAULT 0;
SET autocommit = 0;
REPEAT
SET i=i+1;
INSERT INTO dept (deptno,dname,loc) VALUES ((START+i),rand_string(10),rand_string(8)) ;
UNTIL i = max_num
END REPEAT ;
COMMIT;
END $$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用存储过程" tabindex="-1"><a class="header-anchor" href="#调用存储过程" aria-hidden="true">#</a> 调用存储过程</h3>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>DELIMITER ;
CALL insert_dept(100,10);
#执行存储过程，往emp表添加50万条数据
DELIMITER ;
CALL insert_emp(10001,500000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="show-profile" tabindex="-1"><a class="header-anchor" href="#show-profile" aria-hidden="true">#</a> Show Profile</h2>
<p>定义：是mysql提供可以用来分析<strong>当前会话中语句执行的资源消耗情况</strong>，可以用于SQL的调优的测量。</p>
<p>官网：htp://dev.mysql.com/doc/refman/5.5/en/show-profile.html。</p>
<p>默认情况下，参数处于关闭状态，并保存最近15次的运行结果。</p>
<p><strong>分析步骤</strong></p>
<p>查看当前的mysql版本是否支持。</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>show variables like &quot;profiling%&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>默认关闭，使用前开启。</strong></p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>mysql&gt; show variables like &quot;profiling%&quot;;
+------------------------+-------+
| Variable_name          | Value |
+------------------------+-------+
| profiling              | OFF   |
| profiling_history_size | 15    |
+------------------------+-------+
2 rows in set (0.02 sec)
-- 使用set profiling=on开启
mysql&gt; set profiling=on;
Query OK, 0 rows affected, 1 warning (0.00 sec)

mysql&gt; show variables like &quot;profiling%&quot;;
+------------------------+-------+
| Variable_name          | Value |
+------------------------+-------+
| profiling              | ON    |
| profiling_history_size | 15    |
+------------------------+-------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行SQL。</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>select * from emp group by id%10 limit 150000;

select * from emp group by id%20 order by 5;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看结果，<strong>show profiles;</strong></p>
<p>分析步骤</p>
<p>诊断SQL，show profile cpu,block io for query [id]。上一步前面的问题SQL数字号码。</p>
<p>参数备注：</p>
<table>
<thead>
<tr>
<th><strong>ALL</strong></th>
<th><strong>显示所有的开销信息</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>BLOCK IO</strong></td>
<td>显示块IO相关开销</td>
</tr>
<tr>
<td><strong>CONTEXT SWITCHES</strong></td>
<td>上下文切换相关开销</td>
</tr>
<tr>
<td><strong>CPU</strong></td>
<td>显示CPU相关开销信息</td>
</tr>
<tr>
<td><strong>IPC</strong></td>
<td>显示发送和接收相关开销信息</td>
</tr>
<tr>
<td><strong>MEMORY</strong></td>
<td>显示内存相关开销信息</td>
</tr>
<tr>
<td><strong>PAGE FAULTS</strong></td>
<td>显示页面错误相关开销信息</td>
</tr>
<tr>
<td><strong>SOURCE</strong></td>
<td>显示和Source_function, Source_file，Source_line相关的开销信息</td>
</tr>
<tr>
<td><strong>SWAPS</strong></td>
<td>显示交换次数相关开销的信息</td>
</tr>
</tbody>
</table>
<p>日常开发需要注意的结论：</p>
<ol>
<li>
<p>converting HEAP to MyISAM   查询结果太大，内存都不够用了往磁盘上搬了。</p>
</li>
<li>
<p>Creating tmp table          创建临时表，拷贝数据到临时表，用完再删除。</p>
</li>
<li>
<p>Copying to tmp table on disk   把内存中临时表复制到磁盘，危险!</p>
</li>
<li>
<p>locked</p>
</li>
</ol>
<h2 id="全局查询日志" tabindex="-1"><a class="header-anchor" href="#全局查询日志" aria-hidden="true">#</a> 全局查询日志</h2>
<p><strong>永远不要在生产环境开启这个功能。</strong></p>
<p>配置启用编码启用</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>set global general_log=1;

set global log_output='TABLE';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此后，你所编写的sql语句，将会记录到mysq|库里的general log表，可以用下面的命令查看：</p>
<p>select * from mysql.general log;</p>
</div></template>


