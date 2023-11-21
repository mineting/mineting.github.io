<template><div><div align='center'><font size='70'><b>Git-Svn</b></font></div>
<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1>
<h1 id="git-概述" tabindex="-1"><a class="header-anchor" href="#git-概述" aria-hidden="true">#</a> Git 概述</h1>
<h2 id="版本控制" tabindex="-1"><a class="header-anchor" href="#版本控制" aria-hidden="true">#</a> 版本控制</h2>
<p>版本控制工具应该具有的功能：</p>
<ol>
<li>
<p>协同修改</p>
<p>多人并行不悖的修改服务器端的同一个文件。</p>
</li>
<li>
<p>数据备份</p>
<p>不仅保存目录和文件的当前状态，还能够保存每一个提交过的历史状态。</p>
</li>
<li>
<p>版本管理</p>
<p>在保存每一个版本的文件信息的时候要做到不保存重复数据，以节约存储空间，提高运行效率。这方面SVN采用的是增量式管理的方式，而Git采取了文件系统快照的方式。</p>
</li>
<li>
<p>权限控制</p>
<p>对团队中参与开发的人员进行权限控制。对团队外开发者贡献的代码进行审核（Git独有）。</p>
</li>
<li>
<p>历史记录</p>
<p>查看修改人、修改时间、修改内容、日志信息。将本地文件恢复到某一个历史状态。</p>
</li>
<li>
<p>分支管理</p>
<p>允许开发团队在工作过程中多条生产线同时推进任务，进一步提高效率。</p>
</li>
</ol>
<h2 id="git-工作流程" tabindex="-1"><a class="header-anchor" href="#git-工作流程" aria-hidden="true">#</a> Git 工作流程</h2>
<p>官网地址：<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">https://git-scm.com/<ExternalLinkIcon/></a></p>
<p>Git 常用的是以下 6 个命令：git clone、git push、git add 、git commit、git checkout、git pull。</p>
<p>其中 pull 可以看做 fetch + merge。</p>
<figure><img src="@source/Java/Git-Svn/Git工作流程.png" alt="Git工作流程" tabindex="0" loading="lazy"><figcaption>Git工作流程</figcaption></figure>
<ol>
<li>
<p>从远程库克隆代码至本地仓库。</p>
</li>
<li>
<p>从本地仓库 checkout 至工作空间。</p>
</li>
<li>
<p>提交代码之前先添加至暂存区，再提交至本地仓库。</p>
</li>
<li>
<p>将本地仓库对代码 push 到远程仓库。</p>
</li>
</ol>
<h2 id="git-优势" tabindex="-1"><a class="header-anchor" href="#git-优势" aria-hidden="true">#</a> Git 优势</h2>
<ol>
<li>
<p>大部分操作在本地完成，不需要联网</p>
</li>
<li>
<p>完整性保证</p>
</li>
<li>
<p>尽可能添加数据而不是删除或修改数据</p>
</li>
<li>
<p>分支操作非常快捷流畅</p>
</li>
<li>
<p>与Linux命令全面兼容</p>
</li>
</ol>
<h2 id="git-与-svn-对比-集中式与分布式" tabindex="-1"><a class="header-anchor" href="#git-与-svn-对比-集中式与分布式" aria-hidden="true">#</a> Git 与 SVN 对比（集中式与分布式）</h2>
<p>​		SVN 是集中式版本控制系统，版本库是集中放在中央服务器的，而开发人员工作的时候，用的都是自己的电脑。所以首先要从中央服务器下载最新的版本，然后开发，开发完后，需要把自己开发的代码提交到中央服务器。</p>
<p>集中式版本控制的缺点：</p>
<ul>
<li>服务器单点故障</li>
<li>容错性差</li>
</ul>
<p>GIT 是分布式版本控制系统，（Distributed Version Control System），分为远程仓库和本地仓库。</p>
<ul>
<li>本地仓库：开发人员自己电脑上的Git仓库</li>
<li>远程仓库：远程服务器上的Git仓库</li>
<li>Clone：克隆</li>
<li>Push：推送，将本地仓库代码上传到远程仓库</li>
<li>Pull：拉取，将远程仓库代码下载到本地仓库</li>
</ul>
<h2 id="团队内部协作" tabindex="-1"><a class="header-anchor" href="#团队内部协作" aria-hidden="true">#</a> 团队内部协作</h2>
<figure><img src="@source/Java/Git-Svn/团队内部协作.png" alt="团队内部协作" tabindex="0" loading="lazy"><figcaption>团队内部协作</figcaption></figure>
<h2 id="跨团队协作" tabindex="-1"><a class="header-anchor" href="#跨团队协作" aria-hidden="true">#</a> 跨团队协作</h2>
<figure><img src="@source/Java/Git-Svn/跨团队协作.png" alt="跨团队协作" tabindex="0" loading="lazy"><figcaption>跨团队协作</figcaption></figure>
<h1 id="git-本地库操作" tabindex="-1"><a class="header-anchor" href="#git-本地库操作" aria-hidden="true">#</a> Git 本地库操作</h1>
<h2 id="环境-签名-配置" tabindex="-1"><a class="header-anchor" href="#环境-签名-配置" aria-hidden="true">#</a> 环境（签名）配置</h2>
<p>安装完 Git 以后，需要设置用户名称 username 和 email 地址，Git 的提交需要使用该信息区分开发人员。</p>
<p>注意：<strong>这里设置的签名和登录远程库的账号、密码没有任何关系，仅用于区分本地仓库的提交信息。</strong></p>
<p>设置用户信息：通过 global 区分是否在全局生效。</p>
<p>项目或仓库级别设置签名：仅在当前库范围中生效。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config user.name <span class="token string">"liufei"</span>

<span class="token function">git</span> config user.email <span class="token string">"1696833130@qq.com"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>系统级别设置签名：在当前系统范围内生效。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"liufei"</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"1696833130@qq.com"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看用户信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span>

<span class="token function">git</span> config user.name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上的配置信息会保存在 <strong>~/.gitconfig</strong> 文件中，即 <code v-pre>Windows：C:\Users\Administrator\.gitconfig</code></p>
<p>注意： 项目级别优先于系统用户级别，如果只有系统用户级别的签名，就以系统用户级别的签名为准，但必须有一个以示区分。</p>
<p>.gitconfig 内容：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>user<span class="token punctuation">]</span>
	name <span class="token operator">=</span> liufei
	email <span class="token operator">=</span> <span class="token number">1696833130</span>@qq.com
