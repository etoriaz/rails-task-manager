<script>
  $(function() {
    $("input[type='checkbox']").on("click", function() {
      $(this).closest("form").submit();
    })
  });
</script>
