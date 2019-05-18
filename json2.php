<?php
    $json = array(
            "Credit" => array(
                array('img/credit-card2.png', '5324', '09.21', 1565.00, 50000)
                
            ),
            'Debit' => array(
                array('img/credit-card.png','4321', '05.22', 70000.00, 25550),
                array('img/credit-card3.jpg','4321', '05.22', 300.00, 250)
                
            )
        );
    echo json_encode($json);
?>