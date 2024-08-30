<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletando os dados do formulário
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Exibindo os dados recebidos
    echo "<h1>Mensagem Recebida</h1>";
    echo "<p><strong>Nome:</strong> $name</p>";
    echo "<p><strong>E-mail:</strong> $email</p>";
    echo "<p><strong>Mensagem:</strong> $message</p>";
    echo "<p><a href='index.html'>Voltar</a></p>";
} else {
    echo "<p>Erro ao processar o formulário.</p>";
}
?>
