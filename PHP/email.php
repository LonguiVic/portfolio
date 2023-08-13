<?php
        
        if(isset($_POST['email']) && !empty($_POST['email'])){

        $nome = addslashes($_POST['name']);
        $email = addslashes($_POST['email']);
        $mensagem = addslashes($_POST['message']);
        
            

        $to = "contatoportfoliodev@gmail.com";
        $subject = "Contato - Portfólio Dev";
        $body = "Nome: ".$nome. "\n".
                "Email: ".$email. "\n".
                "Mensagem: ".$mensagem;
                $header = "From: longuivictor@gmail.com\n" .
                "Reply-To: $email\n" .
                "X-Mailer: PHP/" . phpversion();      

        if(mail($to,$subject,$body,$header)){

            echo("Email enviado com sucesso!");
        
        }else{
            echo("O Email não pode ser enviado.");
        }
        }
        ?>

