<template><div><div align='center'><font size='70'><b>Oracle</b></font></div>
<h1 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h1>
<h2 id="oracle简介" tabindex="-1"><a class="header-anchor" href="#oracle简介" aria-hidden="true">#</a> Oracle简介</h2>
<blockquote>
<p>​		ORACLE 数据库系统是美国 ORACLE 公司（甲骨文）提供的以分布式数据库为核心的一组软件产品，是目前最流行的客户/服务器（CLIENT/SERVER）或B/S体系结构的数据库之一。比如 SilverStream 就是基于数据库的一种中间件。ORACLE 数据库是目前世界上使用最为广泛的数据库管理系统，作为一个通用的数据库系统，它具有完整的数据管理功能：作为一个关系数据库，它是一个完备关系的产品：作为分布式数据库它实现了分布式处理功能。</p>
</blockquote>
<h2 id="oracle的安装-略" tabindex="-1"><a class="header-anchor" href="#oracle的安装-略" aria-hidden="true">#</a> Oracle的安装（略）</h2>
<blockquote>
<p>此处以Oracle11g为例，注意解锁：口令管理：Scott 用户</p>
</blockquote>
<h2 id="oracle网络配置" tabindex="-1"><a class="header-anchor" href="#oracle网络配置" aria-hidden="true">#</a> Oracle网络配置</h2>
<blockquote>
<ul>
<li>
<p>修改路径【Oracle11g\product\11.2.0\dbhome_1\NETWORK\ADMIN】下的两个文件：修改其中的 IP。</p>
<ul>
<li>
<p>listener.ora</p>
<figure><img src="@source/DataBase/Oracle/Oracle_listener.ora.png" alt="Oracle_listener.ora.png" tabindex="0" loading="lazy"><figcaption>Oracle_listener.ora.png</figcaption></figure>
</li>
<li>
<p>tnsnames.ora</p>
<figure><img src="@source/DataBase/Oracle/Oracle_tnsnames.ora.png" alt="Oracle_tnsnames.ora.png" tabindex="0" loading="lazy"><figcaption>Oracle_tnsnames.ora.png</figcaption></figure>
</li>
</ul>
</li>
<li>
<p>重新启动服务</p>
<p>先启动 Listener，再启动 Service。</p>
</li>
</ul>
</blockquote>
<h2 id="dos-及连接工具配置" tabindex="-1"><a class="header-anchor" href="#dos-及连接工具配置" aria-hidden="true">#</a> DOS 及连接工具配置</h2>
<blockquote>
<p><strong>DOS：sqlplus scott/scott@localhost:1521/orcl</strong></p>
<p>windows 服务：<strong>services.msc</strong></p>
<p>select * from tab;</p>
</blockquote>
<h2 id="oracle体系结构" tabindex="-1"><a class="header-anchor" href="#oracle体系结构" aria-hidden="true">#</a> Oracle体系结构</h2>
<h3 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h3>
<blockquote>
<p>​		database Oracle数据库是数据的物理存储。这就包括(数据文件ORA或者DBF、控制文件、联机日志、参数文件)。其实Oracle数据库的概念和其它数据库不一样，这里的数据库是一个操作系统只有一个库。可以看作是Oracle就只有一个大数据库。</p>
</blockquote>
<h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3>
<blockquote>
<p>​		一个 Oracle 实例( Oracle Instance)有一系列的后台进程( Backguound Processes) 和内存结构 ( Memory Structures) 组成。一个数据库可以有 n 个实例。</p>
</blockquote>
<h3 id="数据文件-dbf" tabindex="-1"><a class="header-anchor" href="#数据文件-dbf" aria-hidden="true">#</a> 数据文件（dbf）</h3>
<blockquote>
<p>​		数据文件是数据库的物理存储单位。数据库的数据是存储在表空间中的，真正是在某一个或者多个数据文件中。而一个表空间可以由一个或多个数据文件组成，一个数据文件只能属于一个表空间。一旦数据文件被加入到某个表空间后，就不能删除这个文件，如果要删除某个数据文件，只能删除其所属于的表空间才行。</p>
</blockquote>
<h3 id="表空间" tabindex="-1"><a class="header-anchor" href="#表空间" aria-hidden="true">#</a> 表空间</h3>
<blockquote>
<p>​		表空间是 Oracle 对物理数据库上相关数据文件 (ORA或者DBF文件) 的逻辑映射。一个数据库在逻辑上被划分成一到若干个表空间，每个表空间包含了在逻辑上相关联的一组结构。每个数据库至少有一个表空间(称之为system表空间)。每个表空间由同一磁盘上的一个或多个文件组成，这些文件叫数据文件(datafile)。一个数据文件只能属于一个表空间。</p>
</blockquote>
<h3 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h3>
<blockquote>
<p>​		用户是在实例下建立的。不同实例中可以建相同名字的用户。表的数据，是由用户放入某一个表空间的，而这个表空间会随机把这些表数据放到一个或者多个数据文件中。由于oracle 的数据库不是普通的概念，oracle是由用户和表空间对数据进行管理和存放的。但是表不是由表空间去查询的，而是由用户去查的。因为不同用户可以在同一个表空间建立同一个名字的表。这里区分就是用户了。</p>
</blockquote>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<blockquote>
<p>数据库、数据库实例、表空间（逻辑单位、数据文件.dbf（物理单位）</p>
<p><strong>通常Oracle只有一个实例：orcl</strong></p>
<p><strong>MYSQL：创建一个数据库，创建相应的表。</strong></p>
<p><strong>ORACLE：创建一个表空间，创建用户，用户创建表。</strong></p>
<p><strong>Oracle一个表空间有多个用户，如Scott和HR用户。</strong></p>
<p><strong>Oracle是多用户的，MySql是多数据库的。</strong></p>
</blockquote>
<h1 id="基本查询" tabindex="-1"><a class="header-anchor" href="#基本查询" aria-hidden="true">#</a> 基本查询</h1>
<h2 id="sql-分类" tabindex="-1"><a class="header-anchor" href="#sql-分类" aria-hidden="true">#</a> SQL 分类</h2>
<blockquote>
<p>SQL：Structure Query Language</p>
<p>DDL : 数据定义语言 create alter drop truncate。</p>
<p>DML : 数据操纵语言 insert update delete。</p>
<p>DCL : 数据控制语言 安全 授权 grant revoke。</p>
<p>DQL : 数据查询语言 select from子句 where子句。</p>
</blockquote>
<p><strong>查询语句的结构</strong></p>
<p>​		select [列名] [*] from 表名 [where 条件] [group by 分组条件] [having 过滤] [order by 排序]</p>
<h2 id="虚表伪表" tabindex="-1"><a class="header-anchor" href="#虚表伪表" aria-hidden="true">#</a> 虚表伪表</h2>
<p>DUAL 表：Oracle 中的虚表，伪表, 主要是用来补齐语法结构。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">/*
     dual : oracle中的虚表 ,伪表, 主要是用来补齐语法结构
