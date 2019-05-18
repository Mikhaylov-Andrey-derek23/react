<?php
    $json = array(
            "Credit" => array(
                array('1234', '05.07', 565.00)
                
            ),
            'Debit' => array(
                array('4321', '05.07', -300.00, 50000)
                
            )
        );
    echo json_encode($json);
?>