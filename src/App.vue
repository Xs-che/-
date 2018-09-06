<template>
  <div id="app">
      <!-- 头部 -->
        <div class="head"></div>
    <Row>
      <!-- 侧边栏 -->
        <Col class="sidebar">
            <Menu :theme="switchThemeTxt" accordion>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="4-1">新增和启动</MenuItem>
                        <MenuItem name="4-2">活跃分析</MenuItem>
                        <MenuItem name="4-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="4-4">用户留存</MenuItem>
                        <MenuItem name="4-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
                <Submenu name="5">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="5-1">新增和启动</MenuItem>
                        <MenuItem name="5-2">活跃分析</MenuItem>
                        <MenuItem name="5-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="5-4">用户留存</MenuItem>
                        <MenuItem name="5-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
        </Col>
    <!--内容区 -->
        <div class="content">
            <router-view />
        </div>
    </Row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      switchThemeTxt: "dark",
      contentWidth: 0
    };
  },
  created: function() {
    // this.switchTheme();
  },
  mounted() {},
  methods: {
    //   切换主题
    switchTheme: function() {
      if (this.switchThemeTxt == "dark") {
        this.switchThemeTxt = "light";
      } else {
        this.switchThemeTxt = "dark";
      }
    }
  }
};
</script>
<style lang="less">
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // 头部
  .head {
    background-color: hotpink;
    width: 100%;
    height: 90px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .ivu-row {
    padding-top: 90px;
    box-sizing: border-box;
    height: 100%;
    .sidebar {
      text-align: left;
      width: 200px;
      height: 100%;
      float: left;
      ul {
        width: 100% !important;
        height: 100%;
      }
    }
    .content {
      margin-left: 200px;
      background-color: greenyellow;
    }
  }
}
</style>
