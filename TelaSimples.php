<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela em PHP</title>
</head>
<body>
    <h1>Bem-vindo a tela em PHP</h1>

    <?php
    // Verifica se o formulário foi enviado
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Obtém o nome do usuário do formulário
        $nome = htmlspecialchars($_POST['nome']);
        echo "<p>Olá, $nome! Bem-vindo ao nosso site.</p>";
    }
    ?>

    <!-- Formulário HTML para entrada do usuário -->
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="nome">Digite seu nome:</label>
        <input type="text" id="nome" name="nome" required>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>
