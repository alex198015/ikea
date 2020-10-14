
import './storage.js'
import generateHead from './generateHeader.js'
import {generateFooter} from './generateFooter.js'
import generateCatalog from './generateCatalog.js'
import generateGoodsPage from './generateGoodsPage.js'
import generateItemPage from './generateItemPage.js'
import generateCartPage from './generateCartPage.js'
import {loadData} from './loadData.js'

generateHead()
generateFooter()
generateCatalog()
generateGoodsPage()
generateItemPage()
generateCartPage()
loadData()