<span class="token punctuation">[</span>credential <span class="token string">"https://gitee.com"</span><span class="token punctuation">]</span>
	provider <span class="token operator">=</span> generic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：配置用户信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">16968</span>@MineTing MINGW64 ~/Desktop
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"liufei"</span>

<span class="token number">16968</span>@MineTing MINGW64 ~/Desktop
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"1696833130@qq.com"</span>

<span class="token number">16968</span>@MineTing MINGW64 ~/Desktop
$

<span class="token number">16968</span>@MineTing MINGW64 ~/Desktop
$ <span class="token function">git</span> config user.name
liufei

<span class="token number">16968</span>@MineTing MINGW64 ~/Desktop
$ <span class="token function">git</span> config <span class="token parameter variable">--list</span>
<span class="token assign-left variable">diff.astextplain.textconv</span><span class="token operator">=</span>astextplain
<span class="token assign-left variable">filter.lfs.clean</span><span class="token operator">=</span>git-lfs clean -- %f
<span class="token assign-left variable">filter.lfs.smudge</span><span class="token operator">=</span>git-lfs smudge -- %f
<span class="token assign-left variable">filter.lfs.process</span><span class="token operator">=</span>git-lfs filter-process
<span class="token assign-left variable">filter.lfs.required</span><span class="token operator">=</span>true
<span class="token assign-left variable">http.sslbackend</span><span class="token operator">=</span>openssl
<span class="token assign-left variable">http.sslcainfo</span><span class="token operator">=</span>C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
<span class="token assign-left variable">core.autocrlf</span><span class="token operator">=</span>true
<span class="token assign-left variable">core.fscache</span><span class="token operator">=</span>true
<span class="token assign-left variable">core.symlinks</span><span class="token operator">=</span>false
<span class="token assign-left variable">pull.rebase</span><span class="token operator">=</span>false
<span class="token assign-left variable">credential.helper</span><span class="token operator">=</span>manager-core
credential.https://dev.azure.com.usehttppath<span class="token operator">=</span>true
<span class="token assign-left variable">init.defaultbranch</span><span class="token operator">=</span>master
<span class="token assign-left variable">user.name</span><span class="token operator">=</span>liufei
<span class="token assign-left variable">user.email</span><span class="token operator">=</span><span class="token number">1696833130</span>@qq.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-init-本地库初始化" tabindex="-1"><a class="header-anchor" href="#git-init-本地库初始化" aria-hidden="true">#</a> git init：本地库初始化</h2>
<p>​		执行该命令会在当前目录中生成 <strong>.git</strong> 目录，存放的是本地库相关的子目录和文件，不要删除和修改。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">16968</span>@MineTing MINGW64 /d/Java/WorkSpace/Learn/Tools/Git/Git-Start <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> init
Initialized empty Git repository <span class="token keyword">in</span> D:/Java/WorkSpace/Learn/Tools/Git/Git-Start/.git/

<span class="token number">16968</span>@MineTing MINGW64 /d/Java/WorkSpace/Learn/Tools/Git/Git-Start <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token builtin class-name">cd</span> .git/

<span class="token number">16968</span>@MineTing MINGW64 /d/Java/WorkSpace/Learn/Tools/Git/Git-Start/.git <span class="token punctuation">(</span>GIT_DIR<span class="token operator">!</span><span class="token punctuation">)</span>
$ ll
total <span class="token number">7</span>
-rw-r--r-- <span class="token number">1</span> <span class="token number">16968</span> <span class="token number">197609</span>  <span class="token number">23</span> Aug <span class="token number">21</span> <span class="token number">23</span>:13 HEAD
-rw-r--r-- <span class="token number">1</span> <span class="token number">16968</span> <span class="token number">197609</span> <span class="token number">130</span> Aug <span class="token number">21</span> <span class="token number">23</span>:13 config
-rw-r--r-- <span class="token number">1</span> <span class="token number">16968</span> <span class="token number">197609</span>  <span class="token number">73</span> Aug <span class="token number">21</span> <span class="token number">23</span>:13 description
drwxr-xr-x <span class="token number">1</span> <span class="token number">16968</span> <span class="token number">197609</span>   <span class="token number">0</span> Aug <span class="token number">21</span> <span class="token number">23</span>:13 hooks/
drwxr-xr-x <span class="token number">1</span> <span class="token number">16968</span> <span class="token number">197609</span>   <span class="token number">0</span> Aug <span class="token number">21</span> <span class="token number">23</span>:13 info/
drwxr-xr-x <span class="token number">1</span> <span class="token number">16968</span> <span class="token number">197609</span>   <span class="token number">0</span> Aug <span class="token number">21</span> <span class="token number">23</span>:13 objects/
drwxr-xr-x <span class="token number">1</span> <span class="token number">16968</span> <span class="token number">197609</span>   <span class="token number">0</span> Aug <span class="token number">21</span> <span class="token number">23</span>:13 refs/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-status-状态查看" tabindex="-1"><a class="header-anchor" href="#git-status-状态查看" aria-hidden="true">#</a> git status：状态查看</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">16968</span>@MineTing MINGW64 /d/Java/WorkSpace/Learn/Tools/Git/Git-Start <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master

No commits yet

