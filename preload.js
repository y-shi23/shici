window.utools = {
  dbStorage: {
    getItem: (key) => {
      return window.utools.db.get(key)
    },
    setItem: (key, value) => {
      window.utools.db.put(key, value)
    },
    removeItem: (key) => {
      window.utools.db.remove(key)
    }
  }
} 