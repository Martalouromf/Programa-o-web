window.onload = async function() {
    let typeElem = document.getElementById("type");
    try {
        let types = await $.ajax({
            url: "/api/user/",
            method: "get",
            dataType: "json"
        });
        let html = "";
        console.log("[addUser] types = " + JSON.stringify(types));
        for (let type of types) {
            console.log("[addUser] type = " + JSON.stringify(type));
            html += "<option value=" + type.type_id + ">" +
                type.type_name + "</opion>";
        }
        typeElem.innerHTML = html;
    } catch (err) {
        console.log(err);
        typeElem.disabled = true;
        let inputs = document.getElementsByTagName("input");
        for (let input of inputs)
            input.disabled = true;
        document.getElementById("result").innerHTML = "This funcionality is currently not available";
    }
}
async function add() {
    let res = document.getElementById("result");
    let data = {
        prod_name: document.getElementById("name").value,
        prod_type_id: parseInt(document.getElementById("type").value),
        prod_price: parseFloat(document.getElementById("price").value)
    }
    console.log("[addProducts] data = " + JSON.stringify(data));
    try {
        let newProduct = await $.ajax({
            url: "/api/products",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });
        res.innerHTML = "Inserted product with id: " + newProduct.prod_id;
    } catch (err) {
        console.log(err);
        if (err.responseJSON) {
            res.innerHTML = err.responseJSON.msg;
        } else {
            res.innerHTML = "Was not able to add product";
        }
    }
}