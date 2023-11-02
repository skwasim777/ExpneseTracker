package com.expense;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins="http://localhost:3000/")
public class ExpenseController {
	private final ExpenseRepository expenseRepository;

	@Autowired
	public ExpenseController(ExpenseRepository expenseRepository) {
		this.expenseRepository = expenseRepository;
	}
    @PostMapping("/post")
    public ResponseEntity<Entity> createExpense(@RequestBody Entity expense) {
        Entity savedExpense = expenseRepository.save(expense);
        return new ResponseEntity<>(savedExpense, HttpStatus.CREATED);
    }


	@GetMapping
	public List<Entity> getAllExpenses() {
		return expenseRepository.findAll();
	}
}
