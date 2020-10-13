const PARAM = {
    cat: 'category',
    subcat: 'subcategory',
    search: ['name', 'description', 'subcategory', 'category']
}



export const getData = {
    url: 'database/dataBase.json',
    get(process) {
        fetch(this.url)
            .then((res) => {
                return res.json()
            })
            .then(process)
    },
    wishList(list, cb) {
        this.get((data) => {
            const result = data.filter((item) => list.includes(item.id))
            // const result = data.filter((item) => list.indexOf(item.id) !== -1)
            cb(result)
        })
    },
    item(value, cb) {
        this.get((data) => {
            const result = data.find(item => item.id === value)
            // const result = data.filter((item) => list.indexOf(item.id) !== -1)
            cb(result)
        })
    },
    cart(list, cb) {
        this.get((data) => {
            const result = data.filter((item) => list.some(obj => obj.id === item.id))
            // const result = data.filter((item) => list.indexOf(item.id) !== -1)
            cb(result)
        })
    },
    category(prop, value, cb) {
        this.get((data) => {
            const result = data.filter(item => item[PARAM[prop]].toLowerCase() === value.toLowerCase())
            // const result = data.filter((item) => list.indexOf(item.id) !== -1)
            cb(result)
        })
    },
    search(value, cb) {
        this.get((data) => {
            const result = data.filter(item => {

                for(const prop in item) {
                    if(PARAM.search.includes(prop) && item[prop].toLowerCase().includes(value.toLowerCase()) && item.hasOwnProperty(prop)){
                        return true
                    }
                }
        
            })
            cb(result) 
        })
    },
    catalog(cb) {
        this.get((data) => {
            const result = data.reduce((arr, item) => {
              if(!arr.includes(item.category)){
                   arr.push(item.category)
              }
               

                return arr
            },[])
            
            cb(result)
        })
    }, 
    subCatalog(value, cb) {
        this.get((data) => {
            const result = data.filter(item => item.category === value)
                .reduce((arr, item) => {
                    if(!arr.includes(item.subcategory)){
                        arr.push(item.subcategory)
                    }
                    return arr
                },[])
            cb(result)
        })
    }
}
