<template><div><div align='center'><font size='70'><b>Zookeeper</b></font></div>
<h1 id="zookeeper-概述" tabindex="-1"><a class="header-anchor" href="#zookeeper-概述" aria-hidden="true">#</a> Zookeeper 概述</h1>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>Zookeeper 是一个开源的分布式的，为分布式框架提供协调服务的 Apache 项目。</p>
<p>官网：<a href="https://zookeeper.apache.org/" target="_blank" rel="noopener noreferrer">https://zookeeper.apache.org/<ExternalLinkIcon/></a></p>
<h2 id="zookeeper-工作机制" tabindex="-1"><a class="header-anchor" href="#zookeeper-工作机制" aria-hidden="true">#</a> Zookeeper 工作机制</h2>
<p>​		是一个基于观察者模式设计的分布式服务管理框架，它负责存储和管理大家都关心的数据，然后接受观察者的注册，一旦这些数据的状态发生变化，Zookeeper 就将负责通知已经在 Zookeeper 上注册的那些观察者做出相应的反应。</p>
<p>Zookeeper = 文件系统 + 通知机制</p>
<h2 id="zookeeper-特点" tabindex="-1"><a class="header-anchor" href="#zookeeper-特点" aria-hidden="true">#</a> Zookeeper 特点</h2>
<figure><img src="@source/Java/Zookeeper/image-20220927215643357.png" alt="image-20220927215643357" tabindex="0" loading="lazy"><figcaption>image-20220927215643357</figcaption></figure>
<ol>
<li>Zookeeper：一个领导者（Leader），多个跟随者（Follower）组成的集群。</li>
<li>集群中只要有半数以上节点存活，Zookeeper 集群就能正常服务。所以 Zookeeper 适合安装奇数台服务器。</li>
<li>全局数据一致：每个 Server 保存一份相同的数据副本，Client无论连接到哪个 Server，数据都是一致的。</li>
<li>更新请求顺序执行，来自同一个 Client 的更新请求按其发送顺序依次执行。</li>
<li>数据更新原子性，一次数据更新要么成功，要么失败。</li>
<li>实时性，在一定时间范围内，Client 能读到最新数据。</li>
</ol>
<h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h2>
<p>​		ZooKeeper 数据模型的结构与 Unix 文件系统很类似，整体上可以看作是一棵树，每个 节点称做一个 ZNode。每一个 ZNode 默认能够存储 1MB 的数据，每个 ZNode 都可以通过其路径唯一标识。</p>
<figure><img src="@source/Java/Zookeeper/image-20220927173947210.png" alt="image-20220927173947210" tabindex="0" loading="lazy"><figcaption>image-20220927173947210</figcaption></figure>
<h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2>
<p>提供的服务包括：统一命名服务、统一配置管理、统一集群管理、服务器节点动态上下线、软负载均衡等。</p>
<h3 id="统一命名服务" tabindex="-1"><a class="header-anchor" href="#统一命名服务" aria-hidden="true">#</a> 统一命名服务</h3>
<p>​		在分布式环境下，经常需要对应用 / 服务进行统一命名，便于识别。</p>
<h3 id="统一配置管理" tabindex="-1"><a class="header-anchor" href="#统一配置管理" aria-hidden="true">#</a> 统一配置管理</h3>
<p>分布式环境中，一般要求一个集群中，所有节点的配置信息是一致的，比如 Kafka 集群，对配置文件修改后，希望能够快速同步到各个节点上。</p>
<p>Zookeeper 可实现该功能，可以将配置信息写入 Zookeeper 的一个 Znode，各个客户端服务器监听这个 Znode，一 旦Znode中的数据被修改，ZooKeeper将通知各个客户端服务器。</p>
<figure><img src="@source/Java/Zookeeper/image-20220927175059036.png" alt="image-20220927175059036" tabindex="0" loading="lazy"><figcaption>image-20220927175059036</figcaption></figure>
<h3 id="统一集群管理" tabindex="-1"><a class="header-anchor" href="#统一集群管理" aria-hidden="true">#</a> 统一集群管理</h3>
<p>分布式环境中，实时掌握每个节点的状态是必要的，可根据节点实时状态做出一些调整。</p>
<p>ZooKeeper可以实现实时监控节点状态变化：</p>
<p>​	1. 可将节点信息写入ZooKeeper上的一个ZNode</p>
<p>​	2. 监听这个ZNode可获取它的实时状态变化</p>
<h3 id="服务器动态上下线" tabindex="-1"><a class="header-anchor" href="#服务器动态上下线" aria-hidden="true">#</a> 服务器动态上下线</h3>
<p>​		客户端能实时洞察到服务 器上下线的变化</p>
<figure><img src="@source/Java/Zookeeper/image-20220927175315238.png" alt="image-20220927175315238" tabindex="0" loading="lazy"><figcaption>image-20220927175315238</figcaption></figure>
<h3 id="软负载均衡" tabindex="-1"><a class="header-anchor" href="#软负载均衡" aria-hidden="true">#</a> 软负载均衡</h3>
<p>在 Zookeeper 中记录每台服务器的访问数，让访问数最少的服务器去处理最新的客户端请求</p>
<h1 id="zookeeper-本地安装" tabindex="-1"><a class="header-anchor" href="#zookeeper-本地安装" aria-hidden="true">#</a> Zookeeper 本地安装</h1>
<h2 id="安装说明" tabindex="-1"><a class="header-anchor" href="#安装说明" aria-hidden="true">#</a> 安装说明</h2>
<p>地址：<a href="https://zookeeper.apache.org/releases.html" target="_blank" rel="noopener noreferrer">https://zookeeper.apache.org/releases.html<ExternalLinkIcon/></a></p>
<p>下载安装包：apache-zookeeper-3.5.7-bin.tar.gz</p>
<p>安装准备：安装 JDK，解压至 /opt/zookeeper/，重命名文件夹名称</p>
<p>配置 Java 环境变量：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># java</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/opt/java/jdk1.8.0_131
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span>/opt/java/jdk1.8.0_131/jre
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:%JAVA_HOME%/lib:%JAVA_HOME%/lib
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>