nothing to commit <span class="token punctuation">(</span>create/copy files and use <span class="token string">"git add"</span> to track<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-add-添加至暂存区" tabindex="-1"><a class="header-anchor" href="#git-add-添加至暂存区" aria-hidden="true">#</a> git add：添加至暂存区</h2>
<ul>
<li>必须先添加到暂存区再进行提交，且 add 后面必须加文件名或者 <code v-pre>add .</code></li>
<li>如果只将文件添加到暂存区而不提交，再次修改文件添加到暂存区时会覆盖上一次的文件。</li>
<li>可以使用 <code v-pre>git rm --cached &lt;file&gt; </code> 撤销暂存文件。</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">16968</span>@MineTing MINGW64 /d/Java/WorkSpace/Learn/Tools/Git/Git-Start <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">touch</span> test01.txt

<span class="token number">16968</span>@MineTing MINGW64 /d/Java/WorkSpace/Learn/Tools/Git/Git-Start <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master

No commits yet

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">"git add &lt;file>..."</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        test01.txt

nothing added to commit but untracked files present <span class="token punctuation">(</span>use <span class="token string">"git add"</span> to track<span class="token punctuation">)</span>

<span class="token number">16968</span>@MineTing MINGW64 /d/Java/WorkSpace/Learn/Tools/Git/Git-Start <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> test01.txt

<span class="token number">16968</span>@MineTing MINGW64 /d/Java/WorkSpace/Learn/Tools/Git/Git-Start <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master

No commits yet

Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">"git rm --cached &lt;file>..."</span> to unstage<span class="token punctuation">)</span>
        new file:   test01.txt


<span class="token number">16968</span>@MineTing MINGW64 /d/Java/WorkSpace/Learn/Tools/Git/Git-Start <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-cached</span> test01.txt
error: did you mean <span class="token variable"><span class="token variable">`</span><span class="token parameter variable">--cached</span><span class="token variable">`</span></span> <span class="token punctuation">(</span>with two dashes<span class="token punctuation">)</span>?

<span class="token number">16968</span>@MineTing MINGW64 /d/Java/WorkSpace/Learn/Tools/Git/Git-Start <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master

No commits yet

Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">"git rm --cached &lt;file>..."</span> to unstage<span class="token punctuation">)</span>
        new file:   test01.txt


<span class="token number">16968</span>@MineTing MINGW64 /d/Java/WorkSpace/Learn/Tools/Git/Git-Start <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-restore-filename-修改为上一版本" tabindex="-1"><a class="header-anchor" href="#git-restore-filename-修改为上一版本" aria-hidden="true">#</a> git restore filename：修改为上一版本</h2>
<p>给文件添加内容，再 restore</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">vi</span> test01.txt

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master

No commits yet

Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">"git rm --cached &lt;file>..."</span> to unstage<span class="token punctuation">)</span>
        new file:   test01.txt

Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">"git add &lt;file>..."</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">"git restore &lt;file>..."</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        modified:   test01.txt


s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">cat</span> test01.txt
AAAAAAAA

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> restore test01.txt

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">cat</span> test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-commit-提交至本地仓库" tabindex="-1"><a class="header-anchor" href="#git-commit-提交至本地仓库" aria-hidden="true">#</a> git commit：提交至本地仓库</h2>
<p>命令：git	commit	file1, file2	–m	&quot;commit message&quot;</p>
<p>如果不加参数 -m ，则会打开 vim 添加提交信息。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master

No commits yet

Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">"git rm --cached &lt;file>..."</span> to unstage<span class="token punctuation">)</span>
        new file:   test01.txt


s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"init commit "</span> test01.txt
<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> 51842bb<span class="token punctuation">]</span> init commit
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">0</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">0</span> deletions<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> test01.txt

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h3 id="提交细节" tabindex="-1"><a class="header-anchor" href="#提交细节" aria-hidden="true">#</a> 提交细节</h3>
<p>首次必须使用 git add 命令进行追踪文件，查看 git status 会提示 include 等行为，然后在 git commit。</p>
<p>之后更新时可以直接使用 git commit –m filename 操作，会提示 update 等行为。</p>
<p>首次必须使用 git add 命令进行追踪文件，查看 git status 会提示 include 等行为，然后在 git commit。</p>
<p>之后更新时可以直接使用 git commit –m filename 操作，会提示 update 等行为。</p>
</blockquote>
<h2 id="git-log-日志查看" tabindex="-1"><a class="header-anchor" href="#git-log-日志查看" aria-hidden="true">#</a> git log：日志查看</h2>
<p>注意：空格向下翻页，b 向上翻页，q 退出。</p>
<h3 id="git-log" tabindex="-1"><a class="header-anchor" href="#git-log" aria-hidden="true">#</a> git log</h3>
<img src="@source/Java/Git-Svn/image-20221009193608680.png" alt="image-20221009193608680" style="zoom:70%;" />
<h3 id="git-log-pretty-oneline" tabindex="-1"><a class="header-anchor" href="#git-log-pretty-oneline" aria-hidden="true">#</a> git log --pretty=oneline</h3>
<figure><img src="@source/Java/Git-Svn/image-20221009193636312.png" alt="image-20221009193636312" tabindex="0" loading="lazy"><figcaption>image-20221009193636312</figcaption></figure>
<h3 id="git-log-oneline" tabindex="-1"><a class="header-anchor" href="#git-log-oneline" aria-hidden="true">#</a> git log --oneline</h3>
<figure><img src="@source/Java/Git-Svn/image-20221009193713561.png" alt="image-20221009193713561" tabindex="0" loading="lazy"><figcaption>image-20221009193713561</figcaption></figure>
<h3 id="git-reflog-推荐" tabindex="-1"><a class="header-anchor" href="#git-reflog-推荐" aria-hidden="true">#</a> git reflog（推荐）</h3>
<p 移动到当前版本需要多少步="">HEAD@</p>
<p>通过HEAD指针管理版本。</p>
<figure><img src="@source/Java/Git-Svn/image-20221009193735748.png" alt="image-20221009193735748" tabindex="0" loading="lazy"><figcaption>image-20221009193735748</figcaption></figure>
<h3 id="git-reset-版本回退" tabindex="-1"><a class="header-anchor" href="#git-reset-版本回退" aria-hidden="true">#</a> git reset：版本回退</h3>
<h2 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h2>
<h3 id="分支概述" tabindex="-1"><a class="header-anchor" href="#分支概述" aria-hidden="true">#</a> 分支概述</h3>
<p>​		使用分支可以将自己的工作从开发主线上分离开，以免影响开发主线，Git的master分支并不是一个特殊分支，由</p>
<p>git init 命令默认创建。</p>
<p>分支命名规范：</p>
<p>git 分支分为集成分支、功能分支和修复分支，分别命名为 develop、feature 和 hotfix。以及发布版本release。</p>
<figure><img src="@source/Java/Git-Svn/clip_image001.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>分支的好处</p>
<ul>
<li>同时并行推进多个功能开发，提高开发效率。</li>
<li>各个分支在开发过程中，如果某一个分支开发失败，不会对其他分支有任何影响。失败的分支删除重新开始即可。</li>
</ul>
<h3 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支" aria-hidden="true">#</a> 创建分支</h3>
<p>git branch 分支名</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h3>
<p>git branch checkout 分支名</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> checkout develop
Switched to branch <span class="token string">'develop'</span>
M       test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看分支" tabindex="-1"><a class="header-anchor" href="#查看分支" aria-hidden="true">#</a> 查看分支</h3>
<p>git branch –v</p>
<p><strong>* 表示当前分支</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
* develop 51842bb init commit
  master  51842bb init commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h3>
