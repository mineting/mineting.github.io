const l=JSON.parse('{"key":"v-1b55d7da","path":"/Java/Mybatis.html","title":"Mybatis","lang":"zh-CN","frontmatter":{"title":"Mybatis","date":"2023-03-05T00:00:00.000Z"},"headers":[{"level":2,"title":"持久层的解决方案","slug":"持久层的解决方案","link":"#持久层的解决方案","children":[]},{"level":2,"title":"Jdbc 存在的问题","slug":"jdbc-存在的问题","link":"#jdbc-存在的问题","children":[]},{"level":2,"title":"Mybatis 简介","slug":"mybatis-简介","link":"#mybatis-简介","children":[]},{"level":2,"title":"Mybatis 架构","slug":"mybatis-架构","link":"#mybatis-架构","children":[]},{"level":2,"title":"创建工程引入依赖","slug":"创建工程引入依赖","link":"#创建工程引入依赖","children":[]},{"level":2,"title":"日志文件配置","slug":"日志文件配置","link":"#日志文件配置","children":[]},{"level":2,"title":"SQL 数据源","slug":"sql-数据源","link":"#sql-数据源","children":[]},{"level":2,"title":"数据库连接配置","slug":"数据库连接配置","link":"#数据库连接配置","children":[]},{"level":2,"title":"POJO","slug":"pojo","link":"#pojo","children":[]},{"level":2,"title":"Dao 接口","slug":"dao-接口","link":"#dao-接口","children":[]},{"level":2,"title":"创建全局配置文件","slug":"创建全局配置文件","link":"#创建全局配置文件","children":[]},{"level":2,"title":"创建 SQL 映射文件","slug":"创建-sql-映射文件","link":"#创建-sql-映射文件","children":[]},{"level":2,"title":"测试 Mapper 接口","slug":"测试-mapper-接口","link":"#测试-mapper-接口","children":[]},{"level":2,"title":"XML 配置注意事项","slug":"xml-配置注意事项","link":"#xml-配置注意事项","children":[]},{"level":2,"title":"基于注解映射","slug":"基于注解映射","link":"#基于注解映射","children":[]},{"level":2,"title":"MyBatis 几个 API 说明","slug":"mybatis-几个-api-说明","link":"#mybatis-几个-api-说明","children":[{"level":3,"title":"SqlSessionFactoryBuilder","slug":"sqlsessionfactorybuilder","link":"#sqlsessionfactorybuilder","children":[]},{"level":3,"title":"SqlSessionFactory","slug":"sqlsessionfactory","link":"#sqlsessionfactory","children":[]},{"level":3,"title":"SqlSession","slug":"sqlsession","link":"#sqlsession","children":[]}]},{"level":2,"title":"配置文件属性","slug":"配置文件属性","link":"#配置文件属性","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":2,"title":"settings","slug":"settings","link":"#settings","children":[]},{"level":2,"title":"typeAliases","slug":"typealiases","link":"#typealiases","children":[]},{"level":2,"title":"typeHandlers","slug":"typehandlers","link":"#typehandlers","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"自定义类型转换器","slug":"自定义类型转换器","link":"#自定义类型转换器","children":[]}]},{"level":2,"title":"plugins","slug":"plugins","link":"#plugins","children":[]},{"level":2,"title":"environments","slug":"environments","link":"#environments","children":[]},{"level":2,"title":"databaseIdProvider","slug":"databaseidprovider","link":"#databaseidprovider","children":[]},{"level":2,"title":"mappers","slug":"mappers","link":"#mappers","children":[]},{"level":2,"title":"OGNL 表达式","slug":"ognl-表达式","link":"#ognl-表达式","children":[]},{"level":2,"title":"Mybatis CRUD 示例","slug":"mybatis-crud-示例","link":"#mybatis-crud-示例","children":[]},{"level":2,"title":"新增返回主键","slug":"新增返回主键","link":"#新增返回主键","children":[]},{"level":2,"title":"Mybatis 参数处理","slug":"mybatis-参数处理","link":"#mybatis-参数处理","children":[]},{"level":2,"title":"Mybatis 参数处理源码","slug":"mybatis-参数处理源码","link":"#mybatis-参数处理源码","children":[]},{"level":2,"title":"Mybatis 入参处理规则","slug":"mybatis-入参处理规则","link":"#mybatis-入参处理规则","children":[{"level":3,"title":"单个参数","slug":"单个参数","link":"#单个参数","children":[]},{"level":3,"title":"多个参数","slug":"多个参数","link":"#多个参数","children":[]},{"level":3,"title":"POJO","slug":"pojo-1","link":"#pojo-1","children":[]},{"level":3,"title":"Map","slug":"map","link":"#map","children":[]},{"level":3,"title":"TO","slug":"to","link":"#to","children":[]},{"level":3,"title":"参数取值示例","slug":"参数取值示例","link":"#参数取值示例","children":[]}]},{"level":2,"title":"#{ }和${ }的区别","slug":"和-的区别","link":"#和-的区别","children":[]},{"level":2,"title":"Mybatis 的返回值","slug":"mybatis-的返回值","link":"#mybatis-的返回值","children":[{"level":3,"title":"返回 List","slug":"返回-list","link":"#返回-list","children":[]},{"level":3,"title":"返回 Map","slug":"返回-map","link":"#返回-map","children":[]}]},{"level":2,"title":"标签属性","slug":"标签属性","link":"#标签属性","children":[]},{"level":2,"title":"Mybatis 多表查询","slug":"mybatis-多表查询","link":"#mybatis-多表查询","children":[{"level":3,"title":"自动映射","slug":"自动映射","link":"#自动映射","children":[]},{"level":3,"title":"关联查询","slug":"关联查询","link":"#关联查询","children":[]},{"level":3,"title":"分步查询","slug":"分步查询","link":"#分步查询","children":[]},{"level":3,"title":"延迟加载","slug":"延迟加载","link":"#延迟加载","children":[]},{"level":3,"title":"鉴别器","slug":"鉴别器","link":"#鉴别器","children":[]}]},{"level":2,"title":"if","slug":"if","link":"#if","children":[]},{"level":2,"title":"where","slug":"where","link":"#where","children":[]},{"level":2,"title":"trim","slug":"trim","link":"#trim","children":[]},{"level":2,"title":"choose","slug":"choose","link":"#choose","children":[]},{"level":2,"title":"set","slug":"set","link":"#set","children":[]},{"level":2,"title":"foreach","slug":"foreach","link":"#foreach","children":[{"level":3,"title":"MySQL 批量插入","slug":"mysql-批量插入","link":"#mysql-批量插入","children":[]},{"level":3,"title":"Oracle 批量插入","slug":"oracle-批量插入","link":"#oracle-批量插入","children":[]}]},{"level":2,"title":"两个内置参数","slug":"两个内置参数","link":"#两个内置参数","children":[]},{"level":2,"title":"bind","slug":"bind","link":"#bind","children":[]},{"level":2,"title":"SQL 片段","slug":"sql-片段","link":"#sql-片段","children":[]},{"level":2,"title":"一级缓存","slug":"一级缓存","link":"#一级缓存","children":[{"level":3,"title":"简介","slug":"简介-1","link":"#简介-1","children":[]},{"level":3,"title":"一级缓存失效的四种情况","slug":"一级缓存失效的四种情况","link":"#一级缓存失效的四种情况","children":[]}]},{"level":2,"title":"二级缓存","slug":"二级缓存","link":"#二级缓存","children":[{"level":3,"title":"简介","slug":"简介-2","link":"#简介-2","children":[]},{"level":3,"title":"使用步骤","slug":"使用步骤","link":"#使用步骤","children":[]}]},{"level":2,"title":"清空缓存","slug":"清空缓存","link":"#清空缓存","children":[]},{"level":2,"title":"整合第三方缓存 EhCache","slug":"整合第三方缓存-ehcache","link":"#整合第三方缓存-ehcache","children":[]},{"level":2,"title":"整体架构","slug":"整体架构","link":"#整体架构","children":[]},{"level":2,"title":"四大对象","slug":"四大对象","link":"#四大对象","children":[]},{"level":2,"title":"流程分析","slug":"流程分析","link":"#流程分析","children":[]},{"level":2,"title":"插件原理","slug":"插件原理","link":"#插件原理","children":[]},{"level":2,"title":"开发插件","slug":"开发插件","link":"#开发插件","children":[]},{"level":2,"title":"多个插件的执行流程","slug":"多个插件的执行流程","link":"#多个插件的执行流程","children":[]},{"level":2,"title":"插件示例","slug":"插件示例","link":"#插件示例","children":[]},{"level":2,"title":"分页插件 PageHelper","slug":"分页插件-pagehelper","link":"#分页插件-pagehelper","children":[]},{"level":2,"title":"Mybatis 批量执行","slug":"mybatis-批量执行","link":"#mybatis-批量执行","children":[]},{"level":2,"title":"Mybatis-Spring 批量执行","slug":"mybatis-spring-批量执行","link":"#mybatis-spring-批量执行","children":[]},{"level":2,"title":"存储过程（有BUG）","slug":"存储过程-有bug","link":"#存储过程-有bug","children":[]},{"level":2,"title":"类型处理器","slug":"类型处理器","link":"#类型处理器","children":[]},{"level":2,"title":"自定义 TypeHandler 处理枚举","slug":"自定义-typehandler-处理枚举","link":"#自定义-typehandler-处理枚举","children":[]}],"git":{},"readingTime":{"minutes":80.83,"words":24250},"filePathRelative":"Java/Mybatis.md","localizedDate":"2023年3月5日"}');export{l as data};