*/</span>
<span class="token keyword">select</span> <span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- 在ORACLE中报错，在MYSQL中输出2</span>
<span class="token keyword">select</span> <span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">></span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>
D
<span class="token operator">-</span>
X
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引号" tabindex="-1"><a class="header-anchor" href="#引号" aria-hidden="true">#</a> 引号</h2>
<p>双引号：取别名，如别名中包含特殊字符时可以使用。</p>
<p>单引号：代表值，单引号使用的是字符，代表值。建议全用单引号。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">/*
       别名查询: 使用as 关键字, 可以省略
       别名中不能有特殊字符或者关键字, 如果有就加双引号  
*/</span>
<span class="token keyword">select</span> ename 姓名<span class="token punctuation">,</span>sal 工资 <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
<span class="token keyword">select</span> ename <span class="token string">"姓        名"</span><span class="token punctuation">,</span>sal 工资 <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
<span class="token comment">-- select ename "姓名",sal 工%资 from emp; -- 别名包含特殊字符</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="去重distinct" tabindex="-1"><a class="header-anchor" href="#去重distinct" aria-hidden="true">#</a> 去重distinct</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 单列去除重复</span>
<span class="token keyword">select</span> <span class="token keyword">distinct</span> job <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">-- 多列去除重复</span>
<span class="token keyword">select</span> <span class="token keyword">distinct</span> job<span class="token punctuation">,</span>deptno <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四则运算与null值" tabindex="-1"><a class="header-anchor" href="#四则运算与null值" aria-hidden="true">#</a> 四则运算与NULL值</h2>
<p><strong>NULL值不能做四则运算，凡是NULL参与的运算结果都为NULL，同时NULL值占空间。</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 查询年薪</span>

