<?php
# Class Declaration

/*
class Product
{

}
*/




# Creating an object using the new keyword
/*
class Product
{

}

$product = new Product;

var_dump($product);

*/ 


# Declearing properties and Method in a class and printing them by creating an object.
#using access modifiers like public, private and protected with type declaration to declare the properties and methods

/*

class Product
{

public string $name = "soap";
public int $price = 100;
protected string $exp_date ="10-04-2025";
private string $manufacturer = "Godstime";

public function priceInNaira()
{

$priceInNaira = $this->$price*1500

return $priceInNaira;

}



}

$product = new Product;

*/





class Product
{

    public $name = "soap";
    public $price;

   public function priceAsCurrency($divisor = 1, $currencySymbol = "$")
{
    $priceAsCurrency = $this->price / $divisor;

    return $currencySymbol . $priceAsCurrency;
}

}

$product = new Product;
$product->price = 500;

$product2 = new Product;
$product2->price = 550;


$priceAsCurrency = $product2->priceAsCurrency(currencySymbol: 'EURO') ;

var_dump($product);
echo $priceAsCurrency . PHP_EOL;
