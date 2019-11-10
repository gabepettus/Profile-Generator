module.exports = res => `
<!DOCTYPE html>
<html lang="en-us">

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Profile for ${res.userName}</title>

  <!-- Bootstrap CDN -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

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

  <!-- jQuery CDN -->
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> -->

  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script> -->

  <!-- Bootstrap JavaScript CDN -->
  <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script> -->
</body>
</html>
`