<span class="token keyword">select</span> sal<span class="token operator">*</span><span class="token number">12</span> <span class="token keyword">as</span> yearsal <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">-- 查询年薪 + 奖金</span>
<span class="token comment">--nvl函数如果参数1为null就返回参数2</span>
<span class="token keyword">select</span> sal<span class="token operator">*</span><span class="token number">12</span> <span class="token operator">+</span> nvl<span class="token punctuation">(</span>comm<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">-- NULL 值参与运算，返回结果为NULL</span>
<span class="token keyword">SQL</span><span class="token operator">></span><span class="token keyword">select</span> sal<span class="token operator">*</span><span class="token number">12</span> <span class="token operator">+</span> comm <span class="token keyword">as</span> yearsal <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
   YEARSAL
<span class="token comment">----------</span>

     <span class="token number">19500</span>
     <span class="token number">15500</span>

     <span class="token number">16400</span>




     <span class="token number">18000</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串拼接" tabindex="-1"><a class="header-anchor" href="#字符串拼接" aria-hidden="true">#</a> 字符串拼接</h2>
<blockquote>
<p>字符串拼接：</p>
<p>Java : + 号拼接</p>
<p>Oracle 特有的连接符: ||拼接</p>
<p>在 Oracle中，双引号主要是别名的时候使用，别名可以不加引号</p>
<p>单引号是使用的值，是字符</p>
<p>concat(str1,str2) 函数，在 MySQL 和 Oracle 中都有</p>
</blockquote>
<p>示例：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token string">"姓名："</span><span class="token operator">||</span>ename <span class="token keyword">as</span> 姓名 <span class="token keyword">from</span> emp<span class="token punctuation">;</span><span class="token comment">--错误，必须单引号</span>
<span class="token keyword">select</span> <span class="token string">'姓名：'</span><span class="token operator">||</span>ename <span class="token keyword">as</span> <span class="token string">"name"</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
<span class="token keyword">select</span> concat<span class="token punctuation">(</span><span class="token string">'姓名：'</span><span class="token punctuation">,</span>ename<span class="token punctuation">)</span> <span class="token keyword">as</span> name <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h2>
<ul>
<li>
<p>条件查询 : [where后面的写法]</p>
</li>
<li>
<p>关系运算符: &gt; &gt;= = &lt; &lt;= != &lt;&gt;</p>
</li>
<li>
<p>逻辑运算符: and or not</p>
</li>
<li>
<p>其它运算符：</p>
<ul>
<li>like 模糊查询</li>
<li>in(set) 在某个集合内</li>
<li>between..and.. 在某个区间内</li>
<li>is null  判断为空</li>
<li>is not null 判断不为空</li>
</ul>
</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">--查询每月能得到奖金的员工信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> comm <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span>

<span class="token comment">--查询工资在1500--3000之间的员工信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> sal <span class="token operator">between</span> <span class="token number">1500</span> <span class="token operator">and</span> <span class="token number">3000</span><span class="token punctuation">;</span>

<span class="token comment">--查询名字在某个范围的员工信息 ('JONES','SCOTT','FORD') in</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> ename <span class="token operator">in</span><span class="token punctuation">(</span><span class="token string">'JONES'</span><span class="token punctuation">,</span><span class="token string">'SCOTT'</span><span class="token punctuation">,</span><span class="token string">'FORD'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模糊查询以及-escape" tabindex="-1"><a class="header-anchor" href="#模糊查询以及-escape" aria-hidden="true">#</a> 模糊查询以及 escape</h2>
<p><strong>模糊查询：like</strong></p>
<ul>
<li>
<p>%  匹配多个字符</p>
</li>
<li>
<p>_   匹配单个字符</p>
</li>
<li>
<p>如果有特殊字符, 需要使用 escape 转义，escape之后的字符会进行转义</p>
</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">--查询员工姓名第三个字符是O的员工信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> ename <span class="token operator">like</span> <span class="token string">'__O%'</span><span class="token punctuation">;</span>

<span class="token comment">--查询员工姓名中,包含%的员工信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> ename <span class="token operator">like</span> <span class="token string">'%\%%'</span> <span class="token keyword">escape</span> <span class="token string">'\';

select * from emp where ename like '</span><span class="token operator">%</span><span class="token comment">#%%' escape '#';</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="排序及-null-值" tabindex="-1"><a class="header-anchor" href="#排序及-null-值" aria-hidden="true">#</a> 排序及 NULL 值</h2>
<ul>
<li>排序 : order by</li>
<li>升序: asc    ascend</li>
<li>降序: desc   descend</li>
<li>排序注意null问题 : nulls first | last</li>
<li>同时排列多列, 用逗号隔开</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">--查询员工信息,按照奖金由高到低排序</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">order</span> <span class="token keyword">by</span> comm <span class="token keyword">desc</span> nulls <span class="token keyword">last</span><span class="token punctuation">;</span>

<span class="token comment">--查询部门编号和按照工资  按照部门升序排序, 工资降序排序</span>
<span class="token keyword">select</span> ename<span class="token punctuation">,</span>deptno<span class="token punctuation">,</span>sal <span class="token keyword">from</span> emp <span class="token keyword">order</span> <span class="token keyword">by</span> deptno<span class="token punctuation">,</span>sal <span class="token keyword">desc</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="统计函数" tabindex="-1"><a class="header-anchor" href="#统计函数" aria-hidden="true">#</a> 统计函数</h2>
<ul>
<li>函数：必须要有返回值</li>
<li>单行函数：对某一行中的某个值进行处理
<ul>
<li>数值函数</li>
<li>字符函数</li>
<li>日期函数</li>
<li>转换函数</li>
<li>通用函数</li>
<li>多行函数：对某一列的所有行进行处理
<ul>
<li>max()  min count sum avg</li>
<li>直接忽略空值</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">--统计员工工资总和</span>
<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">--统计员工奖金总和  2200</span>
<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>comm<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">--统计员工的平均奖金  550  错误</span>
<span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>comm<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">-- 正确写法</span>
<span class="token keyword">select</span> ceil<span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>comm<span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数值函数" tabindex="-1"><a class="header-anchor" href="#数值函数" aria-hidden="true">#</a> 数值函数</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">--数值函数</span>
<span class="token keyword">select</span> ceil<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">12.5</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">-- -12</span>
<span class="token keyword">select</span> floor<span class="token punctuation">(</span><span class="token number">12.5</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">-- 12</span>

<span class="token keyword">select</span> ceil<span class="token punctuation">(</span><span class="token number">45.926</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>  <span class="token comment">--46</span>
<span class="token keyword">select</span> floor<span class="token punctuation">(</span><span class="token number">45.926</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--45</span>
<span class="token comment">--四舍五入</span>
<span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token number">45.926</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--45.93</span>
<span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token number">45.926</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">-- 45.9</span>
<span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token number">45.926</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--46</span>
<span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token number">45.926</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--50</span>
<span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token number">45.926</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--0</span>
<span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token number">65.926</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--100</span>

<span class="token comment">--截断</span>
<span class="token keyword">select</span> trunc<span class="token punctuation">(</span><span class="token number">45.926</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--45.92</span>
<span class="token keyword">select</span> trunc<span class="token punctuation">(</span><span class="token number">45.926</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">-- 45.9</span>
<span class="token keyword">select</span> trunc<span class="token punctuation">(</span><span class="token number">45.926</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--45</span>
<span class="token keyword">select</span> trunc<span class="token punctuation">(</span><span class="token number">45.926</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--40</span>
<span class="token keyword">select</span> trunc<span class="token punctuation">(</span><span class="token number">45.926</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--0</span>
<span class="token keyword">select</span> trunc<span class="token punctuation">(</span><span class="token number">65.926</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--0</span>

<span class="token comment">--求余</span>
<span class="token keyword">select</span> <span class="token function">mod</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--0</span>
<span class="token keyword">select</span> <span class="token function">mod</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符函数" tabindex="-1"><a class="header-anchor" href="#字符函数" aria-hidden="true">#</a> 字符函数</h2>
<ul>
<li>
<p>substr(str1,起始索引,长度)</p>
<p>注意: 起始索引不管写 0 还是 1 都是从第一个字符开始截取</p>
</li>
<li>
<p>length( )   获取字符串长度</p>
</li>
<li>
<p>replace( str, ' ',' ')   替换字符串</p>
</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> substr<span class="token punctuation">(</span><span class="token string">'abcdefg'</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span><span class="token comment">--abc</span>
<span class="token keyword">select</span> substr<span class="token punctuation">(</span><span class="token string">'abcdefg'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--abc</span>
<span class="token keyword">select</span> substr<span class="token punctuation">(</span><span class="token string">'abcdefg'</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--bcd</span>

<span class="token comment">--获取字符串长度</span>
<span class="token keyword">select</span> length<span class="token punctuation">(</span><span class="token string">'abcdefg'</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span><span class="token comment">--7</span>

<span class="token comment">--去除字符左右两边的空格</span>
<span class="token keyword">select</span> trim<span class="token punctuation">(</span><span class="token string">' abcd  '</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span><span class="token comment">--abcd</span>

<span class="token comment">--替换字符串</span>
<span class="token keyword">select</span> <span class="token keyword">replace</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">,</span><span class="token string">'l'</span><span class="token punctuation">,</span><span class="token string">'z'</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span><span class="token comment">---hezzo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日期函数" tabindex="-1"><a class="header-anchor" href="#日期函数" aria-hidden="true">#</a> 日期函数</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">--查询今天的日期</span>
<span class="token keyword">select</span> sysdate <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--2021/11/8 星期一 12:22:35</span>

<span class="token comment">--查询3个月后的今天的日期</span>
<span class="token keyword">select</span> add_months<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span><span class="token comment">--2022/2/8 星期二 12:23:58</span>

<span class="token keyword">select</span> sysdate<span class="token operator">+</span><span class="token number">3</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span><span class="token comment">--2021/11/11 星期四 12:23:42</span>

<span class="token comment">--查询员工入职的天数</span>
<span class="token keyword">select</span> ceil<span class="token punctuation">(</span>sysdate<span class="token operator">-</span>hiredate<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">--查询员工入职的月数</span>
<span class="token keyword">select</span> months_between<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span>hiredate<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">--查询员工入职的年份</span>
<span class="token keyword">select</span> months_between<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span>hiredate<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">12</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="转换函数" tabindex="-1"><a class="header-anchor" href="#转换函数" aria-hidden="true">#</a> 转换函数</h2>
<h3 id="字符转数值" tabindex="-1"><a class="header-anchor" href="#字符转数值" aria-hidden="true">#</a> 字符转数值</h3>
<p>to_number(str)</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token number">100</span><span class="token operator">+</span><span class="token string">'10'</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>  <span class="token comment">--110  默认已经帮我们转换</span>
<span class="token keyword">select</span> <span class="token number">100</span> <span class="token operator">+</span> to_number<span class="token punctuation">(</span><span class="token string">'10'</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--110</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数值转字符" tabindex="-1"><a class="header-anchor" href="#数值转字符" aria-hidden="true">#</a> 数值转字符</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sal<span class="token punctuation">,</span><span class="token string">'$9,999.99'</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
<span class="token comment">/*
       to_char(1210.73, '9999.9') 返回 '1210.7' 
       to_char(1210.73, '9,999.99') 返回 '1,210.73' 
       to_char(1210.73, '$9,999.00') 返回 '$1,210.73' 
       to_char(21, '000099') 返回 '000021' 
       to_char(852,'xxxx') 返回' 354' 十六进制
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日期转字符" tabindex="-1"><a class="header-anchor" href="#日期转字符" aria-hidden="true">#</a> 日期转字符</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">'yyyy-mm-dd hh:mi:ss'</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">'yyyy-mm-dd hh24:mi:ss'</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>

<span class="token comment">--获取年</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">'yyyy'</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>  <span class="token comment">--2021</span>

<span class="token comment">--获取日</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">'d'</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--2  代表一个星期中第几天</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">'dd'</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>  <span class="token comment">--10  代表一个月中的第几天</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">'ddd'</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--100 代表一年中的第几天</span>

<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">'day'</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>  <span class="token comment">--monday</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">'dy'</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>   <span class="token comment">--mon  星期的简写</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符转日期" tabindex="-1"><a class="header-anchor" href="#字符转日期" aria-hidden="true">#</a> 字符转日期</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> to_date<span class="token punctuation">(</span><span class="token string">'2017-04-10'</span><span class="token punctuation">,</span><span class="token string">'yyyy-mm-dd'</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--2017/4/10</span>

<span class="token comment">--查询1981年 -- 1985年入职的员工信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> hiredate <span class="token operator">between</span> to_date<span class="token punctuation">(</span><span class="token string">'1981'</span><span class="token punctuation">,</span><span class="token string">'yyyy'</span><span class="token punctuation">)</span> <span class="token operator">and</span> to_date<span class="token punctuation">(</span><span class="token string">'1985'</span><span class="token punctuation">,</span><span class="token string">'yyyy'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> hiredare <span class="token operator">between</span> <span class="token number">1982</span> <span class="token operator">and</span> <span class="token number">1985</span><span class="token punctuation">;</span><span class="token comment">--数据类型错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通用函数" tabindex="-1"><a class="header-anchor" href="#通用函数" aria-hidden="true">#</a> 通用函数</h2>
<ul>
<li>nvl(参数1,参数2)                          如果参数1 = null 就返回参数2</li>
<li>nvl2(参数1,参数2,参数3)             如果参数1 = null ,就返回参数3, 否则返回参数2</li>
<li>nullif(参数1,参数2)                       如果参数1 = 参数2 那么就返回 null , 否则返回参数1</li>
<li>coalesce(参数1,参数2,参数3)      返回第一个不为null的值</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> nvl <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--5;</span>
<span class="token keyword">select</span> nvl2<span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--6;</span>
<span class="token keyword">select</span> nvl2<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--5;</span>
<span class="token keyword">select</span> <span class="token keyword">nullif</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--5</span>
<span class="token keyword">select</span> <span class="token keyword">nullif</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">--null</span>
<span class="token keyword">select</span> <span class="token keyword">coalesce</span><span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>  <span class="token comment">--3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h1>
<h2 id="笛卡尔积" tabindex="-1"><a class="header-anchor" href="#笛卡尔积" aria-hidden="true">#</a> 笛卡尔积</h2>
<blockquote>
<p>实际上是两张表的乘积</p>
<p><strong>笛卡尔集会在下面条件下产生：</strong></p>
<ul>
<li>省略连接条件</li>
<li>连接条件无效</li>
<li>所有表中的所有行互相连接</li>
<li>为了避免笛卡尔集，可以在 WHERE 加入有效的连接条件。</li>
</ul>
</blockquote>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span><span class="token comment">--14</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dept<span class="token punctuation">;</span><span class="token comment">--4</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp<span class="token punctuation">,</span> dept<span class="token punctuation">;</span> <span class="token comment">--56</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-种-join-理论" tabindex="-1"><a class="header-anchor" href="#_7-种-join-理论" aria-hidden="true">#</a> 7 种 join 理论</h2>
<figure><img src="@source/DataBase/Oracle/7种JOIN理论.png" alt="7种JOIN理论" tabindex="0" loading="lazy"><figcaption>7种JOIN理论</figcaption></figure>
<h1 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询" aria-hidden="true">#</a> 子查询</h1>
<blockquote>
<p>子查询：查询语句中嵌套查询语句; 用来解决复杂的查询语句。</p>
<p>如查询最高工资的员工信息</p>
<ul>
<li>单行子查询：&gt;	&gt;=	=	&lt;	&lt;=	&lt;&gt;	!=</li>
<li>多行子查询：
<ul>
<li>in</li>
<li>not in</li>
<li>any</li>
<li>all</li>
<li>exists</li>
<li>not exists</li>
</ul>
</li>
</ul>
<p><strong>注意：子查询中不能包含空值。</strong></p>
</blockquote>
<h2 id="单行子查询" tabindex="-1"><a class="header-anchor" href="#单行子查询" aria-hidden="true">#</a> 单行子查询</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">--查询最高工资的员工信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> sal <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--查询出比雇员7654的工资高,同时和7788从事相同工作的员工信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> sal <span class="token operator">></span> <span class="token punctuation">(</span><span class="token keyword">select</span> sal <span class="token keyword">from</span> emp <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">7654</span><span class="token punctuation">)</span> <span class="token operator">and</span> job <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">select</span> job <span class="token keyword">from</span> emp <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">7788</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多行子查询-返回多条记录" tabindex="-1"><a class="header-anchor" href="#多行子查询-返回多条记录" aria-hidden="true">#</a> 多行子查询：返回多条记录</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">--查询每个部门最低工资的员工信息和他所在的部门信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token punctuation">(</span><span class="token keyword">select</span> deptno<span class="token punctuation">,</span><span class="token function">min</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> minsal <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno<span class="token punctuation">)</span> rs<span class="token punctuation">,</span>emp e<span class="token punctuation">,</span>dept d <span class="token keyword">where</span> e<span class="token punctuation">.</span>sal <span class="token operator">=</span> rs<span class="token punctuation">.</span>minsal <span class="token operator">and</span> e<span class="token punctuation">.</span>deptno <span class="token operator">=</span> d<span class="token punctuation">.</span>deptno<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="子查询中的-null-值问题" tabindex="-1"><a class="header-anchor" href="#子查询中的-null-值问题" aria-hidden="true">#</a> 子查询中的 NULL 值问题</h2>
<p>内联接，单行子查询，多行子查询</p>
<p>in</p>
<p>not in</p>
<p>any</p>
<p>all</p>
<p>exists</p>
<p>通常情况下，数据库中不要出现 NULL 最好的做法加上NOT NULL</p>
<p>同时 NULL  值并不代表不占空间，char(100) NULL 100个字符</p>
<p>注意：子查询中不能包含空值。</p>
<p>in 可理解为 or ，只要有一个满足即可返回。</p>
<p>not in 可理解为and，需要所有的都满足。而对于NULL值做运算，返回的都为null值，需要规避。</p>
</div></template>