<p>第一步： 切换到接受修改的分支</p>
<p>第二步：执行 merge 命令 git merge [有新内容分支名]</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
$ <span class="token function">vi</span> test01.txt

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> test01.txt
warning: LF will be replaced by CRLF <span class="token keyword">in</span> test01.txt.
The <span class="token function">file</span> will have its original line endings <span class="token keyword">in</span> your working directory

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"develop modify"</span> test01.txt
warning: LF will be replaced by CRLF <span class="token keyword">in</span> test01.txt.
The <span class="token function">file</span> will have its original line endings <span class="token keyword">in</span> your working directory
<span class="token punctuation">[</span>develop b676b2f<span class="token punctuation">]</span> develop modify
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
$ <span class="token function">git</span> checkout master
Switched to branch <span class="token string">'master'</span>

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">cat</span> <span class="token parameter variable">-n</span> test01.txt
     <span class="token number">1</span>  AAAAAAAA
     <span class="token number">2</span>  BBBBBBBB

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> merge develop
Updating 04f7540<span class="token punctuation">..</span>b676b2f
Fast-forward
 test01.txt <span class="token operator">|</span> <span class="token number">2</span> ++
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">cat</span> <span class="token parameter variable">-n</span> test01.txt
     <span class="token number">1</span>  AAAAAAAA
     <span class="token number">2</span>  BBBBBBBB
     <span class="token number">3</span>  CCCCCCCC
     <span class="token number">4</span>  DDDDDDDD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决冲突" tabindex="-1"><a class="header-anchor" href="#解决冲突" aria-hidden="true">#</a> 解决冲突</h3>
<p>两个分支对同一个文件的相同部分做了不同的改变。在合并分支时会产生冲突。</p>
<p>（一个分支解决了冲突，那么另一个分支就不必再解决冲突，增量式版本控制）</p>
<p>第一步：编辑文件，删除特殊符号。</p>
<p>第二步：把文件修改到满意的程度，保存退出。</p>
<p>第三步：git add [文件名]。(必须有这个步骤)</p>
<p>第四步：git commit -m &quot;日志信息&quot;。注意：此时 commit 一定不能带具体文件名。</p>
<blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">vi</span> test01.txt
$ <span class="token function">cat</span> <span class="token parameter variable">-n</span> test01.txt
     <span class="token number">1</span>  AAAAAAAA
     <span class="token number">2</span>  BBBBBBBB
     <span class="token number">3</span>  update by master
     <span class="token number">4</span>  DDDDDDDD
s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"update by master"</span> test01.txt
<span class="token punctuation">[</span>master dd04802<span class="token punctuation">]</span> update by master
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> checkout develop
Switched to branch <span class="token string">'develop'</span>

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
$ <span class="token function">vi</span> test01.txt
$ <span class="token function">cat</span> <span class="token parameter variable">-n</span> test01.txt
     <span class="token number">1</span>  AAAAAAAA
     <span class="token number">2</span>  BBBBBBBB
     <span class="token number">3</span>  update by develop
     <span class="token number">4</span>  DDDDDDDD
