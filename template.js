// wraps html body allowing for insertion of variables
module.exports = res => `
<!DOCTYPE html>
<html lang="en-us">

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Profile for ${res.userName}</title>

  <!-- Bootstrap CDN -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <script src="https://kit.fontawesome.com/6cbff65fb8.js" crossorigin="anonymous"></script>
  <link href="/css/all.css" rel="stylesheet">

  <!-- set colors -->
  <style>
    body { 
          background-color: ${res.color_bkgd}; 
          -webkit-print-color-adjust:exact;
         }
    .card { background-color: ${res.color_card}; }
  </style>

</head>

<body>
  <!-- Start Nav -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <span class="navbar-brand mb-1 h1">GITHUB generated Portfolio for ${res.userName}</span>
  </nav>
  <!-- End Nav -->
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="page-header">
          <h1>About ${res.userName}</h1>
        </div>
        <div class="row">
          <div class="col-md-3">
            <img src="${res.imageLink}" alt="GITHUB avatar for ${res.userName}" class="img-thumbnail">
<!--                <span>
      <a href="" download>
        <i class='far fa-file-pdf fa-2x' alt='download resume'></i>
        <i class="far fa-address-card"></i>
      </a>
      <a href="">
        <i class='fab fa-github fa-2x' alt='link to github'></i>
      </a>
      <a href="">
        <i class='fab fa-linkedin fa-2x' alt='link to linkedin'></i>
      </a>
    </span>
    -->
          </div>
          <div class="col-md-9">
            <p>
              ${res.bio}
            </p>
          </div>
        </div>
      </div>
      <!--Create Card taking up 4 Columns-->
      <div class="col-md-4">
        <div class="card mt-2">
          <div class="card-body">
            <h5 class="card-title">Public Repos</h5>
            <h6 class="card-subtitle mb-2 text-muted">Number of Public Repos on GITHUB</h6>
            <p class="card-text">${res.numPubRepos}</p>
          </div>
        </div>
        <div class="card mt-2">
          <div class="card-body">
            <h5 class="card-title">Followers</h5>
            <h6 class="card-subtitle mb-2 text-muted">Number of Followers on GITHUB</h6>
            <p class="card-text">${res.numFollowers}</p>
          </div>
        </div>
        <div class="card mt-2">
          <div class="card-body">
            <h5 class="card-title">Following</h5>
            <h6 class="card-subtitle mb-2 text-muted">Number of Following on GITHUB</h6>
            <p class="card-text">${res.numFollowers}</p>
          </div>
        </div>
        <div class="card mt-2">
          <div class="card-body">
            <h5 class="card-title">Stars</h5>
            <h6 class="card-subtitle mb-2 text-muted">Number of Stars on GITHUB</h6>
            <p class="card-text">${res.numStars}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`