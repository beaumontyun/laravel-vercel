<!DOCTYPE html>
<html style="height: 100%;">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>
    @routes
  </head>
  <body style="height: 100%; margin: 0;">
    @inertia
  </body>
</html>