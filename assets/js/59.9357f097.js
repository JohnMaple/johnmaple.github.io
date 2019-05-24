(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{443:function(s,e,a){"use strict";a.r(e);var n=a(8),t=Object(n.a)({},function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-概述","aria-hidden":"true"}},[s._v("#")]),s._v(" Redis 概述")]),s._v(" "),a("h2",{attrs:{id:"redis-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-安装","aria-hidden":"true"}},[s._v("#")]),s._v(" Redis 安装")]),s._v(" "),a("h3",{attrs:{id:"docker-方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-方式","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker 方式")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取 redis 镜像  ")]),s._v("\n$ docker pull redis  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行 redis 容器  ")]),s._v("\n$ docker run --name myredis -d -p6379:6379 redis  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行容器中的 redis-cli，可以直接使用命令行操作 redis  ")]),s._v("\n$ docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),s._v(" -it myredis redis-cli  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"github-源码编译方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-源码编译方式","aria-hidden":"true"}},[s._v("#")]),s._v(" Github 源码编译方式")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载源码")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone --branch 2.8 --depth 1 git@github.com:antirez/redis.git  \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" redis  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译  ")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("  \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" src  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行服务器，daemonize 表示在后台运行  ")]),s._v("\n$ ./redis-server --daemonize "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行命令行  ")]),s._v("\n$ ./redis-cli  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"直接安装方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接安装方式","aria-hidden":"true"}},[s._v("#")]),s._v(" 直接安装方式")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mac  ")]),s._v("\n$ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ubuntu  ")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redhat  ")]),s._v("\n$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行客户端  ")]),s._v("\n$ redis-cli \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"redis-基本结构数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-基本结构数据","aria-hidden":"true"}},[s._v("#")]),s._v(" Redis 基本结构数据")]),s._v(" "),a("ul",[a("li",[s._v("string")]),s._v(" "),a("li",[s._v("list")]),s._v(" "),a("li",[s._v("set")]),s._v(" "),a("li",[s._v("hash")]),s._v(" "),a("li",[s._v("zset")])]),s._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# string")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" key value\nsetex key seconds value   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 几秒后过期，等价于 set+expire")]),s._v("\nsetnx key value   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# key不存在就创建")]),s._v("\nget key\nincr key  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自增，key数值")]),s._v("\nincrby key value  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自增value")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# list")]),s._v("\nlpush key value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value …"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从左边入队")]),s._v("\nrpush key value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value …"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从右边入队")]),s._v("\nlrange mylist 0 -1    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取出全部")]),s._v("\nllen key  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列表长度")]),s._v("\nlpop\nrpop\nbrpop   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 阻塞式出队")]),s._v("\nlindex key index  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 慢操作，通过index获取值")]),s._v("\nltrim key start_index end_index   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取区间[start_index, end_index]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hash")]),s._v("\nhset key field value    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 置key上的hash字段field 为value")]),s._v("\nhgetall key\nhget key field\nhmset key field value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("field value …"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 批量保存")]),s._v("\nhlen key    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hash的长度 ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# set")]),s._v("\nsadd key value    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加集合")]),s._v("\nsmembers key    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取集合成员")]),s._v("\nsismember key value   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询value是否存在")]),s._v("\nscard key   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取集合长度")]),s._v("\nspop key  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除一个成员")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zset")]),s._v("\nzadd key score member   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据score添加成员")]),s._v("\nzrange key start_index end_index  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取排名区间")]),s._v("\nzcard key   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 集合长度")]),s._v("\nzrangebyscore key start_score end_score   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据score获取区间")]),s._v("\nzrem key value  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除value, 可用于简单延时队列")]),s._v("\nsetbit key index value  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置位图")]),s._v("\ngetbit key index\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])]),a("h2",{attrs:{id:"redis-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-配置","aria-hidden":"true"}},[s._v("#")]),s._v(" Redis 配置")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("daemonize：如需要在后台运行，把该项的值改为yes\npdifile：把pid文件放在/var/run/redis.pid，可以配置到其他地址\nbind：指定redis只接收来自该IP的请求，如果不设置，那么将处理所有请求，在生产环节中最好设置该项\nport：监听端口，默认为6379\ntimeout：设置客户端连接时的超时时间，单位为秒\nloglevel：等级分为4级，debug，revbose，notice和warning。生产环境下一般开启notice\nlogfile：配置log文件地址，默认使用标准输出，即打印在命令行终端的端口上\ndatabase：设置数据库的个数，默认使用的数据库是0\nsave：设置redis进行数据库镜像的频率\nrdbcompression：在进行镜像备份时，是否进行压缩\ndbfilename：镜像备份文件的文件名\ndir：数据库镜像备份的文件放置的路径\nslaveof：设置该数据库为其他数据库的从数据库\nmasterauth：当主数据库连接需要密码验证时，在这里设定\nrequirepass：设置客户端连接后进行任何其他指定前需要使用的密码\nmaxclients：限制同时连接的客户端数量\nmaxmemory：设置redis能够使用的最大内存\nappendonly：开启appendonly模式后，redis会把每一次所接收到的写操作都追加到appendonly.aof文件中，当redis重新启动时，会从该文件恢复出之前的状态\nappendfsync：设置appendonly.aof文件进行同步的频率\nvm_enabled：是否开启虚拟内存支持\nvm_swap_file：设置虚拟内存的交换文件的路径\nvm_max_momery：设置开启虚拟内存后，redis将使用的最大物理内存的大小，默认为0\nvm_page_size：设置虚拟内存页的大小\nvm_pages：设置交换文件的总的page数量\nvm_max_thrrads：设置vm IO同时使用的线程数量\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h2",{attrs:{id:"redis-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-协议","aria-hidden":"true"}},[s._v("#")]),s._v(" Redis 协议")]),s._v(" "),a("p",[s._v("redis协议分为5种单元类型，单元结束时统一加上回车换行符号"),a("code",[s._v("\\r\\n")])]),s._v(" "),a("ul",[a("li",[s._v("单行字符串 以"),a("code",[s._v("+")]),s._v("号开头")]),s._v(" "),a("li",[s._v("多行字符串 以"),a("code",[s._v("$")]),s._v("符开头，后跟字符串长度")]),s._v(" "),a("li",[s._v("整数值 以"),a("code",[s._v(":")]),s._v("号开头，后跟整数的字符串形式")]),s._v(" "),a("li",[s._v("错误消息 以"),a("code",[s._v("-")]),s._v("号开头")]),s._v(" "),a("li",[s._v("数组 以"),a("code",[s._v("*")]),s._v("号开头，后跟数组长度")])]),s._v(" "),a("p",[s._v("客户端向服务器发送的指令只有一种格式，多行字符串数组；服务器向客户端回复的响应要支持多种数据结构。")]),s._v(" "),a("h2",{attrs:{id:"线程-io模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程-io模型","aria-hidden":"true"}},[s._v("#")]),s._v(" 线程 io模型")]),s._v(" "),a("p",[s._v("redis是个单线程程序。之所以单线程还能跑这么快，是因为")]),s._v(" "),a("ul",[a("li",[s._v("所有数据都在内存中，所有的运算都是内存级别的运算")]),s._v(" "),a("li",[s._v("使用非阻塞式io。每次io操作，能读多少，读多少，能写多少，写多少，不在io浪费时间")]),s._v(" "),a("li",[s._v("采用事件轮询(如kqueue, epoll)，多路复用")])]),s._v(" "),a("h2",{attrs:{id:"主要应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要应用","aria-hidden":"true"}},[s._v("#")]),s._v(" 主要应用")]),s._v(" "),a("ul",[a("li",[s._v("分布式锁")]),s._v(" "),a("li",[s._v("延时队列(应对一组消费者时，相比rabbitmq、kafka更简单)")]),s._v(" "),a("li",[s._v("hyperLogLog 提供不精确的去重计数方案")]),s._v(" "),a("li",[s._v("布隆过滤器")]),s._v(" "),a("li",[s._v("漏斗限流")]),s._v(" "),a("li",[s._v("GeoHash (GEO模块)")])]),s._v(" "),a("h2",{attrs:{id:"过期策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过期策略","aria-hidden":"true"}},[s._v("#")]),s._v(" 过期策略")]),s._v(" "),a("p",[s._v("redis会将每个设置了过期时间的key放入到一个独立的字典中，以后会定时遍历这个字典来删除到期的key。除了定时遍历外，它还会使用惰性策略来删除过期的key，即客户端在访问这个key的时间，redis对key的过期时间进行检查，如果过期了就立即删除。redis默认会每秒进行十次过期扫描，扫描默认不会超过25ms，过期扫描不会遍历过期字典中所有的key，而是采用了一种简单的贪心策略")]),s._v(" "),a("ul",[a("li",[s._v("从过期字典中随机20个key")]),s._v(" "),a("li",[s._v("删除这20个key中已经过期的key")]),s._v(" "),a("li",[s._v("如果过期的key比率超过1/4，重复步骤过程。")])]),s._v(" "),a("p",[s._v("为避免有大量key同时过期导致卡顿，可以给过期时间设置一个随机范围，不能全部在同一时间过期。")]),s._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Redis和memcache相比的独特之处：")]),s._v(" "),a("ul",[a("li",[s._v("redis可以用来做存储（storge）、而memcache是来做缓存（cache）。这个特点主要是因为其有“持久化”功能")]),s._v(" "),a("li",[s._v("存储的数据有“结构”，对于memcache来说，存储的数据，只有一种类型——“字符串”，而redis则可以存储字符串、链表、集合、有序集合、哈序结构")])])]),s._v(" "),a("li",[a("p",[s._v("持久化：")]),s._v(" "),a("ul",[a("li",[s._v("Redis将数据存储于内存中，或被配置为使用虚拟内存。")]),s._v(" "),a("li",[s._v("实现数据持久化的两种方式：\n"),a("ul",[a("li",[s._v("使用截图的方式，将内存中的数据不断写入磁盘（性能高，但可能会引起一定程度的数据丢失）")]),s._v(" "),a("li",[s._v("使用类似mysql的方式，记录每次更新的日志")])])])])]),s._v(" "),a("li",[a("p",[s._v("Redis的主从同步：对提高读取性能非常有益")])]),s._v(" "),a("li",[a("p",[s._v("Redis服务端的默认端口是6379")])]),s._v(" "),a("li",[a("p",[s._v("Redis优点：")]),s._v(" "),a("ul",[a("li",[s._v("单线程：并发安全")]),s._v(" "),a("li",[s._v("高性能")]),s._v(" "),a("li",[s._v("原语与数据结构丰富")]),s._v(" "),a("li",[s._v("应用广泛")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("zrange start, stop, 总长度为 n, 复杂度是O(M+log(N)), M 是结果集基数 stop-start")])])])},[],!1,null,null,null);e.default=t.exports}}]);