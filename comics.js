AFRAME.registerComponent("tour", {
    
  init: function(){
      this.places_container = this.el
      this.createCards();

  },
  createCards: function(){
      const thumbnail_ref = [
          {
              id: "tobey_maguire", 
              title: "Sam Raimi Spiderman Trilogy (2002, 2004, 2007)",
              url: "./assets/raimi_spiderman.jpg"
          },

          {
              id: "andrew_garfield", 
              title: "The Amazing Spiderman 1 & 2 (2012, 2014)",
              url: "./assets/tasm.jpg"
          },

          {
              id: "tom_holland", 
              title: "M.C.U Spiderman Trilogy (2017, 2019, 2021)",
              url: "./assets/mcu_spiderman.jpg"
          },

          {
              id: "miles_morales", 
              title: "Spiderman: Into the Spiderverse (2018)",
              url: "./assets/miles morales.jpg"
          },

      ]

      let previousXpos = -85;
      for(var item of thumbnail_ref){
          const posX = previousXpos + 35
          const posY = 10
          const posZ = -40
          const position = {x: posX, y: posY, z: posZ}
          
          previousXpos = posX
          const borderEl = this.createBorders(item.id, position)
          const thumbnail = this.createThumbnail(item)
          borderEl.appendChild(thumbnail)
          const titleEl = this.createTitle(position, item)
          borderEl.appendChild(titleEl)

          this.places_container.appendChild(borderEl)
      }
  
  },

  createBorders: function(id, position){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("id", id)
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry", {
          primitive: "ring",
          radiusInner: 9,
          radiusOuter: 10
      })
      entityEl.setAttribute("position", position)
      entityEl.setAttribute("material", {
          color: "#ffd700",
          opacity: 0.75
      })
      entityEl.setAttribute("cursorListener", {})

      return entityEl
  },

  createThumbnail: function(item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 15,
          height: 10
      })
      entityEl.setAttribute("material", {
          src: item.url
      })

      return entityEl
  },

  createTitle: function(position, item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 60,
          color: "#E65100",
          value: item.title
      })
      const elPosition = position
      elPosition.y = -20

      entityEl.setAttribute("position", elPosition)
      entityEl.setAttribute("visible", true)

      return entityEl
  }
});