var carritoDeCompras = (function() {
    cart = [];
    
    // Constructor
    function Item(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }

    function saveCart() {
      sessionStorage.setItem('carritoDeCompras', JSON.stringify(cart));
    }
 
    function recargarCarrito() {
      cart = JSON.parse(sessionStorage.getItem('carritoDeCompras'));
    }
    if (sessionStorage.getItem("carritoDeCompras") != null) {
      recargarCarrito();
    }

    var obj = {};
    
    // Agregar al carrito
    obj.addItemToCart = function(name, price, count) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count ++;
          saveCart();
          return;
        }
      }
      var item = new Item(name, price, count);
      cart.push(item);
      saveCart();
    }
    // Contar cantidad de cada elemento
    obj.setCountForItem = function(name, count) {
      for(var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Quitar un elemento
    obj.removeItemFromCart = function(name) {
        for(var item in cart) {
          if(cart[item].name === name) {
            cart[item].count --;
            if(cart[item].count === 0) {
              cart.splice(item, 1);
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }
  
    // Vaciar carrito
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
  
    // Acceder a cada elemento del carrito
    //Cuenta de total 
    obj.totalCount = function() {
      var totalCount = 0;
      for(var item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    }
  
    // Total
    obj.totalCart = function() {
      var totalCart = 0;
      for(var item in cart) {
        totalCart += cart[item].price * cart[item].count;
        totalCart *= 1.16; //agregar iva de 1.16%
      }
      return Number(totalCart.toFixed(2));
    }
  
    // Lista
    obj.listCart = function() {
      var cartCopy = [];
      for(i in cart) {
        item = cart[i];
        itemCopy = {};
        for(p in item) {
          itemCopy[p] = item[p];
  
        }
        itemCopy.total = Number(item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }

    return obj;
  })();
  
  //triggers
 //agregar elemento
  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    carritoDeCompras.addItemToCart(name, price, 1);
    displayCart();
  });
  
  // Borrar elementos
  $('.clear-cart').click(function() {
    carritoDeCompras.clearCart();
    displayCart();
  });
  
  //acceder al carrito de compras
  function displayCart() {
    var cartArray = carritoDeCompras.listCart();
    var output = "";
    for(var i in cartArray) {
      output += "<tr>"
        + "<td>" + cartArray[i].name + "</td>" 
        + "<td>(" + cartArray[i].price + ")</td>"
        + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
        + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
        + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
        + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">Quitar</button></td>"
        + " = " 
        + "<td>" + cartArray[i].total + "</td>" 
        +  "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(carritoDeCompras.totalCart());
    $('.total-count').html(carritoDeCompras.totalCount());
  }
  
  // Boton para quitar elemento 
  $('.show-cart').on("click", ".delete-item", function(event) {
    var name = $(this).data('name')
    carritoDeCompras.removeItemFromCartAll(name);
    displayCart();
  })
  
  // Quitar un elemento
  $('.show-cart').on("click", ".minus-item", function(event) {
    var name = $(this).data('name')
    carritoDeCompras.removeItemFromCart(name);
    displayCart();
  })
  // Agregar un elemento
  $('.show-cart').on("click", ".plus-item", function(event) {
    var name = $(this).data('name')
    carritoDeCompras.addItemToCart(name);
    displayCart();
  })
  
  // Contar elementos
  $('.show-cart').on("change", ".item-count", function(event) {
     var name = $(this).data('name');
     var count = Number($(this).val());
    carritoDeCompras.setCountForItem(name, count);
    displayCart();
  });
  
  displayCart();
  