

// const htmlformat = function ()
 const htmlformat = (data) => { return
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <header class="bg-danger py-4">
        <h1 class="text-center text-white">
          My Team
        </h1>
      </header>

    <!-- Main content of Site -->
    <main>
        <!-- div container for profile cards -->
        <div class="container">
            <!-- Profile classes -->
            <div class="d-flex row align-items-center justify-content-center">
                *** All My New Cards ***
            </div>
        </div>
    </main>
</body>
</html>` }

module.exports = htmlformat