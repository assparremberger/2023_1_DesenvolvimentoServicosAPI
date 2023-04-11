function ler(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if( this.readyState ==4 && this.status == 200){
            conteudo =  "<table border='1'> ";
            conteudo += "    <tr> ";
            conteudo += "       <th>ID</th> ";
            conteudo += "       <th>Nome</th> ";
            conteudo += "       <th>Preço</th> ";
            conteudo += "    </tr> ";

            objJSON = JSON.parse( this.responseText );
            produtos = objJSON.produtos;
            produtos.forEach( prod => {
                conteudo += "    <tr> ";
                conteudo += "       <td>"+ prod.id + "</td> ";
                conteudo += "       <td>"+ prod.nome + "</td> ";
                conteudo += "       <td>"+ prod.preco + "</td> ";
                conteudo += "    </tr> ";
            } );
            conteudo += " </table>"
            $("#divProdutos").html( conteudo );
        }
    };
    xhttp.open("GET", "servidor.php?listar", true);
    xhttp.send();
}


function adicionar(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if( this.readyState ==4 && this.status == 200){
            ler();
        }
    };
    url = "servidor.php?cadastrar&nome=" + $("#txtNome").val() +
          "&preco=" + $("#txtPreco").val();
    xhttp.open("GET", url, true);
    xhttp.send();
}