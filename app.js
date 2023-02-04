var options = {
    key: "razor pay key",
    amount: 1000, // amount in paise
    currency: "INR",
    name: "Merchant Name",
    description: "Purchase Description",
    image: "https://example.com/your_logo.png",
    handler: function (response) {
      alert("Payment successful. Transaction ID: " + response.razorpay_payment_id);
    },
    prefill: {
      name: "User Name",
      email: "user@example.com"
    },
    notes: {
      address: "Address for the payment"
    },
    theme: {
      color: "#5C6BC0"
    }
  };
  
  document.getElementById("pay-rupee").addEventListener("click", function () {
    var razorpay = new Razorpay(options);
    razorpay.open();
  });
  


  async function payWithEth() {
    if (typeof window.ethereum === "undefined") {
      alert("MetaMask is not installed. Please install MetaMask and try again.");
      return;
    }
  
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
  
    const tx = {
      to: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      value: window.ethereum.utils.parseEther("1.0"),
      gasPrice: window.ethereum.utils.parseUnits("20", "gwei"),
      gasLimit: 21000,
      chainId: 1
    };
  
    try {
      const result = await window.ethereum.sendTransaction(tx);
      alert(`Transaction hash: ${result.hash}`);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }
  
  document.getElementById("pay-eth").addEventListener("click", payWithEth);
  