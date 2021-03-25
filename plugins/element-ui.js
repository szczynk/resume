import Vue from 'vue'
import {
  Avatar,
  Row,
  Col,
  Card,
  Container,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)

Vue.use(Avatar)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Container)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Link)
Vue.use(Divider)