<span class="token comment"># zookeeper</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ZOOKEEPER_HOME</span><span class="token operator">=</span>/opt/zookeeper/zookeeper-3.5.7
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$ZOOKEEPER_HOME</span>/bin:<span class="token environment constant">$PATH</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
<span class="token comment"># 或者修改 ~/.bash_profile， source ~/.bash_profile</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解压 Zookeeper：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root zookeeper<span class="token punctuation">]</span><span class="token comment"># ll zookeeper-3.5.7/</span>
总用量 <span class="token number">32</span>
drwxr-xr-x. <span class="token number">2</span>  <span class="token number">502</span> games   <span class="token number">232</span> <span class="token number">2</span>月  <span class="token number">10</span> <span class="token number">2020</span> bin
drwxr-xr-x. <span class="token number">2</span>  <span class="token number">502</span> games    <span class="token number">77</span> <span class="token number">2</span>月   <span class="token number">7</span> <span class="token number">2020</span> conf
drwxr-xr-x. <span class="token number">5</span>  <span class="token number">502</span> games  <span class="token number">4096</span> <span class="token number">2</span>月  <span class="token number">10</span> <span class="token number">2020</span> docs
drwxr-xr-x. <span class="token number">2</span> root root   <span class="token number">4096</span> <span class="token number">9</span>月  <span class="token number">27</span> <span class="token number">18</span>:40 lib
-rw-r--r--. <span class="token number">1</span>  <span class="token number">502</span> games <span class="token number">11358</span> <span class="token number">9</span>月  <span class="token number">13</span> <span class="token number">2018</span> LICENSE.txt
-rw-r--r--. <span class="token number">1</span>  <span class="token number">502</span> games   <span class="token number">432</span> <span class="token number">2</span>月  <span class="token number">10</span> <span class="token number">2020</span> NOTICE.txt
-rw-r--r--. <span class="token number">1</span>  <span class="token number">502</span> games  <span class="token number">1560</span> <span class="token number">2</span>月   <span class="token number">7</span> <span class="token number">2020</span> README.md
-rw-r--r--. <span class="token number">1</span>  <span class="token number">502</span> games  <span class="token number">1347</span> <span class="token number">2</span>月   <span class="token number">7</span> <span class="token number">2020</span> README_packaging.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改配置：将 conf 路径下 zoo_sample.cfg 修改为 zoo.cfg，并修改文件中 dataDir 的路径，一般设置为安装目录下的 zkData（mkdir  zkData）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root conf<span class="token punctuation">]</span><span class="token comment"># mv zoo_sample.cfg zoo.cfg</span>
<span class="token punctuation">[</span>root@root conf<span class="token punctuation">]</span><span class="token comment"># vim zoo.cfg</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># The number of milliseconds of each tick</span>
<span class="token assign-left variable">tickTime</span><span class="token operator">=</span><span class="token number">2000</span>
<span class="token comment"># The number of ticks that the initial</span>
<span class="token comment"># synchronization phase can take</span>
<span class="token assign-left variable">initLimit</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token comment"># The number of ticks that can pass between</span>
<span class="token comment"># sending a request and getting an acknowledgement</span>
<span class="token assign-left variable">syncLimit</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token comment"># the directory where the snapshot is stored.</span>
<span class="token comment"># do not use /tmp for storage, /tmp here is just</span>
<span class="token comment"># example sakes.</span>
<span class="token comment"># dataDir=/tmp/zookeeper</span>
<span class="token assign-left variable">dataDir</span><span class="token operator">=</span>/opt/zookeeper/zookeeper-3.5.7/zkData
<span class="token comment"># the port at which the clients will connect</span>
<span class="token assign-left variable">clientPort</span><span class="token operator">=</span><span class="token number">2181</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>操作 Zookeeper：</p>
<p>​		启动 Zookeeper：<a href="http://zkServer.sh" target="_blank" rel="noopener noreferrer">zkServer.sh<ExternalLinkIcon/></a>  start</p>
<p>​		查看进程是否启动：jps</p>
<p>​		查看状态：<a href="http://zkServer.sh" target="_blank" rel="noopener noreferrer">zkServer.sh<ExternalLinkIcon/></a>  status</p>
<p>​		启动客户端：<a href="http://zkCli.sh" target="_blank" rel="noopener noreferrer">zkCli.sh<ExternalLinkIcon/></a></p>
<p>​		退出客户端：quit</p>
<p>​		停止 Zookeeper：<a href="http://zkServer.sh" target="_blank" rel="noopener noreferrer">zkServer.sh<ExternalLinkIcon/></a>  stop</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root zookeeper-3.5.7<span class="token punctuation">]</span><span class="token comment"># cd bin</span>
<span class="token punctuation">[</span>root@root bin<span class="token punctuation">]</span><span class="token comment"># zkServer.sh start</span>
ZooKeeper JMX enabled by default
Using config: /opt/zookeeper/zookeeper-3.5.7/bin/<span class="token punctuation">..</span>/conf/zoo.cfg
Starting zookeeper <span class="token punctuation">..</span>. STARTED
<span class="token punctuation">[</span>root@root bin<span class="token punctuation">]</span><span class="token comment"># jps</span>
<span class="token number">5191</span> Jps
<span class="token number">5160</span> QuorumPeerMain
<span class="token punctuation">[</span>root@root bin<span class="token punctuation">]</span><span class="token comment"># zkServer.sh status</span>
ZooKeeper JMX enabled by default
Using config: /opt/zookeeper/zookeeper-3.5.7/bin/<span class="token punctuation">..</span>/conf/zoo.cfg
Client port found: <span class="token number">2181</span>. Client address: localhost.
Mode: standalone
<span class="token comment"># 退出</span>
<span class="token punctuation">[</span>root@root bin<span class="token punctuation">]</span><span class="token comment"># zkServer.sh stop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root bin<span class="token punctuation">]</span><span class="token comment"># zkCli.sh</span>
<span class="token comment">#.....</span>
<span class="token number">2022</span>-09-27 <span class="token number">19</span>:09:18,427 <span class="token punctuation">[</span>myid:localhost:2181<span class="token punctuation">]</span> - INFO  <span class="token punctuation">[</span>main-SendThread<span class="token punctuation">(</span>localhost:2181<span class="token punctuation">)</span>:ClientCnxn<span class="token variable">$SendThread</span>@1394<span class="token punctuation">]</span> - Session establishment complete on server localhost/127.0.0.1:2181, sessionid <span class="token operator">=</span> 0x10000be49f20002, negotiated <span class="token function">timeout</span> <span class="token operator">=</span> <span class="token number">30000</span>

WATCHER::

WatchedEvent state:SyncConnected type:None path:null
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token function">ls</span> /
<span class="token punctuation">[</span>zookeeper<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置参数解读" tabindex="-1"><a class="header-anchor" href="#配置参数解读" aria-hidden="true">#</a> 配置参数解读</h2>
<p>配置文件 zoo.cfg 中参数含义：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># The number of milliseconds of each tick</span>
<span class="token assign-left variable">tickTime</span><span class="token operator">=</span><span class="token number">2000</span>
<span class="token comment"># The number of ticks that the initial</span>
<span class="token comment"># synchronization phase can take</span>
<span class="token assign-left variable">initLimit</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token comment"># The number of ticks that can pass between</span>
<span class="token comment"># sending a request and getting an acknowledgement</span>
<span class="token assign-left variable">syncLimit</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token comment"># the directory where the snapshot is stored.</span>
<span class="token comment"># do not use /tmp for storage, /tmp here is just</span>
<span class="token comment"># example sakes.</span>
<span class="token comment"># dataDir=/tmp/zookeeper</span>
<span class="token assign-left variable">dataDir</span><span class="token operator">=</span>/opt/zookeeper/zookeeper-3.5.7/zkData
<span class="token comment"># the port at which the clients will connect</span>
<span class="token assign-left variable">clientPort</span><span class="token operator">=</span><span class="token number">2181</span>
<span class="token comment"># the maximum number of client connections.</span>
<span class="token comment"># increase this if you need to handle more clients</span>
<span class="token comment">#maxClientCnxns=60</span>
<span class="token comment">#</span>
<span class="token comment"># Be sure to read the maintenance section of the</span>
<span class="token comment"># administrator guide before turning on autopurge.</span>
<span class="token comment">#</span>
<span class="token comment"># http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance</span>
<span class="token comment">#</span>
<span class="token comment"># The number of snapshots to retain in dataDir</span>
<span class="token comment">#autopurge.snapRetainCount=3</span>
<span class="token comment"># Purge task interval in hours</span>
<span class="token comment"># Set to "0" to disable auto purge feature</span>
<span class="token comment">#autopurge.purgeInterval=1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tickTime = 2000：通信心跳时间，Zookeeper服务器与客户端心跳时间，单位毫秒</p>
<p>initLimit = 10：LF 初始通信时限，Leader和Follower初始连接时能容忍的最多心跳数**（tickTime的数量）**</p>
<p>syncLimit = 5：LF 同步通信时限，Leader和Follower之间通信时间如果超过syncLimit * tickTime，Leader认为Follwer死 						掉，从服务器列表中删除Follwer。</p>
<p>dataDir：保存Zookeeper中的数据，默认的tmp目录，容易被Linux系统定期删除，所以一般不用默认的tmp目录。</p>
<p>clientPort = 2181：客户端连接端口，通常不做修改。</p>
<p>maxClientCnxns=60：客户端最大连接数量</p>
<p>参数说明：<a href="https://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance" target="_blank" rel="noopener noreferrer">https://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance<ExternalLinkIcon/></a></p>
<h1 id="zookeeper-集群操作" tabindex="-1"><a class="header-anchor" href="#zookeeper-集群操作" aria-hidden="true">#</a> Zookeeper 集群操作</h1>
<h2 id="集群安装" tabindex="-1"><a class="header-anchor" href="#集群安装" aria-hidden="true">#</a> 集群安装</h2>
<ol>
<li>
<p>在三台机器上安装 Zookeeper</p>
</li>
<li>
<p>配置服务器编号：<strong>在安装目录配置 zkData，在 zkData 下创建 myid 文件，在文件中添加与 server 对应的编号</strong></p>
</li>
<li>
<p>分发 zookeeper 至其他机器</p>
</li>
<li>
<p>配置 zoo.cfg文件，增加如下配置：</p>
<p>server.1=192.168.100.100:2888:3888</p>
<p>server.2=192.168.100.110:2888:3888</p>
<p>server.3=192.168.100.120:2888:3888</p>
<p>配置参数说明：</p>
<p>server.A=B:C:D</p>
<p>A 表示集群模式下，配置一个文件 myid 中的机器编号，Zookeeper 启动时读取此文件，拿到里面的数据与 zoo.cfg 里	面的配置信息比较从而判断到底是哪个 server。</p>
<p>B 是服务器的地址</p>
<p>C 是这个服务器 Follower 与集群中的 Leader 服务器交换信息的端口</p>
<p>D 是用来执行选举时服务器相互通信的端口。</p>
</li>
<li>
<p>同步配置文件</p>
<blockquote>
<p>批量进行跨机器间的文件（含文件夹）传输</p>
<ul>
<li>创建脚本 <a href="http://xsync.sh" target="_blank" rel="noopener noreferrer">xsync.sh<ExternalLinkIcon/></a>，传入要传输的目录名</li>
<li>shell 脚本要求具有执行权限：chmod +x <a href="http://xsync.sh" target="_blank" rel="noopener noreferrer">xsync.sh<ExternalLinkIcon/></a></li>
<li>shell 脚本保存在 /usr/bin 这样的目录下，以使命令全局有效</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 判断参数个数</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-lt</span> <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"Not  Enough Arguments"</span>
	<span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
<span class="token comment"># 遍历所有主机</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">192.168</span>.100.100 <span class="token number">192.168</span>.100.110 <span class="token number">192.168</span>.100.120
<span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token variable">$host</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
	<span class="token comment"># 遍历所有目录</span>
	<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">$@</span>
	<span class="token keyword">do</span>
		<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
		<span class="token keyword">then</span>
			<span class="token comment"># 如果文件存在，获取父目录，</span>
			<span class="token comment"># pwd -P：如果目录是链接时，显示出实际路径，而非使用连接（link）路径。pwd防止传入相对路径</span>
			<span class="token comment"># cd -P:如果目录是链接时，切换到实际路径的目录。</span>
			<span class="token assign-left variable">pdir</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token parameter variable">-P</span> <span class="token punctuation">$(</span>dirname $file<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>
			<span class="token comment"># 获取文件名称</span>
			<span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $file<span class="token variable">)</span></span>
			<span class="token function">ssh</span> <span class="token variable">$host</span> <span class="token string">"mkdir -p <span class="token variable">$pdir</span>"</span>
			<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token variable">$pdir</span>/<span class="token variable">$filename</span> <span class="token variable">$host</span><span class="token builtin class-name">:</span><span class="token variable">$pdir</span>
		<span class="token keyword">else</span>
			<span class="token builtin class-name">echo</span> <span class="token variable">$file</span> not exist<span class="token operator">!</span>
		<span class="token keyword">fi</span>
	<span class="token keyword">done</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p><strong>同步完成后，修改配置文件内容。</strong></p>
