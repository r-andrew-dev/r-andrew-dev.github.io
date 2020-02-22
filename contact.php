<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="assets/css/reset.css">
    <link rel="stylesheet" type="text/css" href="assets/css/normalize.css">
    <link rel="stylesheet" type="text/css" href="assets/css/skeleton.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Karla|Rubik|Rubik+Mono+One&display=swap" rel="stylesheet">
    <title>Document</title>
</head>

<body>

        <form class="form contact-me" method="post" action="contactform.php">
            <div class="row">
              <div class="six columns">
                <label for="exampleEmailInput">Your email:</label>
                <input name="sender" class="u-full-width u-max-full-width form-piece" type="email" placeholder="test@mailbox.com" id="exampleEmailInput" required>
              </div>
              <div class="six columns">
                <label name="reason" for="exampleRecipientInput">Reason for contacting:</label>
                <select class="u-full-width u-max-full-width form-piece" id="exampleRecipientInput" required>
                  <option value="Option 1">Opportunity</option>
                  <option value="Option 2">Questions</option>
                  <option value="Option 3">Anything Else</option>
                </select>
              </div>
            </div>
            <div class="row">
                <div class="twelve columns">
                    <label name="message" for="exampleMessage">Message:</label>
                    <textarea class="u-full-width u-max-full-width form-piece" placeholder="Hello Rachael…" id="exampleMessage" required></textarea>
                </div>
            </div>
            <div class="row">
                <div class="twelve columns">
                    <input class="button-primary custom" type="submit" value="Submit">
                </div>
                </div>
            </div>
            </form>


        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="assets/javascript/portfolio.js"></script>
</body>

</html>