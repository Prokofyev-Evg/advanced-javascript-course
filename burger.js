class Item {
    constructor(element) {
      this.name = element.value;
      this.price = +element.dataset['price'];
      this.ccal = +element.dataset['ccal'];
    }
}

class Burger {
  constructor(size, filling, additive) {
    this.size = size;
    this.filling = filling;
    this.additive = additive;
  }

  toppingPrice() { 
    return this.additive.reduce((sum, val) => sum + val.price, 0);
  }
  toppingCcal() { 
    return this.additive.reduce((sum, val) => sum + val.ccal, 0);
  }
  
  calculatePrice() { 
      return this.size.price + this.filling.price + this.toppingPrice();
  }

  calculateCalories() { 
    return this.size.ccal + this.filling.ccal + this.toppingCcal();
  }

}

window.onload = () => {
    document.getElementById('generate').addEventListener('click', () => {
        let sizeElement = document.getElementById('size');
        let size = new Item(sizeElement.options[sizeElement.selectedIndex]);
        let filling = new Item(document.querySelector('input[name="filling"]:checked'));
        let additive = []
        document.getElementsByName('additive').forEach(element => {
            if(element.checked)
                additive.push(new Item(element));
        });
        let burger = new Burger(size, filling, additive);

        document.getElementById('price').innerText = `Стоимость: ${burger.calculatePrice()}`;
        document.getElementById('ccal').innerText = `Калорийность: ${burger.calculateCalories()}`;

    })
}