</li>
<li>
<p>启动 Zookeeper 并查看状态</p>
<blockquote>
<p>启动 Zookeeper 集群，脚本位置：/home/xxxx/bin</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
<span class="token string">"start"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">192.168</span>.100.100 <span class="token number">192.168</span>.100.110 <span class="token number">192.168</span>.100.120
	<span class="token keyword">do</span>
		<span class="token builtin class-name">echo</span> <span class="token string">"========zookeeper <span class="token variable">$host</span> start========"</span>
		<span class="token function">ssh</span> <span class="token variable">$host</span> <span class="token string">"/opt/zookeeper/zookeeper-3.5.7/bin/zkServer.sh start"</span>
	<span class="token keyword">done</span>
<span class="token punctuation">}</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token string">"status"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">192.168</span>.100.100 <span class="token number">192.168</span>.100.110 <span class="token number">192.168</span>.100.120
	<span class="token keyword">do</span>
		<span class="token builtin class-name">echo</span> <span class="token string">"========zookeeper <span class="token variable">$host</span> status========"</span>
		<span class="token function">ssh</span> <span class="token variable">$host</span> <span class="token string">"/opt/zookeeper/zookeeper-3.5.7/bin/zkServer.sh status"</span>
	<span class="token keyword">done</span>
<span class="token punctuation">}</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token string">"stop"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">192.168</span>.100.100 <span class="token number">192.168</span>.100.110 <span class="token number">192.168</span>.100.120
	<span class="token keyword">do</span>
		<span class="token builtin class-name">echo</span> <span class="token string">"========zookeeper <span class="token variable">$host</span> stop========"</span>
		<span class="token function">ssh</span> <span class="token variable">$host</span> <span class="token string">"/opt/zookeeper/zookeeper-3.5.7/bin/zkServer.sh stop"</span>
	<span class="token keyword">done</span>
<span class="token punctuation">}</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置免密登陆：</p>
</blockquote>
</li>
</ol>
<blockquote>
<p>安装 sshpass 工具： yum -y install sshpass</p>
<p>修改：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
<span class="token string">"start"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">192.168</span>.100.100 <span class="token number">192.168</span>.100.110 <span class="token number">192.168</span>.100.120
	<span class="token keyword">do</span>
		<span class="token builtin class-name">echo</span> <span class="token string">"========zookeeper <span class="token variable">$host</span> start========"</span>
		sshpass <span class="token parameter variable">-p</span> root <span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no <span class="token variable">$host</span> <span class="token string">"/opt/zookeeper/zookeeper-3.5.7/bin/zkServer.sh start"</span>
	<span class="token keyword">done</span>
<span class="token punctuation">}</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token string">"status"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">192.168</span>.100.100 <span class="token number">192.168</span>.100.110 <span class="token number">192.168</span>.100.120
	<span class="token keyword">do</span>
		<span class="token builtin class-name">echo</span> <span class="token string">"========zookeeper <span class="token variable">$host</span> status========"</span>
		sshpass <span class="token parameter variable">-p</span> root <span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no <span class="token variable">$host</span> <span class="token string">"/opt/zookeeper/zookeeper-3.5.7/bin/zkServer.sh status"</span>
	<span class="token keyword">done</span>
<span class="token punctuation">}</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token string">"stop"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">192.168</span>.100.100 <span class="token number">192.168</span>.100.110 <span class="token number">192.168</span>.100.120
	<span class="token keyword">do</span>
		<span class="token builtin class-name">echo</span> <span class="token string">"========zookeeper <span class="token variable">$host</span> stop========"</span>
		sshpass <span class="token parameter variable">-p</span> root <span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no <span class="token variable">$host</span> <span class="token string">"/opt/zookeeper/zookeeper-3.5.7/bin/zkServer.sh stop"</span>
	<span class="token keyword">done</span>
<span class="token punctuation">}</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>linux 设置免密登陆：略</p>
</blockquote>
<pre><code>注意报错：

```shell
# 如果报错：Error: JAVA_HOME is not set and java could not be found in PATH.
# 单机启动没有问题，但集群启动报错
# 解决：在 zookeeper/bin/zkEnv.sh 头部手动添加 JAVA_HOME=/opt/java/jdk1.8.0_131
# 修改完成后，重新分发
```

