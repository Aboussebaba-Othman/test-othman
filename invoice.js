document.addEventListener('DOMContentLoaded', function() {

    // add initital total calculation first 
        //here
    
    // these are selection helpers
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    const invoiceTotal = document.getElementById('invoiceTotal');



    // This function updates the total amount in each row ( item price * Qte )
    
     
     let quantiti = document.getElementsByClassName('quantity');
        let prixUnitaire = document.getElementsByClassName('unitPrice');
        let total = document.getElementsByClassName('itemTotal');
        // quantiti.addEventListener('click', updateItemTotal);
      quantiti.onkeyup = function updateItemTotal() {
        
        total.value= quantiti.value * prixUnitaire.value;
    }
     

    // This function updates the total amount of the invoice (sum all Item totals)
    function updateInvoiceTotal() {
       
    }


    // Ajouter un nouveau item 
    function addNewItem() {
        

    }


    // If you finish the above functions, consider adding a delete button
 
});
