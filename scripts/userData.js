import {getLocalStorage, setLocalStorage} from './storage.js'


class UserData {

    #wishListData = getLocalStorage('wishList')

    #cartListData = getLocalStorage('cartList')

    get wishList() {
        
        return this.#wishListData
    }

    set wishList(id) {
        if(this.#wishListData.includes(id)){
            const index = this.#wishListData.indexOf(id)
            this.#wishListData.splice(index, 1)
        } else {
            this.#wishListData.push(id)
        }
        setLocalStorage('wishList', this.wishList)
        
    }

    get cartList() {
        return this.#cartListData
        
    }

    set cartList(id) {
       
        let obj = this.#cartListData.find(item => item.id === id)
      
        if(obj) {
            obj.count++
        } else {

            obj = {id, count: 1}
            this.#cartListData.push(obj)
        }
            
            console.log(this.#cartListData);
        
        setLocalStorage('cartList', this.cartList)
    }

}

export const user = new UserData()