```shell
[root@root zookeeper-3.5.7]# zkServer.sh status
ZooKeeper JMX enabled by default

```
</code></pre>
<p>Using config: /opt/zookeeper/zookeeper-3.5.7/bin/../conf/zoo.cfg<br>
Client port found: 2181. Client address: localhost.<br>
Error contacting service. It is probably not running.<br>
```</p>
<pre><code>原因：

  1. Leader 和 Follower 未选出，或无法连接

  2. 只启动不到一半数量的集群，或者防火墙未关闭

     防火墙：

     CentOS7：

     ```shell
     systemctl status firewalld.service
     systemctl stop firewalld.service	#关闭
     systemctl disabled firewalld.service	# 禁用
     ```

     CentOS6：

     ```shell
     service iptables status
     service iptables stop
     chkconfig iptables off
     ```

启动结果：
</code></pre>
<blockquote>
<p>查看 jps 进程，脚本 <a href="http://jpsall.sh" target="_blank" rel="noopener noreferrer">jpsall.sh<ExternalLinkIcon/></a></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">192.168</span>.100.100 <span class="token number">192.168</span>.100.110 <span class="token number">192.168</span>.100.120
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token variable">$host</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
    <span class="token function">ssh</span> <span class="token variable">$host</span>  <span class="token string">"source /etc/profile &amp;&amp; jps | grep -v jps "</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<pre><code>查看状态：

```shell
[root@root zookeeper-3.5.7]# zk.sh status
========zookeeper 192.168.100.100 status========
Warning: Permanently added '192.168.100.100' (ECDSA) to the list of known hosts.
root@192.168.100.100's password:
/usr/bin/java
ZooKeeper JMX enabled by default
Using config: /opt/zookeeper/zookeeper-3.5.7/bin/../conf/zoo.cfg
Client port found: 2181. Client address: localhost.
Mode: follower
========zookeeper 192.168.100.110 status========
Warning: Permanently added '192.168.100.110' (ECDSA) to the list of known hosts.
root@192.168.100.110's password:
/usr/bin/java
ZooKeeper JMX enabled by default
Using config: /opt/zookeeper/zookeeper-3.5.7/bin/../conf/zoo.cfg
Client port found: 2181. Client address: localhost.
Mode: leader
========zookeeper 192.168.100.120 status========
Warning: Permanently added '192.168.100.120' (ECDSA) to the list of known hosts.
root@192.168.100.120's password:
/usr/bin/java
ZooKeeper JMX enabled by default
Using config: /opt/zookeeper/zookeeper-3.5.7/bin/../conf/zoo.cfg
Client port found: 2181. Client address: localhost.
Mode: follower
[root@root zookeeper-3.5.7]#
```

说明：此时已经选举出 leader 和 follower
</code></pre>
<h2 id="选举机制" tabindex="-1"><a class="header-anchor" href="#选举机制" aria-hidden="true">#</a> 选举机制</h2>
<h3 id="第一次启动" tabindex="-1"><a class="header-anchor" href="#第一次启动" aria-hidden="true">#</a> 第一次启动</h3>
<figure><img src="@source/Java/Zookeeper/image-20220927215757995.png" alt="image-20220927215757995" tabindex="0" loading="lazy"><figcaption>image-20220927215757995</figcaption></figure>
<ol>
<li>
<p>服务器1启 动，发起一次选举。服务器1投自己一票。此时服务器1票数一票，不够半数以上（3票），选举无法完成，服务器1状态保持为 LOOKING。</p>
</li>
<li>
<p>服务器2启动，再发起一次选举。服务器1和2分别投自己一票并交换选票信息：此时服务器 1 发现服务器 2 的myid 比自己目前投票推举的（服务器1） 大，更改选票为推举服务器2。此时服务器1票数0票，服务器2票数2票，没有半数以上结果，选举无法完成，服务器1，2状态保持LOOKING。</p>
</li>
<li>
<p>服务器3启动，发起一次选举。此时服务器1和2都会更改选票为服务器3。此次投票结果：服务器1为0票，服务器2为 0 票，服务器3为3票。此时服务器3的票数已经超过半数，服务器3当选Leader。服务器1，2 更改状态为FOLLOWING，服务器3更改状态为 LEADING</p>
</li>
<li>
<p>服务器4启动，发起一次选举。此时服务器1，2，3已经不是LOOKING状态，不会更改选票信息。交换选票信息结果：服务器3为3票，服务器4为 1票。此时服务器4服从多数，更改选票信息为服务器3，并更改状态为 FOLLOWING；</p>
</li>
<li>
<p>服务器5启动，同服务器4一样作为follwer。</p>
</li>
</ol>
<p><strong>注意：客户端的每次写操作都有 事务id（zxid）</strong></p>
<p>SID：服务器ID。用来唯一标识一台 ZooKeeper 集群中的机器，每台机器不能重复，和myid一致。</p>
<p>ZXID：事务ID。ZXID是一个事务ID，用来标识一次服务器状态的变更。在某一时刻， 集群中的每台机器的 ZXID 值不一		定完全一 致，这和 ZooKeeper 服务器对于客户端 &quot;更新请求&quot; 的处理逻辑有关。</p>
<p>Epoch：每个Leader任期的代号。没有 Leader时同一轮投票过程中的逻辑时钟值是相同的。每投完一次票这个数据就会		增加。</p>
<h3 id="非第一次启动" tabindex="-1"><a class="header-anchor" href="#非第一次启动" aria-hidden="true">#</a> 非第一次启动</h3>
<figure><img src="@source/Java/Zookeeper/image-20220927220711206.png" alt="image-20220927220711206" tabindex="0" loading="lazy"><figcaption>image-20220927220711206</figcaption></figure>
<p>当 ZooKeeper 集群中的一台服务器出现以下两种情况之一时，就会开始进入 Leader 选举：</p>
<ul>
<li>
<p>服务器初始化启动</p>
</li>
<li>
<p>服务器运行期间无法和Leader保持连接，此时需要进行选举。</p>
</li>
</ul>
<p>而当一台机器进入Leader选举流程时，当前集群也可能会处于以下两种状态：</p>
<ol>
<li>
<p>集群中本来就已经存在一个Leader。 对于第一种已经存在Leader的情况，机器试图去选举Leader时，会被告知当前服务器的Leader信息，对于该机器来说，仅仅需要和Leader机器建立连 接，并进行状态同步即可。</p>
</li>
<li>
<p>集群中确实不存在Leader（宕机）。</p>
<p>假设ZooKeeper由5台服务器组成，SID分别为1、2、3、4、5，ZXID分别为8、8、8、7、7，并且此时SID为3的服务器是Leader。某一时刻， 3和5服务器出现故障，因此开始进行Leader选举。</p>
</li>
</ol>
<p>​												（EPOCH，ZXID，SID ）	 （EPOCH，ZXID，SID ）	（EPOCH，ZXID，SID ）</p>
<p>SID为1、2、4的机器投票情况：		(1, 8, 1)								（1，8，2） 							（1，7，4）</p>
<p>选举Leader规则： ① EPOCH大的直接胜出		② EPOCH相同，事务id大的胜出		③  事务id相同，服务器id大的胜出</p>
<h2 id="客户端命令行操作" tabindex="-1"><a class="header-anchor" href="#客户端命令行操作" aria-hidden="true">#</a> 客户端命令行操作</h2>
<h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>描述信息</th>
</tr>
</thead>
<tbody>
<tr>
<td>ls [-s] [-w] [-R] path</td>
<td>查看当前节点的 znode 节点，-w ：监听子节点变化，-s：附加层级信息</td>
</tr>
<tr>
<td>create [-s] [-e] [-c] [-t ttl] path [data] [acl]</td>
<td>创建节点，-s：含有序列，-e：临时节点（重启或超时消失）</td>
</tr>
<tr>
<td>get [-s] [-w] path</td>
<td>获得节点的值 [可监听] -w 监听节点内容变化 -s 附加次级信息</td>
</tr>
<tr>
<td>set [-s] [-v version] path data</td>
<td>设置节点的具体值</td>
</tr>
<tr>
<td>stat [-w] path</td>
<td>查看节点状态</td>
</tr>
<tr>
<td>delete [-v version] path</td>
<td>删除节点</td>
</tr>
<tr>
<td>deleteall path</td>
<td>递归删除节点</td>
</tr>
</tbody>
</table>
<h3 id="znode-节点数据信息" tabindex="-1"><a class="header-anchor" href="#znode-节点数据信息" aria-hidden="true">#</a> znode 节点数据信息</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">17</span><span class="token punctuation">]</span> <span class="token function">ls</span> /
<span class="token punctuation">[</span>zookeeper<span class="token punctuation">]</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">18</span><span class="token punctuation">]</span> <span class="token function">ls</span> <span class="token parameter variable">-s</span> /
<span class="token punctuation">[</span>zookeeper<span class="token punctuation">]</span>cZxid <span class="token operator">=</span> 0x0
ctime <span class="token operator">=</span> Thu Jan 01 08:00:00 CST <span class="token number">1970</span>
mZxid <span class="token operator">=</span> 0x0
mtime <span class="token operator">=</span> Thu Jan 01 08:00:00 CST <span class="token number">1970</span>
pZxid <span class="token operator">=</span> 0x0
cversion <span class="token operator">=</span> <span class="token parameter variable">-1</span>
dataVersion <span class="token operator">=</span> <span class="token number">0</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">0</span>
numChildren <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">19</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>czxid：创建节点的事务 zxid</li>
</ul>
<p>​		每次修改 ZooKeeper 状态都会产生一个 ZooKeeper 事务 ID。事务 ID 是 ZooKeeper 中所有修改总的次序。每次修		改都有唯一的 zxid，如果 zxid1 小于 zxid2，那么 zxid1 在 zxid2 之前发生。</p>
<ul>
<li>
<p>ctime：znode 被创建的毫秒数（从 1970 年开始）</p>
</li>
<li>
<p>mzxid：znode 最后更新的事务 zxid</p>
</li>
<li>
<p>mtime：znode 最后修改的毫秒数（从 1970 年开始）</p>
</li>
<li>
<p>pZxid：znode 最后更新的子节点 zxid</p>
</li>
<li>
<p>cversion：znode 子节点变化号，znode 子节点修改次数</p>
</li>
<li>
<p>dataversion：znode 数据变化号</p>
</li>
<li>
<p>aclVersion：znode 访问控制列表的变化号</p>
</li>
<li>
<p>ephemeralOwner：如果是临时节点，这个是 znode 拥有者的 session id。如果不是 临时节点则是 0。</p>
</li>
<li>
<p>dataLength：znode 的数据长度</p>
</li>
<li>
<p>numChildren：znode 子节点数量</p>
</li>
</ul>
<h3 id="节点类型-持久-短暂-有序号-无序号" tabindex="-1"><a class="header-anchor" href="#节点类型-持久-短暂-有序号-无序号" aria-hidden="true">#</a> 节点类型（持久/短暂/有序号/无序号）</h3>
<p>持久（Persistent）：客户端和服务器端断开连接后，创建的节点不删除</p>
<p>短暂（Ephemeral）：客户端和服务器端断开连接后，创建的节点自己删除</p>
<p>顺序：创建 znode 时设置顺序标识，znode 名称后会附加一个值，顺序号是一个单调递增的计数器，由父节点维护</p>
<p>​			在分布式系统中，顺序号可以被用于为所有的事件进行全局排序，这样客户端可以通过顺序号推断事件的顺序</p>
<ol>
<li>
<p>分别创建2个普通节点（永久节点 + 不带序号）</p>
<blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">14</span><span class="token punctuation">]</span> create /node01 <span class="token string">"server01"</span>
Created /node01
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">15</span><span class="token punctuation">]</span> create /node02/node03 <span class="token string">"server03"</span>
Node does not exist: /node02/node03
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">16</span><span class="token punctuation">]</span> create /node02 <span class="token string">"server02"</span>
Created /node02
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">17</span><span class="token punctuation">]</span> create /node02/node03 <span class="token string">"server03"</span>
Created /node02/node03
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">18</span><span class="token punctuation">]</span> create /node04
Created /node04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：创建节点时要赋值（否则为null），<strong>且不能创建多级节点</strong></p>
</blockquote>
</li>
<li>
<p>获取节点的值</p>
<blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">19</span><span class="token punctuation">]</span> get <span class="token parameter variable">-s</span> /node01
server01
cZxid <span class="token operator">=</span> 0x200000016
ctime <span class="token operator">=</span> Tue Sep <span class="token number">27</span> <span class="token number">23</span>:18:29 CST <span class="token number">2022</span>
mZxid <span class="token operator">=</span> 0x200000016
mtime <span class="token operator">=</span> Tue Sep <span class="token number">27</span> <span class="token number">23</span>:18:29 CST <span class="token number">2022</span>
pZxid <span class="token operator">=</span> 0x200000016
cversion <span class="token operator">=</span> <span class="token number">0</span>
dataVersion <span class="token operator">=</span> <span class="token number">0</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">8</span>
numChildren <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">20</span><span class="token punctuation">]</span> get <span class="token parameter variable">-s</span> /node02
server02
cZxid <span class="token operator">=</span> 0x200000018
ctime <span class="token operator">=</span> Tue Sep <span class="token number">27</span> <span class="token number">23</span>:18:56 CST <span class="token number">2022</span>
mZxid <span class="token operator">=</span> 0x200000018
mtime <span class="token operator">=</span> Tue Sep <span class="token number">27</span> <span class="token number">23</span>:18:56 CST <span class="token number">2022</span>
pZxid <span class="token operator">=</span> 0x200000019
cversion <span class="token operator">=</span> <span class="token number">1</span>
dataVersion <span class="token operator">=</span> <span class="token number">0</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">8</span>
numChildren <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">21</span><span class="token punctuation">]</span> get <span class="token parameter variable">-s</span> /node04
null
cZxid <span class="token operator">=</span> 0x20000001a
ctime <span class="token operator">=</span> Tue Sep <span class="token number">27</span> <span class="token number">23</span>:19:23 CST <span class="token number">2022</span>
mZxid <span class="token operator">=</span> 0x20000001a
mtime <span class="token operator">=</span> Tue Sep <span class="token number">27</span> <span class="token number">23</span>:19:23 CST <span class="token number">2022</span>
pZxid <span class="token operator">=</span> 0x20000001a
cversion <span class="token operator">=</span> <span class="token number">0</span>
dataVersion <span class="token operator">=</span> <span class="token number">0</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">0</span>
numChildren <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">22</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>创建带序号的节点（永久节点 + 带序号）</p>
<p>​	<strong>如果原来没有节点，序号从 0 开始依次递增。如果原节点下已有 2 个节点，则再排序时从 2 开始，以此类推。</strong></p>
<blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">10</span><span class="token punctuation">]</span> create /nodeA <span class="token string">"serverA"</span>
Created /nodeA
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">11</span><span class="token punctuation">]</span> create /nodeA/nodeB <span class="token string">"serverB"</span>
Created /nodeA/nodeB
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">12</span><span class="token punctuation">]</span> create <span class="token parameter variable">-s</span> /nodeA/nodeC <span class="token string">"serverC"</span>
Created /nodeA/nodeC0000000001
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">13</span><span class="token punctuation">]</span> create <span class="token parameter variable">-s</span> /nodeA/nodeD <span class="token string">"serverD"</span>
Created /nodeA/nodeD0000000002
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">14</span><span class="token punctuation">]</span> create <span class="token parameter variable">-s</span> /nodeA/nodeC <span class="token string">"serverCC"</span>
Created /nodeA/nodeC0000000003
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">15</span><span class="token punctuation">]</span> get <span class="token parameter variable">-s</span> /nodeA/nodeC
org.apache.zookeeper.KeeperException<span class="token variable">$NoNodeException</span><span class="token builtin class-name">:</span> KeeperErrorCode <span class="token operator">=</span> NoNode <span class="token keyword">for</span> /nodeA/nodeC
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">19</span><span class="token punctuation">]</span> <span class="token function">ls</span> /nodeA
<span class="token punctuation">[</span>nodeB, nodeC0000000001, nodeC0000000003, nodeD0000000002<span class="token punctuation">]</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">21</span><span class="token punctuation">]</span> create <span class="token parameter variable">-s</span> /nodeA/nodeB/nodeE <span class="token string">"serverE"</span>
Created /nodeA/nodeB/nodeE0000000000
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">20</span><span class="token punctuation">]</span> create <span class="token parameter variable">-s</span> /nodeE <span class="token string">"serverE"</span>
Created /nodeE0000000010
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>创建短暂节点（短暂节点 + 不带序号 / 带序号）</p>
<blockquote>
<p>退出当前客户端然后再重启客户端，短暂节点已经删除</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">6</span><span class="token punctuation">]</span> create <span class="token parameter variable">-s</span> /tempNode <span class="token string">"tempServer"</span>
Created /tempNode0000000012
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">7</span><span class="token punctuation">]</span> create <span class="token parameter variable">-s</span> <span class="token parameter variable">-e</span> /tempNode <span class="token string">"tempServer"</span>
Created /tempNode0000000013
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">]</span> quit

WATCHER::

WatchedEvent state:Closed type:None path:null
<span class="token number">2022</span>-09-27 <span class="token number">23</span>:45:59,221 <span class="token punctuation">[</span>myid:<span class="token punctuation">]</span> - INFO  <span class="token punctuation">[</span>main:ZooKeeper@1422<span class="token punctuation">]</span> - Session: 0x1000132016c0008 closed
<span class="token number">2022</span>-09-27 <span class="token number">23</span>:45:59,228 <span class="token punctuation">[</span>myid:<span class="token punctuation">]</span> - INFO  <span class="token punctuation">[</span>main-EventThread:ClientCnxn<span class="token variable">$EventThread</span>@524<span class="token punctuation">]</span> - EventThread shut down <span class="token keyword">for</span> session: 0x1000132016c0008
<span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># zkCli.sh</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">]</span> get <span class="token parameter variable">-s</span> /tempNode0000000013
org.apache.zookeeper.KeeperException<span class="token variable">$NoNodeException</span><span class="token builtin class-name">:</span> KeeperErrorCode <span class="token operator">=</span> NoNode <span class="token keyword">for</span> /tempNode0000000013
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>修改节点数据值</p>
<blockquote>
<p>dataVersion 会改变</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">]</span> get <span class="token parameter variable">-s</span> /nodeA
serverA
cZxid <span class="token operator">=</span> 0x200000025
ctime <span class="token operator">=</span> Tue Sep <span class="token number">27</span> <span class="token number">23</span>:27:02 CST <span class="token number">2022</span>
mZxid <span class="token operator">=</span> 0x200000025
mtime <span class="token operator">=</span> Tue Sep <span class="token number">27</span> <span class="token number">23</span>:27:02 CST <span class="token number">2022</span>
pZxid <span class="token operator">=</span> 0x200000029
cversion <span class="token operator">=</span> <span class="token number">4</span>
dataVersion <span class="token operator">=</span> <span class="token number">0</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">7</span>
numChildren <span class="token operator">=</span> <span class="token number">4</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token builtin class-name">set</span> /nodeA <span class="token string">"mserverA"</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">3</span><span class="token punctuation">]</span> get <span class="token parameter variable">-s</span> /nodeA
mserverA
cZxid <span class="token operator">=</span> 0x200000025
ctime <span class="token operator">=</span> Tue Sep <span class="token number">27</span> <span class="token number">23</span>:27:02 CST <span class="token number">2022</span>
mZxid <span class="token operator">=</span> 0x200000035
mtime <span class="token operator">=</span> Tue Sep <span class="token number">27</span> <span class="token number">23</span>:44:19 CST <span class="token number">2022</span>
pZxid <span class="token operator">=</span> 0x200000029
cversion <span class="token operator">=</span> <span class="token number">4</span>
dataVersion <span class="token operator">=</span> <span class="token number">1</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">8</span>
numChildren <span class="token operator">=</span> <span class="token number">4</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">4</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
</ol>
<h3 id="监听器原理" tabindex="-1"><a class="header-anchor" href="#监听器原理" aria-hidden="true">#</a> 监听器原理</h3>
<p>​		客户端注册监听它关心的目录节点，当目录节点发生变化（数据改变、节点删除、子目 录节点增加删除）时，ZooKeeper 会通知客户端。监听机制保证 ZooKeeper 保存的任何的数 据的任何改变都能快速的响应到监听了该节点的应用程序。</p>
<p>原理详解：</p>
<ol>
<li>
<p>在main线程中创建Zookeeper客户端，这时就会创建两个线程，一个负责网络连接通信（connet），一个负责监听（listener）。</p>
</li>
<li>
<p>通过 connect 线程将注册的监听事件发送给 Zookeeper。</p>
</li>
<li>
<p>在 Zookeeper 的注册监听器列表中将注册的监听事件添加到列表中。</p>
</li>
<li>
<p>Zookeeper 监听到有数据或路径变化，就会将这个消息发送给 listener 线程。</p>
</li>
<li>
<p>listener 线程内部调用了 process() 方法。</p>
<blockquote>
<figure><img src="@source/Java/Zookeeper/image-20220927234552567.png" alt="image-20220927234552567" tabindex="0" loading="lazy"><figcaption>image-20220927234552567</figcaption></figure>
</blockquote>
</li>
</ol>
<p>常见的监听：</p>
<p>监听节点数据的变化：get path [watch]</p>
<p>监听子节点增减的变化：ls path [watch]</p>
<p>（1）节点的值变化监听：</p>
<blockquote>
<p>在 192.168.100.100 上监听节点的值，在192.168.100.110 上修改节点的值</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">10</span><span class="token punctuation">]</span> create /node01 <span class="token string">"server01"</span>
Created /node01
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">11</span><span class="token punctuation">]</span> get <span class="token parameter variable">-w</span> /node01
server01
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">12</span><span class="token punctuation">]</span>
WATCHER::

WatchedEvent state:SyncConnected type:NodeDataChanged path:/node01

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token function">ls</span> /
<span class="token punctuation">[</span>node01, zookeeper<span class="token punctuation">]</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token builtin class-name">set</span> /node01 <span class="token string">"node02"</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token builtin class-name">set</span> /node01 <span class="token string">"node03"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：注册一次，只能监听一次。</p>
</blockquote>
<p>（2）节点的子节点变化监听（路径变化）</p>
<blockquote>
<p>在 192.168.100.100 上监听节点的值，在192.168.100.110 上修改节点的值</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token function">ls</span> /
<span class="token punctuation">[</span>node01, zookeeper<span class="token punctuation">]</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token function">ls</span> <span class="token parameter variable">-w</span> /node01
<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">2</span><span class="token punctuation">]</span>
WATCHER::

WatchedEvent state:SyncConnected type:NodeChildrenChanged path:/node01

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">]</span> create /node01/node02
Created /node01/node02
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">]</span> create /node01/node03
Created /node01/node03

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h3 id="节点删除与查看" tabindex="-1"><a class="header-anchor" href="#节点删除与查看" aria-hidden="true">#</a> 节点删除与查看</h3>
<blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token function">ls</span> /node01
<span class="token punctuation">[</span>node02, node03<span class="token punctuation">]</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">2</span><span class="token punctuation">]</span> deleteall /node01
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token function">ls</span> /
<span class="token punctuation">[</span>zookeeper<span class="token punctuation">]</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token function">stat</span> /zookeeper
cZxid <span class="token operator">=</span> 0x0
ctime <span class="token operator">=</span> Thu Jan 01 08:00:00 CST <span class="token number">1970</span>
mZxid <span class="token operator">=</span> 0x0
mtime <span class="token operator">=</span> Thu Jan 01 08:00:00 CST <span class="token number">1970</span>
pZxid <span class="token operator">=</span> 0x0
cversion <span class="token operator">=</span> <span class="token parameter variable">-2</span>
dataVersion <span class="token operator">=</span> <span class="token number">0</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">0</span>
numChildren <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h2 id="客户端-api-操作" tabindex="-1"><a class="header-anchor" href="#客户端-api-操作" aria-hidden="true">#</a> 客户端 API 操作</h2>
<h3 id="创建工程" tabindex="-1"><a class="header-anchor" href="#创建工程" aria-hidden="true">#</a> 创建工程</h3>
<blockquote>
<p>pom.xml</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>    <span class="token operator">&lt;</span>dependencies<span class="token operator">></span>
        <span class="token operator">&lt;</span>dependency<span class="token operator">></span>
            <span class="token operator">&lt;</span>groupId<span class="token operator">></span>junit<span class="token operator">&lt;</span>/groupId<span class="token operator">></span>
            <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>junit<span class="token operator">&lt;</span>/artifactId<span class="token operator">></span>
            <span class="token operator">&lt;</span>version<span class="token operator">></span>RELEASE<span class="token operator">&lt;</span>/version<span class="token operator">></span>
        <span class="token operator">&lt;</span>/dependency<span class="token operator">></span>
        <span class="token operator">&lt;</span>dependency<span class="token operator">></span>
            <span class="token operator">&lt;</span>groupId<span class="token operator">></span>org.apache.logging.log4j<span class="token operator">&lt;</span>/groupId<span class="token operator">></span>
            <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>log4j-core<span class="token operator">&lt;</span>/artifactId<span class="token operator">></span>
            <span class="token operator">&lt;</span>version<span class="token operator">></span><span class="token number">2.8</span>.<span class="token operator"><span class="token file-descriptor important">2</span>&lt;</span>/version<span class="token operator">></span>
        <span class="token operator">&lt;</span>/dependency<span class="token operator">></span>
        <span class="token operator">&lt;</span>dependency<span class="token operator">></span>
            <span class="token operator">&lt;</span>groupId<span class="token operator">></span>org.apache.zookeeper<span class="token operator">&lt;</span>/groupId<span class="token operator">></span>
            <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>zookeeper<span class="token operator">&lt;</span>/artifactId<span class="token operator">></span>
            <span class="token operator">&lt;</span>version<span class="token operator">></span><span class="token number">3.5</span>.<span class="token operator"><span class="token file-descriptor important">7</span>&lt;</span>/version<span class="token operator">></span>
        <span class="token operator">&lt;</span>/dependency<span class="token operator">></span>
    <span class="token operator">&lt;</span>/dependencies<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>log4j.properties</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>log4j.rootLogger=INFO, stdout
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%d %p [%c] - %m%n
log4j.appender.logfile=org.apache.log4j.FileAppender
log4j.appender.logfile.File=target/spring.log
log4j.appender.logfile.layout=org.apache.log4j.PatternLayout
log4j.appender.logfile.layout.ConversionPattern=%d %p [%c] - %m%n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h3 id="创建-zookeeper-客户端" tabindex="-1"><a class="header-anchor" href="#创建-zookeeper-客户端" aria-hidden="true">#</a> 创建 ZooKeeper 客户端</h3>
<p><strong>使用客户端 API 连接时，sessionTimeout 应该设置大些，否则报错：</strong></p>
<p>org.apache.zookeeper.KeeperException$ConnectionLossException: KeeperErrorCode = ConnectionLoss for /node01</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ZkClient</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">ZooKeeper</span> zooKeeper <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> connectString <span class="token operator">=</span> <span class="token string">"192.168.100.100:2181,192.168.100.110:2181,192.168.100.120:2181"</span><span class="token punctuation">;</span>
    <span class="token comment">// 注意，该值在确保网络，防火墙关闭的情况下，值应该设置大一点</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> sessionTimeout <span class="token operator">=</span> <span class="token number">100000</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 创建 ZooKeeper 客户端
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
     */</span>
    <span class="token annotation punctuation">@Before</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            zooKeeper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZooKeeper</span><span class="token punctuation">(</span>connectString<span class="token punctuation">,</span> sessionTimeout<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 监听节点变化（值/路径），收到事件后的回调函数</span>
                <span class="token annotation punctuation">@Override</span>
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">WatchedEvent</span> watchedEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>watchedEvent<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" :: "</span> <span class="token operator">+</span> watchedEvent<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">// 再次监听</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> child <span class="token operator">:</span> zooKeeper<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"child: "</span> <span class="token operator">+</span> child<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">KeeperException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建节点" tabindex="-1"><a class="header-anchor" href="#创建节点" aria-hidden="true">#</a> 创建节点</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 创建节点
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 参数 1：要创建的节点的路径；参数 2：节点数据 ；参数 3：节点权限 ；参数 4：节点的类型</span>
        zooKeeper<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">"/node01"</span><span class="token punctuation">,</span>
                <span class="token string">"server01"</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">ZooDefs<span class="token punctuation">.</span>Ids</span><span class="token punctuation">.</span><span class="token constant">OPEN_ACL_UNSAFE</span><span class="token punctuation">,</span>
                <span class="token class-name">CreateMode</span><span class="token punctuation">.</span><span class="token constant">PERSISTENT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监听子节点变化" tabindex="-1"><a class="header-anchor" href="#监听子节点变化" aria-hidden="true">#</a> 监听子节点变化</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 获取子节点并监听节点变化
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testGetChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> children <span class="token operator">=</span> zooKeeper<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> child <span class="token operator">:</span> children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断节点是否存在" tabindex="-1"><a class="header-anchor" href="#判断节点是否存在" aria-hidden="true">#</a> 判断节点是否存在</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 判断节点是否存在
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testExists</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Stat</span> stat <span class="token operator">=</span> zooKeeper<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token string">"/node01"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stat <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">"not exist"</span> <span class="token operator">:</span> <span class="token string">"exist"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端向服务端写数据流程" tabindex="-1"><a class="header-anchor" href="#客户端向服务端写数据流程" aria-hidden="true">#</a> 客户端向服务端写数据流程</h2>
<h3 id="写入请求直接发送给leader节点" tabindex="-1"><a class="header-anchor" href="#写入请求直接发送给leader节点" aria-hidden="true">#</a> 写入请求直接发送给Leader节点</h3>
<p>客户端请求 leader，leader 自己写数据并发送数据给 follower，follower 写数据完成，发送 ack 给leader，此时写入数据的机器已经超过半数，leader 发送 ack 给 Client，之后 leader 再写数据给其他 follower。</p>
<figure><img src="@source/Java/Zookeeper/image-20220928110608916.png" alt="image-20220928110608916" tabindex="0" loading="lazy"><figcaption>image-20220928110608916</figcaption></figure>
<h3 id="写入请求发送给follower节点" tabindex="-1"><a class="header-anchor" href="#写入请求发送给follower节点" aria-hidden="true">#</a> 写入请求发送给follower节点</h3>
<p>客户端请求 follower，follower 没有写的权限，将请求发送给 leader，leader 自己写数据完成，并写数据给 follower，follower 写数据完成，发送 ack 给 leader，此时 leader 判断写入数据的机器已经超过半数，leader 发送 ack 给 follower（follower 和 Client 建立连接），之后 leader 再写数据给其他 follower。</p>
<figure><img src="@source/Java/Zookeeper/image-20220928110637290.png" alt="image-20220928110637290" tabindex="0" loading="lazy"><figcaption>image-20220928110637290</figcaption></figure>
<h2 id="服务器动态上下线监听案例" tabindex="-1"><a class="header-anchor" href="#服务器动态上下线监听案例" aria-hidden="true">#</a> 服务器动态上下线监听案例</h2>
<p>要求：某分布式系统中，主节点可以有多台，可以动态上下线，任意一台客户端都能实时感知到主节点服务器的上下线。</p>
<figure><img src="@source/Java/Zookeeper/image-20220928111752756.png" alt="image-20220928111752756" tabindex="0" loading="lazy"><figcaption>image-20220928111752756</figcaption></figure>
<h3 id="服务端注册" tabindex="-1"><a class="header-anchor" href="#服务端注册" aria-hidden="true">#</a> 服务端注册</h3>
<p>在集群上创建 /servers 节点</p>
<p><strong>注意删除时，要写全路径。</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">8</span><span class="token punctuation">]</span> create /servers <span class="token string">"servers"</span>
Created /servers
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">9</span><span class="token punctuation">]</span> <span class="token function">ls</span> /
<span class="token punctuation">[</span>servers, zookeeper<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码实现：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>zookeeper<span class="token punctuation">.</span>watchdemo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>zookeeper<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>charset<span class="token punctuation">.</span></span><span class="token class-name">StandardCharsets</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WatchOnOffLineServer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">ZooKeeper</span> zooKeeper <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> connectString <span class="token operator">=</span> <span class="token string">"192.168.100.100:2181,192.168.100.110:2181,192.168.100.120:2181"</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> sessionTimeout <span class="token operator">=</span> <span class="token number">100000</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> parentNode <span class="token operator">=</span> <span class="token string">"/servers"</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> hostnameArray <span class="token operator">=</span> args<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> args <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"192.168.100.100"</span><span class="token punctuation">,</span> <span class="token string">"192.168.100.110"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">WatchOnOffLineServer</span> server <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WatchOnOffLineServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        server<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> hostname <span class="token operator">:</span> hostnameArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            server<span class="token punctuation">.</span><span class="token function">registServer</span><span class="token punctuation">(</span>hostname<span class="token punctuation">)</span><span class="token punctuation">;</span>
            server<span class="token punctuation">.</span><span class="token function">business</span><span class="token punctuation">(</span>hostname<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">business</span><span class="token punctuation">(</span><span class="token class-name">String</span> hostname<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hostname <span class="token operator">+</span> <span class="token string">" is working ..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 向Zookeeper注册服务器信息，数据为$<span class="token punctuation">{</span>hostname<span class="token punctuation">}</span>
     * <span class="token keyword">@param</span> <span class="token parameter">hostname</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">InterruptedException</span></span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">KeeperException</span></span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">registServer</span><span class="token punctuation">(</span><span class="token class-name">String</span> hostname<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">KeeperException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> created <span class="token operator">=</span> zooKeeper<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>
                parentNode <span class="token operator">+</span> <span class="token string">"/server"</span><span class="token punctuation">,</span>
                hostname<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">ZooDefs<span class="token punctuation">.</span>Ids</span><span class="token punctuation">.</span><span class="token constant">OPEN_ACL_UNSAFE</span><span class="token punctuation">,</span> <span class="token class-name">CreateMode</span><span class="token punctuation">.</span><span class="token constant">PERSISTENT_SEQUENTIAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hostname <span class="token operator">+</span> <span class="token string">" online ..."</span> <span class="token operator">+</span> created<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        zooKeeper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZooKeeper</span><span class="token punctuation">(</span>connectString<span class="token punctuation">,</span> sessionTimeout<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">WatchedEvent</span> watchedEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端监听" tabindex="-1"><a class="header-anchor" href="#客户端监听" aria-hidden="true">#</a> 客户端监听</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>package com.example.zookeeper.watchdemo<span class="token punctuation">;</span>

<span class="token function">import</span> org.apache.zookeeper.*<span class="token punctuation">;</span>

<span class="token function">import</span> java.io.IOException<span class="token punctuation">;</span>
<span class="token function">import</span> java.nio.charset.StandardCharsets<span class="token punctuation">;</span>
<span class="token function">import</span> java.util.ArrayList<span class="token punctuation">;</span>
<span class="token function">import</span> java.util.List<span class="token punctuation">;</span>
<span class="token function">import</span> java.util.stream.Collectors<span class="token punctuation">;</span>

public class WatchOnOffLineClient <span class="token punctuation">{</span>
    private ZooKeeper zooKeeper <span class="token operator">=</span> null<span class="token punctuation">;</span>
    private String connectString <span class="token operator">=</span> <span class="token string">"192.168.100.100:2181,192.168.100.110:2181,192.168.100.120:2181"</span><span class="token punctuation">;</span>
    private static int sessionTimeout <span class="token operator">=</span> <span class="token number">100000</span><span class="token punctuation">;</span>
    private String parentNode <span class="token operator">=</span> <span class="token string">"/servers"</span><span class="token punctuation">;</span>

    public static void main<span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> throws Exception <span class="token punctuation">{</span>
        WatchOnOffLineClient client <span class="token operator">=</span> new WatchOnOffLineClient<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        client.getConnection<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        client.getServerList<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        client.business<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    private void getConnection<span class="token punctuation">(</span><span class="token punctuation">)</span> throws IOException <span class="token punctuation">{</span>
        zooKeeper <span class="token operator">=</span> new ZooKeeper<span class="token punctuation">(</span>connectString, sessionTimeout, new <span class="token function-name function">Watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            @Override
            public void process<span class="token punctuation">(</span>WatchedEvent watchedEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                try <span class="token punctuation">{</span>
                    getServerList<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> catch <span class="token punctuation">(</span>Exception e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e.printStackTrace<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    private void getServerList<span class="token punctuation">(</span><span class="token punctuation">)</span> throws InterruptedException, KeeperException <span class="token punctuation">{</span>
        List<span class="token operator">&lt;</span>String<span class="token operator">></span> children <span class="token operator">=</span> zooKeeper.getChildren<span class="token punctuation">(</span>parentNode, <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        // 存储服务器信息列表
        List<span class="token operator">&lt;</span>String<span class="token operator">></span> servers <span class="token operator">=</span> new ArrayList<span class="token operator">&lt;></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        // 遍历所有节点，获取节点中的主机名称信息
        <span class="token keyword">for</span> <span class="token punctuation">(</span>String child <span class="token builtin class-name">:</span> children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            byte<span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> zooKeeper.getData<span class="token punctuation">(</span>parentNode + <span class="token string">"/"</span> + child, false, null<span class="token punctuation">)</span><span class="token punctuation">;</span>
            servers.add<span class="token punctuation">(</span>new String<span class="token punctuation">(</span>data, StandardCharsets.UTF_8<span class="token punctuation">))</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        System.out.println<span class="token punctuation">(</span><span class="token string">"servers: "</span> + servers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    private void business<span class="token punctuation">(</span><span class="token punctuation">)</span> throws IOException <span class="token punctuation">{</span>
        System.out.println<span class="token punctuation">(</span><span class="token string">"client is working ..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        System.in.read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="zookeeper-分布式锁实现" tabindex="-1"><a class="header-anchor" href="#zookeeper-分布式锁实现" aria-hidden="true">#</a> ZooKeeper 分布式锁实现</h1>
<h2 id="实现过程" tabindex="-1"><a class="header-anchor" href="#实现过程" aria-hidden="true">#</a> 实现过程</h2>
<p>分布式锁：分布式系统中多个进程能够有序访问临界资源的锁即为分布式锁。</p>
<figure><img src="@source/Java/Zookeeper/image-20221009235930879.png" alt="image-20221009235930879" tabindex="0" loading="lazy"><figcaption>image-20221009235930879</figcaption></figure>
<p>通过创建有序的临时节点实现分布式锁，该节点作为分布式锁。</p>
<p>客户端判断获取到的节点是否为最小节点，如果是则该节点作为锁，，如果不是，则监听上一个节点，对于每一个节点，处理完业务后，需要释放锁，其他的节点得到锁。</p>
<h2 id="原生zookeeper实现分布式锁" tabindex="-1"><a class="header-anchor" href="#原生zookeeper实现分布式锁" aria-hidden="true">#</a> 原生Zookeeper实现分布式锁</h2>
<p>分布式锁：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>zookeeper<span class="token punctuation">.</span>lock</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>zookeeper<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>zookeeper<span class="token punctuation">.</span>data<span class="token punctuation">.</span></span><span class="token class-name">Stat</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>charset<span class="token punctuation">.</span></span><span class="token class-name">StandardCharsets</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collections</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">CountDownLatch</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DistributedLock</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> connectString <span class="token operator">=</span> <span class="token string">"192.168.100.100:2181,192.168.100.110:2181,192.168.100.120:2181"</span><span class="token punctuation">;</span>
    <span class="token comment">// 注意，该值在确保网络，防火墙关闭的情况下，值应该设置大一点</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> sessionTimeout <span class="token operator">=</span> <span class="token number">100000</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">ZooKeeper</span> zooKeeper <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> rootNode <span class="token operator">=</span> <span class="token string">"/locks"</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> subNodePrefix <span class="token operator">=</span> <span class="token string">"/seq-"</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">CountDownLatch</span> connectLatch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CountDownLatch</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">CountDownLatch</span> waitLatch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CountDownLatch</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> currentNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> waitNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 创建节点
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">DistributedLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">KeeperException</span> <span class="token punctuation">{</span>
        zooKeeper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZooKeeper</span><span class="token punctuation">(</span>connectString<span class="token punctuation">,</span> sessionTimeout<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">WatchedEvent</span> watchedEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 监听连接事件</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>watchedEvent<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">Event<span class="token punctuation">.</span>KeeperState<span class="token punctuation">.</span>SyncConnected</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    connectLatch<span class="token punctuation">.</span><span class="token function">countDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// 监听上一个节点</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>watchedEvent<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">Event<span class="token punctuation">.</span>EventType<span class="token punctuation">.</span>NodeDeleted</span> <span class="token operator">&amp;&amp;</span> watchedEvent<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>waitNode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    waitLatch<span class="token punctuation">.</span><span class="token function">countDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 等待连接完成，创建节点</span>
        connectLatch<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 判断节点是否存在</span>
        <span class="token class-name">Stat</span> exists <span class="token operator">=</span> zooKeeper<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span>rootNode<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>exists <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            zooKeeper<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>rootNode<span class="token punctuation">,</span> rootNode<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">ZooDefs<span class="token punctuation">.</span>Ids</span><span class="token punctuation">.</span><span class="token constant">OPEN_ACL_UNSAFE</span><span class="token punctuation">,</span> <span class="token class-name">CreateMode</span><span class="token punctuation">.</span><span class="token constant">PERSISTENT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 加锁：即创建临时有序的子节点，如果有多个，则排序等待前一个释放锁
     * 释放锁：删除该子节点
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">zkLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">KeeperException</span> <span class="token punctuation">{</span>
        currentNode <span class="token operator">=</span> zooKeeper<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>rootNode <span class="token operator">+</span> subNodePrefix<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
                <span class="token class-name">ZooDefs<span class="token punctuation">.</span>Ids</span><span class="token punctuation">.</span><span class="token constant">OPEN_ACL_UNSAFE</span><span class="token punctuation">,</span> <span class="token class-name">CreateMode</span><span class="token punctuation">.</span><span class="token constant">EPHEMERAL_SEQUENTIAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 方便测试</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> children <span class="token operator">=</span> zooKeeper<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span>rootNode<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> thisNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>rootNode<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"thisNode: "</span> <span class="token operator">+</span> thisNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> index <span class="token operator">=</span> children<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>thisNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"数据异常"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                waitNode <span class="token operator">=</span> rootNode <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> children<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"waitNode: "</span> <span class="token operator">+</span> waitNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
                zooKeeper<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span>waitNode<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Stat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                waitLatch<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 解锁
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">zkUnlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 删除节点，设置版本</span>
            zooKeeper<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentNode<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> <span class="token operator">|</span> <span class="token class-name">KeeperException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试分布式锁：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>zookeeper<span class="token punctuation">.</span>lock</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>zookeeper<span class="token punctuation">.</span></span><span class="token class-name">KeeperException</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DistributedLockTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">KeeperException</span> <span class="token punctuation">{</span>
        <span class="token class-name">DistributedLock</span> distributedLock01 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DistributedLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DistributedLock</span> distributedLock02 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DistributedLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    distributedLock01<span class="token punctuation">.</span><span class="token function">zkLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Thread01 上锁..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    distributedLock01<span class="token punctuation">.</span><span class="token function">zkUnlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Thread01 解锁..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> <span class="token operator">|</span> <span class="token class-name">KeeperException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">"Thread01"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    distributedLock02<span class="token punctuation">.</span><span class="token function">zkLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Thread02 上锁..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    distributedLock02<span class="token punctuation">.</span><span class="token function">zkUnlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Thread02 解锁..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> <span class="token operator">|</span> <span class="token class-name">KeeperException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">"Thread02"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果：</p>
<p>Thread02 上锁...</p>
<p>Thread02 解锁...</p>
<p>Thread01 上锁...</p>
<p>Thread01 解锁...</p>
<h2 id="curator-框架实现分布式锁" tabindex="-1"><a class="header-anchor" href="#curator-框架实现分布式锁" aria-hidden="true">#</a> Curator 框架实现分布式锁</h2>
<h3 id="原生的-java-api-开发存在的问题" tabindex="-1"><a class="header-anchor" href="#原生的-java-api-开发存在的问题" aria-hidden="true">#</a> 原生的 Java API 开发存在的问题</h3>
<p>（1）会话连接是异步的，需要自己去处理。比如使用 CountDownLatch</p>
<p>（2）Watch 需要重复注册，不然就不能生效</p>
<p>（3）开发的复杂性还是比较高的</p>
<p>（4）不支持多节点删除和创建。需要自己去递归</p>
<blockquote>
<p>Curator 是一个专门解决分布式锁的框架，解决了原生 JavaAPI 开发分布式遇到的问题。</p>
<p>详情请查看官方文档：<a href="https://curator.apache.org/index.html" target="_blank" rel="noopener noreferrer">https://curator.apache.org/index.html<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="curator-示例" tabindex="-1"><a class="header-anchor" href="#curator-示例" aria-hidden="true">#</a> Curator 示例</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>zookeeper<span class="token punctuation">.</span>lock</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>curator<span class="token punctuation">.</span>framework<span class="token punctuation">.</span></span><span class="token class-name">CuratorFramework</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>curator<span class="token punctuation">.</span>framework<span class="token punctuation">.</span></span><span class="token class-name">CuratorFrameworkFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>curator<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>recipes<span class="token punctuation">.</span>locks<span class="token punctuation">.</span></span><span class="token class-name">InterProcessMutex</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>curator<span class="token punctuation">.</span>retry<span class="token punctuation">.</span></span><span class="token class-name">ExponentialBackoffRetry</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CuratorLockTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建分布式锁1</span>
        <span class="token class-name">InterProcessMutex</span> lock1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InterProcessMutex</span><span class="token punctuation">(</span><span class="token function">getCuratorFramework</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"/locks"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建分布式锁2</span>
        <span class="token class-name">InterProcessMutex</span> lock2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InterProcessMutex</span><span class="token punctuation">(</span><span class="token function">getCuratorFramework</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"/locks"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    lock1<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程1 获取到锁"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    lock1<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程1 再次获取到锁(可重入锁)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    lock1<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程1 释放锁"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    lock1<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程1 再次释放锁"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    lock2<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程2 获取到锁"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    lock2<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程2 再次获取到锁"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    lock2<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程2 释放锁"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    lock2<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程2  再次释放锁"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">CuratorFramework</span> <span class="token function">getCuratorFramework</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 3秒连接不上重试</span>
        <span class="token class-name">ExponentialBackoffRetry</span> policy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExponentialBackoffRetry</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CuratorFramework</span> client <span class="token operator">=</span> <span class="token class-name">CuratorFrameworkFactory</span>
                <span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">connectString</span><span class="token punctuation">(</span><span class="token string">"192.168.100.100:2181,192.168.100.110:2181,192.168.100.120:2181"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">connectionTimeoutMs</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">sessionTimeoutMs</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">retryPolicy</span><span class="token punctuation">(</span>policy<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 启动客户端</span>
        client<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"zookeeper 启动成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> client<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果：</p>
<p>线程2 获取到锁<br>
线程2 再次获取到锁<br>
线程2 释放锁<br>
线程2  再次释放锁<br>
线程1 获取到锁<br>
线程1 再次获取到锁(可重入锁)<br>
线程1 释放锁<br>
线程1 再次释放锁</p>
<h1 id="两个问题" tabindex="-1"><a class="header-anchor" href="#两个问题" aria-hidden="true">#</a> 两个问题</h1>
<h2 id="选举机制-1" tabindex="-1"><a class="header-anchor" href="#选举机制-1" aria-hidden="true">#</a> 选举机制</h2>
<p>半数机制，超过半数的投票通过，即通过。</p>
<p>（1）第一次启动选举规则： 投票过半数时，服务器 id 大的胜出</p>
<p>（2）第二次启动选举规则：</p>
<ul>
<li>​	EPOCH 大的直接胜出</li>
<li>​	EPOCH 相同，事务 id 大的胜出</li>
<li>​	事务 id 相同，服务器 id 大的胜出</li>
</ul>
<h2 id="生产集群安装多少-zk-合适" tabindex="-1"><a class="header-anchor" href="#生产集群安装多少-zk-合适" aria-hidden="true">#</a> 生产集群安装多少 zk 合适？</h2>
<p>安装奇数台。</p>
<p>生产经验：</p>
<p>10 台服务器：3 台 zk；</p>
<p>20 台服务器：5 台 zk；</p>
<p>100 台服务器：11 台 zk；</p>
<p>200 台服务器：11 台 zk ；</p>
<p><strong>服务器台数多：好处，提高可靠性；坏处：提高通信延时</strong></p>
<h1 id="源码分析" tabindex="-1"><a class="header-anchor" href="#源码分析" aria-hidden="true">#</a> 源码分析</h1>
<h2 id="zookeeper-是如何保证数据一致性的" tabindex="-1"><a class="header-anchor" href="#zookeeper-是如何保证数据一致性的" aria-hidden="true">#</a> Zookeeper 是如何保证数据一致性的？</h2>
</div></template>


