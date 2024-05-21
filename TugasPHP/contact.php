<?php
// Connect database
require 'connection.php';

// Fetch messages
$query = "SELECT * FROM contact ORDER BY CreatedAt DESC";
$result = mysqli_query($con, $query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Messages</title>
</head>
<body>
    <h1>Contact Messages</h1>
    <?php if (mysqli_num_rows($result) > 0): ?>
        <ul>
        <?php while ($row = mysqli_fetch_assoc($result)): ?>
            <li>
                <strong>Name:</strong> <?php echo htmlspecialchars($row['Name'], ENT_QUOTES, 'UTF-8'); ?><br>
                <strong>Email:</strong> <?php echo htmlspecialchars($row['Email'], ENT_QUOTES, 'UTF-8'); ?><br>
                <strong>Message:</strong> <?php echo htmlspecialchars($row['Message'], ENT_QUOTES, 'UTF-8'); ?><br>
                <strong>Date:</strong> <?php echo $row['CreatedAt']; ?>
            </li>
            <hr>
        <?php endwhile; ?>
        </ul>
    <?php else: ?>
        <p>No messages found.</p>
    <?php endif; ?>

    <?php mysqli_close($con); ?>
</body>
</html>