s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"update by develop"</span> test01.txt
<span class="token punctuation">[</span>develop 474410e<span class="token punctuation">]</span> update by develop
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
$ <span class="token function">git</span> checkout master
Switched to branch <span class="token string">'master'</span>

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> merge develop
Auto-merging test01.txt
CONFLICT <span class="token punctuation">(</span>content<span class="token punctuation">)</span>: Merge conflict <span class="token keyword">in</span> test01.txt
Automatic merge failed<span class="token punctuation">;</span> fix conflicts and <span class="token keyword">then</span> commit the result.

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">cat</span> <span class="token parameter variable">-n</span> test01.txt
AAAAAAAA
BBBBBBBB
<span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;</span> HEAD
update by master
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
update by develop
<span class="token operator">>></span><span class="token operator">>></span><span class="token operator">>></span><span class="token operator">></span> develop
DDDDDDDD
$ <span class="token function">vi</span> test01.txt
s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"resolve conflict"</span>
<span class="token punctuation">[</span>master 32699c6<span class="token punctuation">]</span> resolve conflict

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">cat</span> <span class="token parameter variable">-n</span> test01.txt
     <span class="token number">1</span>  AAAAAAAA
     <span class="token number">2</span>  BBBBBBBB
     <span class="token number">3</span>  update by master
     <span class="token number">4</span>  update by develop
     <span class="token number">5</span>  DDDDDDDD

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> checkout develop
Switched to branch <span class="token string">'develop'</span>
s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
$ <span class="token function">cat</span> <span class="token parameter variable">-n</span> test01.txt
     <span class="token number">1</span>  AAAAAAAA
     <span class="token number">2</span>  BBBBBBBB
     <span class="token number">3</span>  update by develop
     <span class="token number">4</span>  DDDDDDDD

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然 master 合并 develop 分支时，解决了冲突，但 develop 本身没有合并 master，文件仍然是原来的。</p>
</blockquote>
<h3 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支" aria-hidden="true">#</a> 删除分支</h3>
<p>删除本地分支：</p>
<p>git	branch	–d	branchName</p>
<p>如果要删除的分支中进行了改动，需要强制删除，可以把 -d 改为 –D，如在 b1 分支修改文件并提交到本地仓库，但未提交到远程仓库。</p>
<p>git	branch	–D	branchName</p>
<p>删除远程分支</p>
<p>git	push	origin	–d	branchName</p>
<h3 id="标签操作" tabindex="-1"><a class="header-anchor" href="#标签操作" aria-hidden="true">#</a> 标签操作</h3>
<p>​		像其他版本控制系统（VCS） 一样，Git 可以给历史中的某一个提交打上标签以示重要。比较有代表性的是人们会使用这个功能来标记发布结点（v1.0、 v1.2等） 。标签指的是某个分支某个特定时间点的状态通过标签，可以很方便的切换到标记时的状态。</p>
<h4 id="查看标签、创建标签" tabindex="-1"><a class="header-anchor" href="#查看标签、创建标签" aria-hidden="true">#</a> 查看标签、创建标签</h4>
<p>创建标签：git tag [tagName]</p>
<p>列出所有标签：git tag</p>
<p>查看标签：git show [tag]</p>
<p>将标签推送至远程仓库，提交指定tag：git push [remote] [tag]</p>
<h4 id="检出标签" tabindex="-1"><a class="header-anchor" href="#检出标签" aria-hidden="true">#</a> 检出标签</h4>
<p>git	checkout	-b	[branch]	[tag]</p>
<h4 id="删除标签" tabindex="-1"><a class="header-anchor" href="#删除标签" aria-hidden="true">#</a> 删除标签</h4>
<p>删除本地标签：git	tag	-d	[tag]</p>
<p>删除远程标签：git	push	origin	:refs/tags/[tag]</p>
<h1 id="git-保存版本的机制" tabindex="-1"><a class="header-anchor" href="#git-保存版本的机制" aria-hidden="true">#</a> Git 保存版本的机制</h1>
<h2 id="hsah算法简介" tabindex="-1"><a class="header-anchor" href="#hsah算法简介" aria-hidden="true">#</a> HSAH算法简介</h2>
<ol>
<li>
<p>哈希是一个系列的加密算法，各个不同的哈希算法虽然加密强度不同，但是有以下几个共同点：</p>
</li>
<li>
<p>不管输入数据的数据量有多大，输入同一个哈希算法，得到的加密结果长度固定。</p>
</li>
<li>
<p>哈希算法确定，输入数据确定，输出数据能够保证不变。</p>
</li>
<li>
<p>哈希算法确定，输入数据有变化，输出数据一定有变化，而且通常变化很大。</p>
</li>
<li>
<p>哈希算法不可逆 Git 底层采用的是 SHA-1 算法。</p>
</li>
</ol>
<p>哈希算法可以被用来验证文件。原理如下图所示：</p>
<figure><img src="@source/Java/Git-Svn/image-20221009212049235.png" alt="image-20221009212049235" tabindex="0" loading="lazy"><figcaption>image-20221009212049235</figcaption></figure>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
<h2 id="集中式版本控制工具的文件管理机制" tabindex="-1"><a class="header-anchor" href="#集中式版本控制工具的文件管理机制" aria-hidden="true">#</a> 集中式版本控制工具的文件管理机制</h2>
<p>以文件变更列表的方式存储信息。这类系统将它们保存的信息看作是一组基本文件和每个文件随时间逐步累积的差异。（增量式管理，每次将最新增加的内容保存，需要的时候拼接为一个完整的文件）。</p>
<figure><img src="@source/Java/Git-Svn/clip_image002.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2 id="git-的文件管理机制" tabindex="-1"><a class="header-anchor" href="#git-的文件管理机制" aria-hidden="true">#</a> Git 的文件管理机制</h2>
<p>Git 把数据看作是小型文件系统的一组快照。每次提交更新时 Git 都会对当前的全部文件制作一个快照并保存这个快照的索引。为了高效，如果文件没有修改， Git 不再重新存储该文件，而是只保留一个链接指向之前存储的文件。所以 Git 的工作方式可以称之为快照流。</p>
<figure><img src="@source/Java/Git-Svn/clip_image004.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2 id="git-文件管理机制细节" tabindex="-1"><a class="header-anchor" href="#git-文件管理机制细节" aria-hidden="true">#</a> Git 文件管理机制细节</h2>
<p>Git 的“提交对象“</p>
<figure><img src="@source/Java/Git-Svn/clip_image006.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>提交对象及其父对象形成的链条</p>
<h2 id="git管理分支的本质-创建和移动指针" tabindex="-1"><a class="header-anchor" href="#git管理分支的本质-创建和移动指针" aria-hidden="true">#</a> Git管理分支的本质：创建和移动指针</h2>
<figure><img src="@source/Java/Git-Svn/clip_image008.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h1 id="远程库操作" tabindex="-1"><a class="header-anchor" href="#远程库操作" aria-hidden="true">#</a> 远程库操作</h1>
<p>注册账号：<a href="https://github.com/" target="_blank" rel="noopener noreferrer">https://github.com/<ExternalLinkIcon/></a></p>
<p>初始化本地库，本地库的名字可以和远程库名字不一致。</p>
<figure><img src="@source/Java/Git-Svn/clip_image010.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2 id="远程库的创建" tabindex="-1"><a class="header-anchor" href="#远程库的创建" aria-hidden="true">#</a> 远程库的创建</h2>
<p>注册账号，创建仓库。</p>
<figure><img src="@source/Java/Git-Svn/image-20221009212431491.png" alt="image-20221009212431491" tabindex="0" loading="lazy"><figcaption>image-20221009212431491</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/image-20221009213317207.png" alt="image-20221009213317207" tabindex="0" loading="lazy"><figcaption>image-20221009213317207</figcaption></figure>
<h2 id="创建和删除远程库地址别名" tabindex="-1"><a class="header-anchor" href="#创建和删除远程库地址别名" aria-hidden="true">#</a> 创建和删除远程库地址别名</h2>
<blockquote>
<ul>
<li>git remote -v ：查看当前所有远程地址别名。</li>
<li>git remote add [别名] [远程地址]</li>
<li>git remote remove origin：删除远程地址</li>
<li>git remote rm origin：删除远程地</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/mineting/test-project

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>
origin  https://gitee.com/mineting/test-project <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin  https://gitee.com/mineting/test-project <span class="token punctuation">(</span>push<span class="token punctuation">)</span>

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
$ <span class="token function">git</span> remote remove origin

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>develop<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h2 id="推送" tabindex="-1"><a class="header-anchor" href="#推送" aria-hidden="true">#</a> 推送</h2>
<p>git	push	别名	分支名</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> push origin master
Enumerating objects: <span class="token number">15</span>, done.
Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">15</span>/15<span class="token punctuation">)</span>, done.
Delta compression using up to <span class="token number">4</span> threads
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">6</span>/6<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">15</span>/15<span class="token punctuation">)</span>, <span class="token number">1.11</span> KiB <span class="token operator">|</span> <span class="token number">378.00</span> KiB/s, done.
Total <span class="token number">15</span> <span class="token punctuation">(</span>delta <span class="token number">1</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
remote: Powered by GITEE.COM <span class="token punctuation">[</span>GNK-6.4<span class="token punctuation">]</span>
To https://gitee.com/mineting/test-project
 * <span class="token punctuation">[</span>new branch<span class="token punctuation">]</span>      master -<span class="token operator">></span> master

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="克隆" tabindex="-1"><a class="header-anchor" href="#克隆" aria-hidden="true">#</a> 克隆</h2>
<p>git	clone	远程地址</p>
<blockquote>
<p>clone 的作用：（与fetch的不同）</p>
<ol>
<li>
<p>完整的把远程库下载到本地。</p>
</li>
<li>
<p>创建 origin 远程地址别名。</p>
</li>
<li>
<p>初始化本地库。</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest2
$ <span class="token function">git</span> clone https://gitee.com/mineting/test-project.git
Cloning into <span class="token string">'test-project'</span><span class="token punctuation">..</span>.
remote: Enumerating objects: <span class="token number">15</span>, done.
remote: Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">15</span>/15<span class="token punctuation">)</span>, done.
remote: Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">6</span>/6<span class="token punctuation">)</span>, done.
remote: Total <span class="token number">15</span> <span class="token punctuation">(</span>delta <span class="token number">1</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
Receiving objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">15</span>/15<span class="token punctuation">)</span>, done.
Resolving deltas: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">1</span>/1<span class="token punctuation">)</span>, done.

s@DESKTOP-L6TEP63 MINGW64 /c/Java/WorkSpace/GitTest2
$ <span class="token function">ls</span> <span class="token parameter variable">-a</span>
./  <span class="token punctuation">..</span>/  test-project/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h2 id="邀请团队成员" tabindex="-1"><a class="header-anchor" href="#邀请团队成员" aria-hidden="true">#</a> 邀请团队成员</h2>
<p>仓库可以先设置为所有人可见。始终只有一个仓库。</p>
<p>git clone 仓库地址</p>
<p>但是提交修改需要用户权限。</p>
<figure><img src="@source/Java/Git-Svn/clip_image002-1665322748033.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image004-1665322748035.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image006-1665322748035.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image007.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image009.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>通过用户fightforting为用户fightforfei设置提交的权限。</p>
<figure><img src="@source/Java/Git-Svn/clip_image011.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image013.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image015.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>再次提交修改。</p>
<figure><img src="@source/Java/Git-Svn/clip_image017.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2 id="拉取远程库修改的内容" tabindex="-1"><a class="header-anchor" href="#拉取远程库修改的内容" aria-hidden="true">#</a> 拉取远程库修改的内容</h2>
<p>其中pull可以看做fetch + merge。</p>
<ul>
<li>
<p>git fetch [远程库地址别名] [远程分支名]。</p>
</li>
<li>
<p>git merge [远程库地址别名/远程分支名]。</p>
</li>
<li>
<p>git pull [远程库地址别名] [远程分支名]。</p>
</li>
<li>
<p>一般对于不确定的修改，可以先 fetch 查看修改了那些内容或者是否产生冲突，以便决定是否 merge。</p>
<p>当 git fetch origin master 执行完成之后，文件未更新：拉取的文件放在了.git/objects 里面，需要通过merge origin/master合并。</p>
</li>
</ul>
<ol>
<li>
<p>从远程拉取内容：git fetch origin master</p>
</li>
<li>
<p>切换远程分支：git checkout origin/master</p>
</li>
<li>
<p>切换本地分支：git checkout master</p>
</li>
<li>
<p>merge远程分支：git merge origin/master</p>
</li>
</ol>
<p><img src="@source/Java/Git-Svn/clip_image001-1665323025500.png" alt="img" loading="lazy"> <img src="@source/Java/Git-Svn/clip_image003.jpg" alt="img" loading="lazy"></p>
<figure><img src="@source/Java/Git-Svn/clip_image005.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>直接使用pull</p>
<figure><img src="@source/Java/Git-Svn/clip_image006.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image007-1665323025501.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2 id="协同开发的冲突问题" tabindex="-1"><a class="header-anchor" href="#协同开发的冲突问题" aria-hidden="true">#</a> 协同开发的冲突问题</h2>
<p>如果不是基于 GitHub 远程库的最新版所做的修改，不能推送，必须先拉取。</p>
<p>拉取下来后如果进入冲突状态，则按照“分支冲突解决”操作解决即可。</p>
<figure><img src="@source/Java/Git-Svn/clip_image008.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image010-1665323025502.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image012.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image014.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2 id="跨团队协作-1" tabindex="-1"><a class="header-anchor" href="#跨团队协作-1" aria-hidden="true">#</a> 跨团队协作</h2>
<p>模拟操作</p>
<figure><img src="@source/Java/Git-Svn/clip_image016.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image018.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>使用另一个账号进行fork。</p>
<figure><img src="@source/Java/Git-Svn/clip_image020.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image021.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image023.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image025.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image027.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><img src="@source/Java/Git-Svn/clip_image029.jpg" alt="img" loading="lazy"><img src="@source/Java/Git-Svn/clip_image031.jpg" alt="img" loading="lazy"></p>
<figure><img src="@source/Java/Git-Svn/clip_image033.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image035.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>merge完成即可。</p>
<h2 id="使用ssh免密登陆" tabindex="-1"><a class="header-anchor" href="#使用ssh免密登陆" aria-hidden="true">#</a> 使用SSH免密登陆</h2>
<p>SSH免密登陆的缺点：只能设置一个登陆用户。</p>
<p>对于HTTPS的方式，控制面板的凭据管理器不一定会保存，需要每次输入密码（也不一定）。</p>
<ol>
<li>
<p>进入当前用户的家目录 cd ~。</p>
</li>
<li>
<p>删除 .ssh 目录rm -rf .ssh。</p>
</li>
<li>
<p>运行命令生成 .ssh 密钥目录ssh-keygen -t rsa -C <a href="mailto:1696833130@qq.com">1696833130@qq.com</a> [注意： -C是大写的 C]。</p>
</li>
<li>
<p>进入 .ssh 目录查看文件id_rsa.pub 文件内容。</p>
</li>
<li>
<p>复制 id_rsa.pub 文件内容，登录 GitHub，点击用户个人设置SSH and GPG keys 。</p>
</li>
<li>
<p>回到 Git bash 创建远程地址别名 git remote add origin_ssh <a href="mailto:git@gitee.com">git@gitee.com</a>:fightforting/git-test.git</p>
</li>
<li>
<p>推送文件进行测试</p>
</li>
</ol>
<figure><img src="@source/Java/Git-Svn/clip_image036.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image038.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image040.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image042.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h1 id="git-图形化界面操作" tabindex="-1"><a class="header-anchor" href="#git-图形化界面操作" aria-hidden="true">#</a> Git 图形化界面操作</h1>
<h2 id="eclipse-中使用-git-插件" tabindex="-1"><a class="header-anchor" href="#eclipse-中使用-git-插件" aria-hidden="true">#</a> Eclipse 中使用 Git 插件</h2>
<h3 id="工程初始化为本地库" tabindex="-1"><a class="header-anchor" href="#工程初始化为本地库" aria-hidden="true">#</a> 工程初始化为本地库</h3>
<p>创建Maven工程</p>
<p>新建的maven项目出现 src/main/java（missing）</p>
<p>右击项目-properties-Java Build Path-更改JRE System Library。这里默认的是Execution environment,修改成本地的jdk根目录（jdk/bin的上级目录）</p>
<p>工程右键——&gt;Team——&gt;ShareProject——&gt;Git</p>
<p>文件图标含义</p>
<figure><img src="@source/Java/Git-Svn/clip_image002-1665323096014.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image004-1665323096014.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image006-1665323096015.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="忽略相关文件" tabindex="-1"><a class="header-anchor" href="#忽略相关文件" aria-hidden="true">#</a> 忽略相关文件</h3>
<p>Eclipse 特定文件，这些都是 Eclipse 为了管理我们创建的工程而维护的文件，和开发的代码没有直接关系。最好不要在 Git 中进行追踪，也就是把它们忽略。同一个团队中很难保证大家使用相同的 IDE 工具，而 IDE工具不同时，相关工程特定文件就有可能不同。如果这些文件加入版本控制，那么开发时很可能需要为了这些文件解决冲突。</p>
<p>.classpath 文件</p>
<p>.project 文件</p>
<p>.settings 目录下所有文件</p>
<p>GitHub 官网样例文件：</p>
<p><a href="https://github.com/github/gitignore" target="_blank" rel="noopener noreferrer">https://github.com/github/gitignore<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/github/gitignore/blob/master/Java.gitignore" target="_blank" rel="noopener noreferrer">https://github.com/github/gitignore/blob/master/Java.gitignore<ExternalLinkIcon/></a></p>
<p>编辑本地忽略配置文件，文件名任意。在~/.gitconfig 文件中引入上述文件。</p>
<p>[core]</p>
<p>excludesfile = C:/Users/Lenovo/Java.gitignore</p>
<p>【注意：这里路径中一定要使用“/”，不能使用“\”】</p>
<p>[user]     name  = liufei     email  = <a href="mailto:1696833130@qq.com">1696833130@qq.com</a>  [core]     excludesfile  = C:/Users/Administrator/java.gitignore</p>
<p>在Eclipse中查看是否成功配置</p>
<figure><img src="@source/Java/Git-Svn/clip_image008-1665323096015.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="本地库的操作" tabindex="-1"><a class="header-anchor" href="#本地库的操作" aria-hidden="true">#</a> 本地库的操作</h3>
<p>Add to Index</p>
<figure><img src="@source/Java/Git-Svn/clip_image009.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>commit： ctrl + #</p>
<figure><img src="@source/Java/Git-Svn/clip_image011-1665323096015.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="推送到远程库" tabindex="-1"><a class="header-anchor" href="#推送到远程库" aria-hidden="true">#</a> 推送到远程库</h3>
<p>先创建远程库</p>
<p>Team——&gt;remote——&gt;push</p>
<figure><img src="@source/Java/Git-Svn/clip_image012.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image013.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><img src="@source/Java/Git-Svn/clip_image014.png" alt="img" loading="lazy"> <img src="@source/Java/Git-Svn/clip_image015.png" alt="img" loading="lazy"></p>
<h3 id="远程库克隆到本地" tabindex="-1"><a class="header-anchor" href="#远程库克隆到本地" aria-hidden="true">#</a> 远程库克隆到本地</h3>
<figure><img src="@source/Java/Git-Svn/clip_image016.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image017.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image018.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image019.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image021.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image022.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image023.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image024.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>将其转换为eclipse工程</p>
<p>工程——&gt;Configure——&gt;Convert To Maven Project</p>
<figure><img src="@source/Java/Git-Svn/clip_image025.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>eclipse会自动生成相关工程配置文件。</p>
<h3 id="解决冲突-1" tabindex="-1"><a class="header-anchor" href="#解决冲突-1" aria-hidden="true">#</a> 解决冲突</h3>
<p>先创建一个工程，提交到远程仓库，克隆到本地。</p>
<p>两个工程修改同一个文件，在本地commit之后push到远程仓库。</p>
<p>pull工程项目。</p>
<figure><img src="@source/Java/Git-Svn/clip_image026.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>重新pull最新的版本</p>
<figure><img src="@source/Java/Git-Svn/clip_image027.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>可以手动修改，也可以使用merge tool修改。</p>
<figure><img src="@source/Java/Git-Svn/clip_image029-1665323096016.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>使用merge tool修改当前版本，再次提交。</p>
<figure><img src="@source/Java/Git-Svn/clip_image030.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="分支的切换" tabindex="-1"><a class="header-anchor" href="#分支的切换" aria-hidden="true">#</a> 分支的切换</h3>
<p>切换分支》修改》提交》拉取》审查》合并</p>
<p>switch</p>
<figure><img src="@source/Java/Git-Svn/clip_image031.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image032.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><img src="@source/Java/Git-Svn/clip_image033.png" alt="img" loading="lazy"> <img src="@source/Java/Git-Svn/clip_image034.png" alt="img" loading="lazy"></p>
<figure><img src="@source/Java/Git-Svn/clip_image035.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>另一个项目拉取项目，进行审查。</p>
<p>先切换分支switch other，审查完毕，切换到master再进行合并，提交。</p>
<figure><img src="@source/Java/Git-Svn/clip_image036-1665323096016.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image037.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image038.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image038.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>审查完毕，切换到master合并。</p>
<figure><img src="@source/Java/Git-Svn/clip_image039.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>合并成功后push到远程库。</p>
<h2 id="idea-中使用git" tabindex="-1"><a class="header-anchor" href="#idea-中使用git" aria-hidden="true">#</a> Idea 中使用Git</h2>
<h3 id="配置忽略文件" tabindex="-1"><a class="header-anchor" href="#配置忽略文件" aria-hidden="true">#</a> 配置忽略文件</h3>
<p>idea中的.idea、.impl等文件，需要忽略。</p>
<p>创建忽略文件的规则配置在~/xxx.ignore（后缀必须是ignore），一般在家目录创建，然后在.git中引入。</p>
<figure><img src="@source/Java/Git-Svn/clip_image002-1665323373178.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>在.gitconfig中引入：（注意正斜线）</p>
<p>[user]</p>
<p>name = liufei</p>
<p>email = <a href="mailto:1696833130@qq.com">1696833130@qq.com</a></p>
<p>[core]</p>
<p>excludesfile = C:/Users/Administrator/java.gitignore</p>
<h3 id="初始化本地库、添加与提交" tabindex="-1"><a class="header-anchor" href="#初始化本地库、添加与提交" aria-hidden="true">#</a> 初始化本地库、添加与提交</h3>
<figure><img src="@source/Java/Git-Svn/clip_image004-1665323373178.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image006-1665323373178.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image008-1665323373178.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image010-1665323373179.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image012-1665323373179.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="切换代码版本" tabindex="-1"><a class="header-anchor" href="#切换代码版本" aria-hidden="true">#</a> 切换代码版本</h3>
<figure><img src="@source/Java/Git-Svn/clip_image014-1665323373179.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image016-1665323373179.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="创建与切换分支" tabindex="-1"><a class="header-anchor" href="#创建与切换分支" aria-hidden="true">#</a> 创建与切换分支</h3>
<p>创建方式一：项目右键git--&gt;repository--&gt;branch</p>
<figure><img src="@source/Java/Git-Svn/clip_image018-1665323373179.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>创建方式二：</p>
<figure><img src="@source/Java/Git-Svn/clip_image019-1665323373179.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image020.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>切换分支</p>
<figure><img src="@source/Java/Git-Svn/clip_image021-1665323373179.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="合并分支-1" tabindex="-1"><a class="header-anchor" href="#合并分支-1" aria-hidden="true">#</a> 合并分支</h3>
<figure><img src="@source/Java/Git-Svn/clip_image022-1665323373179.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image023-1665323373179.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="解决冲突-2" tabindex="-1"><a class="header-anchor" href="#解决冲突-2" aria-hidden="true">#</a> 解决冲突</h3>
<figure><img src="@source/Java/Git-Svn/clip_image024-1665323373179.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image025-1665323373179.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image027-1665323373179.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="推送-1" tabindex="-1"><a class="header-anchor" href="#推送-1" aria-hidden="true">#</a> 推送</h3>
<p>一般先在远程库建立一个仓库再进行推送。</p>
<figure><img src="@source/Java/Git-Svn/clip_image028.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image029.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image030-1665323373179.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image032.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>也可以切换https和ssh：</p>
<figure><img src="@source/Java/Git-Svn/clip_image034.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image036.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="拉取" tabindex="-1"><a class="header-anchor" href="#拉取" aria-hidden="true">#</a> 拉取</h3>
<p>在网页中修改Git的代码，本地也进行修改，并拉取测试。</p>
<p>一般在push之前先进行拉取。</p>
<h3 id="克隆-1" tabindex="-1"><a class="header-anchor" href="#克隆-1" aria-hidden="true">#</a> 克隆</h3>
<figure><img src="@source/Java/Git-Svn/clip_image037-1665323373179.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/Java/Git-Svn/clip_image039.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h1 id="git工作流" tabindex="-1"><a class="header-anchor" href="#git工作流" aria-hidden="true">#</a> Git工作流</h1>
<h2 id="集中式" tabindex="-1"><a class="header-anchor" href="#集中式" aria-hidden="true">#</a> 集中式</h2>
<h2 id="gitflow" tabindex="-1"><a class="header-anchor" href="#gitflow" aria-hidden="true">#</a> GitFlow</h2>
<h2 id="forking" tabindex="-1"><a class="header-anchor" href="#forking" aria-hidden="true">#</a> ForKing</h2>
<h1 id="gitlab-服务器搭建" tabindex="-1"><a class="header-anchor" href="#gitlab-服务器搭建" aria-hidden="true">#</a> Gitlab 服务器搭建</h1>
<h2 id="官网地址" tabindex="-1"><a class="header-anchor" href="#官网地址" aria-hidden="true">#</a> 官网地址</h2>
<p>首页：<a href="https://about.gitlab.com/" target="_blank" rel="noopener noreferrer">https://about.gitlab.com/<ExternalLinkIcon/></a></p>
<p>安装说明：<a href="https://about.gitlab.com/installation/" target="_blank" rel="noopener noreferrer">https://about.gitlab.com/installation/<ExternalLinkIcon/></a></p>
<h2 id="安装命令" tabindex="-1"><a class="header-anchor" href="#安装命令" aria-hidden="true">#</a> 安装命令</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">curl</span> policycoreutils-python openssh-server cronie 
<span class="token function">sudo</span> lokkit <span class="token parameter variable">-s</span> http <span class="token parameter variable">-s</span> <span class="token function">ssh</span> <span class="token function">sudo</span> yum <span class="token function">install</span> postfix <span class="token function">sudo</span> <span class="token function">service</span> postfix start 
<span class="token function">sudo</span> <span class="token function">chkconfig</span> postfix on 
<span class="token function">curl</span> https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span> 
<span class="token function">sudo</span> <span class="token assign-left variable">EXTERNAL_URL</span><span class="token operator">=</span><span class="token string">"http://gitlab.example.com"</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gitlab-ee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项：</strong></p>
<p>yum 安装 gitlab-ee(或 ce)时，需要联网下载几百M的安装文件，非常耗时，所以应提前把所需 RPM 包下载并安装好。ce和ee的区别：企业版和社区版的区别。</p>
<p>下载地址为：</p>
<p><a href="https://packages.gitlab.com/gitlab/gitlab-ce/packages/el/7/gitlab-ce-10.8.2-ce.0.el7.x86_64.rpm" target="_blank" rel="noopener noreferrer">https://packages.gitlab.com/gitlab/gitlab-ce/packages/el/7/gitlab-ce-10.8.2-ce.0.el7.x86_64.rpm<ExternalLinkIcon/></a></p>
<figure><img src="@source/Java/Git-Svn/clip_image002-1665323485976.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>下载完成之后通过工具SercureCRT或者Filezal进行文件传输。安装在/opt目录下。</p>
<p>调整后的安装过程：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> /opt/gitlab-ce-10.8.2-ce.0.el7.x86_64.rpm 
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">curl</span> policycoreutils-python openssh-server cronie <span class="token function">sudo</span> lokkit <span class="token parameter variable">-s</span> http <span class="token parameter variable">-s</span> <span class="token function">ssh</span> 
<span class="token function">sudo</span> yum <span class="token function">install</span> postfix <span class="token function">sudo</span> <span class="token function">service</span> postfix start 
<span class="token function">sudo</span> <span class="token function">chkconfig</span> postfix on 
<span class="token function">curl</span> https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span> 
<span class="token function">sudo</span> <span class="token assign-left variable">EXTERNAL_URL</span><span class="token operator">=</span><span class="token string">"http://gitlab.example.com"</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gitlab-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用一个脚本文件执行：</p>
<p>vim <a href="http://install.sh" target="_blank" rel="noopener noreferrer">install.sh<ExternalLinkIcon/></a>：复制以上的命令行</p>
<p>chmod 755 <a href="http://install.sh" target="_blank" rel="noopener noreferrer">install.sh<ExternalLinkIcon/></a></p>
<p>./install.sh</p>
<p>执行完成重启reboot。</p>
<p>重启完成之后进行配置：</p>
<p>初始化配置 gitlab gitlab-ctl reconfigure。（花费时间比较长）</p>
<p>启动 gitlab 服务 gitlab-ctl start。</p>
<p>停止 gitlab 服务 gitlab-ctl stop。</p>
<p>停止防火墙：service firewalld stop。</p>
<p>使用浏览器访问：</p>
<p>访问 Linux 服务器 IP 地址即可，如果想访问 EXTERNAL_URL 指定的域名，还需要配置域名服务器或本地 hosts 文件。 初次登录时需要为 gitlab 的 root 用户设置密码。</p>
</div></template>


