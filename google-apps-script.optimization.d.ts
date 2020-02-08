// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  namespace Optimization {
    /**
     * Object storing a linear constraint of the form lowerBound ≤ Sum(a(i) x(i)) ≤ upperBound
     * where lowerBound and upperBound are constants, a(i) are constant
     * coefficients and x(i) are variables (unknowns).
     *
     * The example below creates one variable x with values between 0 and 5
     * and creates the constraint 0 ≤ 2 * x ≤ 5. This is done by first creating a constraint
     * with the lower bound 5 and upper bound 5. Then the coefficient for variable
     * x in this constraint is set to 2.
     *
     *     var engine = LinearOptimizationService.createEngine();
     *     // Create a variable so we can add it to the constraint
     *     engine.addVariable('x', 0, 5);
     *     // Create a linear constraint with the bounds 0 and 10
     *     var constraint = engine.addConstraint(0, 10);
     *     // Set the coefficient of the variable in the constraint. The constraint is now:
     *     // 0 <= 2 * x <= 5
     *     constraint.setCoefficient('x', 2);
     */
    interface LinearOptimizationConstraint {

      /**
       * Sets the coefficient of a variable in the constraint. By default, variables have a coefficient
       * of 0.
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *     // Create a linear constraint with the bounds 0 and 10
       *     var constraint = engine.addConstraint(0, 10);
       *     // Create a variable so we can add it to the constraint
       *     engine.addVariable('x', 0, 5);
       *     // Set the coefficient of the variable in the constraint. The constraint is now:
       *     // 0 <= 2 * x <= 5
       *     constraint.setCoefficient('x', 2);
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-constraint#setCoefficient(String,Number)
       * @param variableName the name of variable for which the coefficient is being set
       * @param coefficient coefficient being set
       */
      setCoefficient(variableName: string, coefficient: number): LinearOptimizationConstraint;
    }
    /**
     * The engine used to model and solve a linear program. The example below solves the following
     * linear program:
     *
     * Two variables, x and y:
     *
     * 0 ≤ x ≤ 10
     *
     * 0 ≤ y ≤ 5
     *
     * Constraints:
     *
     * 0 ≤ 2 * x + 5 * y ≤ 10
     *
     * 0 ≤ 10 * x + 3 * y ≤ 20
     *
     * Objective:
     * Maximize x + y
     *
     *     var engine = LinearOptimizationService.createEngine();
     *
     *     // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
     *     // Add two variables, 0 <= x <= 10 and 0 <= y <= 5
     *     engine.addVariable('x', 0, 10);
     *     engine.addVariable('y', 0, 5);
     *
     *     // Create the constraint: 0 <= 2 * x + 5 * y <= 10
     *     var constraint = engine.addConstraint(0, 10);
     *     constraint.setCoefficient('x', 2);
     *     constraint.setCoefficient('y', 5);
     *
     *     // Create the constraint: 0 <= 10 * x + 3 * y <= 20
     *     var constraint = engine.addConstraint(0, 20);
     *     constraint.setCoefficient('x', 10);
     *     constraint.setCoefficient('y', 3);
     *
     *     // Set the objective to be x + y
     *     engine.setObjectiveCoefficient('x', 1);
     *     engine.setObjectiveCoefficient('y', 1);
     *
     *     // Engine should maximize the objective
     *     engine.setMaximization();
     *
     *     // Solve the linear program
     *     var solution = engine.solve();
     *     if (!solution.isValid()) {
     *       Logger.log('No solution ' + solution.getStatus());
     *     } else {
     *       Logger.log('Value of x: ' + solution.getVariableValue('x'));
     *       Logger.log('Value of y: ' + solution.getVariableValue('y'));
     *     }
     */
    interface LinearOptimizationEngine {

      /**
       * Adds a new linear constraint in the model. The upper and lower bound of the constraint are
       * defined at creation time. Coefficients for the variables are defined via calls to LinearOptimizationConstraint.setCoefficient(variableName, coefficient).
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *
       *     // Create a linear constraint with the bounds 0 and 10
       *     var constraint = engine.addConstraint(0, 10);
       *
       *     // Create a variable so we can add it to the constraint
       *     engine.addVariable('x', 0, 5);
       *
       *     // Set the coefficient of the variable in the constraint. The constraint is now:
       *     // 0 <= 2 * x <= 5
       *     constraint.setCoefficient('x', 2);
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine#addConstraint(Number,Number)
       * @param lowerBound lower bound of the constraint
       * @param upperBound upper bound of the constraint
       */
      addConstraint(lowerBound: number, upperBound: number): LinearOptimizationConstraint;

      /**
       * Adds constraints in batch to the model.
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *
       *     // Add a boolean variable 'x' (integer >= 0 and <= 1) and a real (continuous >= 0 and <= 100)
       *     variable 'y'.
       *     engine.addVariables(['x', 'y'], [0, 0], [1, 100],
       *         [LinearOptimizationService.VariableType.INTEGER,
       *             LinearOptimizationService.VariableType.CONTINUOUS]);
       *
       *     // Adds two constraints:
       *     //   0 <= x + y <= 3
       *     //   1 <= 10 * x - y <= 5
       *     engine.addConstraints([0.0, 1.0], [3.0, 5.0], [['x', 'y'], ['x', 'y']], [[1, 1], [10, -1]]);
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine#addConstraints(Number,Number,String,Number)
       * @param lowerBounds lower bounds of the constraints
       * @param upperBounds upper bounds of the constraints
       * @param variableNames the names of variables for which the coefficients are being set
       * @param coefficients coefficients being set
       */
      addConstraints(lowerBounds: number[], upperBounds: number[], variableNames: string[][], coefficients: number[][]): LinearOptimizationEngine;

      /**
       * Adds a new continuous variable to the model. The variable is referenced by its name. The type
       * is set to VariableType.CONTINUOUS.
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *     var constraint = engine.addConstraint(0, 10);
       *
       *     // Add a boolean variable (integer >= 0 and <= 1)
       *     engine.addVariable('x', 0, 1, LinearOptimizationService.VariableType.INTEGER);
       *
       *     // Add a real (continuous) variable. Notice the lack of type specification.
       *     engine.addVariable('y', 0, 100);
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine#addVariable(String,Number,Number)
       * @param name unique name of the variable
       * @param lowerBound lower bound of the variable
       * @param upperBound upper bound of the variable
       */
      addVariable(name: string, lowerBound: number, upperBound: number): LinearOptimizationEngine;

      /**
       * Adds a new variable to the model. The variable is referenced by its name.
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *     var constraint = engine.addConstraint(0, 10);
       *
       *     // Add a boolean variable (integer >= 0 and <= 1)
       *     engine.addVariable('x', 0, 1, LinearOptimizationService.VariableType.INTEGER);
       *
       *     // Add a real (continuous) variable
       *     engine.addVariable('y', 0, 100, LinearOptimizationService.VariableType.CONTINUOUS);
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine#addVariable(String,Number,Number,VariableType)
       * @param name unique name of the variable
       * @param lowerBound lower bound of the variable
       * @param upperBound upper bound of the variable
       * @param type type of the variable, can be one of VariableType
       */
      addVariable(name: string, lowerBound: number, upperBound: number, type: VariableType): LinearOptimizationEngine;

      /**
       * Adds a new variable to the model. The variable is referenced by its name.
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *     var constraint = engine.addConstraint(0, 10);
       *
       *     // Add a boolean variable (integer >= 0 and <= 1)
       *     engine.addVariable('x', 0, 1, LinearOptimizationService.VariableType.INTEGER, 2);
       *     // The objective is now 2 * x.
       *
       *     // Add a real (continuous) variable
       *     engine.addVariable('y', 0, 100, LinearOptimizationService.VariableType.CONTINUOUS, -5);
       *     // The objective is now 2 * x - 5 * y.
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine#addVariable(String,Number,Number,VariableType,Number)
       * @param name unique name of the variable
       * @param lowerBound lower bound of the variable
       * @param upperBound upper bound of the variable
       * @param type type of the variable, can be one of VariableType
       * @param objectiveCoefficient objective coefficient of the variable
       */
      addVariable(name: string, lowerBound: number, upperBound: number, type: VariableType, objectiveCoefficient: number): LinearOptimizationEngine;

      /**
       * Adds variables in batch to the model. The variables are referenced by their names.
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *
       *     // Add a boolean variable 'x' (integer >= 0 and <= 1) and a real (continuous >=0 and <= 100)
       *     // variable 'y'.
       *     engine.addVariables(['x', 'y'], [0, 0], [1, 100],
       *         [LinearOptimizationService.VariableType.INTEGER,
       *             LinearOptimizationService.VariableType.CONTINUOUS]);
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine#addVariables(String,Number,Number,VariableType,Number)
       * @param names unique names of the variables
       * @param lowerBounds lower bounds of the variables
       * @param upperBounds upper bounds of the variables
       * @param types types of the variables, can be one of VariableType
       * @param objectiveCoefficients objective coefficients of the variables
       */
      addVariables(names: string[], lowerBounds: number[], upperBounds: number[], types: VariableType[], objectiveCoefficients: number[]): LinearOptimizationEngine;

      /**
       * Sets the optimization direction to maximizing the linear objective function.
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *
       *     // Add a real (continuous) variable. Notice the lack of type specification.
       *     engine.addVariable('y', 0, 100);
       *
       *     // Set the coefficient of 'y' in the objective.
       *     // The objective is now 5 * y
       *     engine.setObjectiveCoefficient('y', 5);
       *
       *     // We want to maximize.
       *     engine.setMaximization();
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine#setMaximization()
       */
      setMaximization(): LinearOptimizationEngine;

      /**
       * Sets the optimization direction to minimizing the linear objective function.
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *
       *     // Add a real (continuous) variable. Notice the lack of type specification.
       *     engine.addVariable('y', 0, 100);
       *
       *     // Set the coefficient of 'y' in the objective.
       *     // The objective is now 5 * y
       *     engine.setObjectiveCoefficient('y', 5);
       *
       *     // We want to minimize
       *     engine.setMinimization();
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine#setMinimization()
       */
      setMinimization(): LinearOptimizationEngine;

      /**
       * Sets the coefficient of a variable in the linear objective function.
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *
       *     // Add a real (continuous) variable. Notice the lack of type specification.
       *     engine.addVariable('y', 0, 100);
       *
       *     // Set the coefficient of 'y' in the objective.
       *     // The objective is now 5 * y
       *     engine.setObjectiveCoefficient('y', 5);
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine#setObjectiveCoefficient(String,Number)
       * @param variableName name of variable for which the coefficient is being set
       * @param coefficient coefficient of the variable in the objective function
       */
      setObjectiveCoefficient(variableName: string, coefficient: number): LinearOptimizationEngine;

      /**
       * Solves the current linear program with the default deadline of 30 seconds. Returns the solution found.
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *
       *     // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
       *     engine.addVariable('x', 0, 10);
       *
       *     // ...
       *
       *     // Solve the linear program
       *     var solution = engine.solve();
       *     if (!solution.isValid()) {
       *       throw 'No solution ' + solution.getStatus();
       *     }
       *     Logger.log('Value of x: ' + solution.getVariableValue('x'));
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine#solve()
       */
      solve(): LinearOptimizationSolution;

      /**
       * Solves the current linear program. Returns the solution found. and if it is an optimal
       * solution.
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *
       *     // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
       *     engine.addVariable('x', 0, 10);
       *
       *     // ...
       *
       *     // Solve the linear program
       *     var solution = engine.solve(300);
       *     if (!solution.isValid()) {
       *       throw 'No solution ' + solution.getStatus();
       *     }
       *     Logger.log('Value of x: ' + solution.getVariableValue('x'));
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine#solve(Number)
       * @param seconds deadline for solving the problem, in seconds; the maximum deadline is 300 seconds
       */
      solve(seconds: number): LinearOptimizationSolution;
    }
    /**
     * The linear optimization service, used to model and solve linear and mixed-integer linear
     * programs. The example below solves the following linear program:
     *
     * Two variables, x and y:
     *
     * 0 ≤ x ≤ 10
     *
     * 0 ≤ y ≤ 5
     *
     * Constraints:
     *
     * 0 ≤ 2 * x + 5 * y ≤ 10
     *
     * 0 ≤ 10 * x + 3 * y ≤ 20
     *
     * Objective:
     * Maximize x + y
     *
     *     var engine = LinearOptimizationService.createEngine();
     *
     *     // Add variables, constraints and define the objective using addVariable(), addConstraint(), etc.
     *     // Add two variables, 0 <= x <= 10 and 0 <= y <= 5
     *     engine.addVariable('x', 0, 10);
     *     engine.addVariable('y', 0, 5);
     *
     *     // Create the constraint: 0 <= 2 * x + 5 * y <= 10
     *     var constraint = engine.addConstraint(0, 10);
     *     constraint.setCoefficient('x', 2);
     *     constraint.setCoefficient('y', 5);
     *
     *     // Create the constraint: 0 <= 10 * x + 3 * y <= 20
     *     var constraint = engine.addConstraint(0, 20);
     *     constraint.setCoefficient('x', 10);
     *     constraint.setCoefficient('y', 3);
     *
     *     // Set the objective to be x + y
     *     engine.setObjectiveCoefficient('x', 1);
     *     engine.setObjectiveCoefficient('y', 1);
     *
     *     // Engine should maximize the objective.
     *     engine.setMaximization();
     *
     *     // Solve the linear program
     *     var solution = engine.solve();
     *     if (!solution.isValid()) {
     *       Logger.log('No solution ' + solution.getStatus());
     *     } else {
     *       Logger.log('Value of x: ' + solution.getVariableValue('x'));
     *       Logger.log('Value of y: ' + solution.getVariableValue('y'));
     *     }
     */
    interface LinearOptimizationService {
      Status: typeof Status;
      VariableType: typeof VariableType;

      /**
       * Creates an engine to to solve linear programs (potentially mixed-integer programs).
       *
       *
       *     // Creates a linear optimization engine.
       *     var engine = LinearOptimizationService.createEngine();
       *     engine.addVariable('x', 0, 10);
       *
       *     // ...
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-service#createEngine()
       */
      createEngine(): LinearOptimizationEngine;
    }
    /**
     * The solution of a linear program. The example below solves the following linear program:
     *
     * Two variables, x and y:
     *
     * 0 ≤ x ≤ 10
     *
     * 0 ≤ y ≤ 5
     *
     * Constraints:
     *
     * 0 ≤ 2 * x + 5 * y ≤ 10
     *
     * 0 ≤ 10 * x + 3 * y ≤ 20
     *
     * Objective:
     * Maximize x + y
     *
     *     var engine = LinearOptimizationService.createEngine();
     *
     *     // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc.
     *     // Add two variables, 0 <= x <= 10 and 0 <= y <= 5
     *     engine.addVariable('x', 0, 10);
     *     engine.addVariable('y', 0, 5);
     *
     *     // Create the constraint: 0 <= 2 * x + 5 * y <= 10
     *     var constraint = engine.addConstraint(0, 10);
     *     constraint.setCoefficient('x', 2);
     *     constraint.setCoefficient('y', 5);
     *
     *     // Create the constraint: 0 <= 10 * x + 3 * y <= 20
     *     var constraint = engine.addConstraint(0, 20);
     *     constraint.setCoefficient('x', 10);
     *     constraint.setCoefficient('y', 3);
     *
     *     // Set the objective to be x + y
     *     engine.setObjectiveCoefficient('x', 1);
     *     engine.setObjectiveCoefficient('y', 1);
     *
     *     // Engine should maximize the objective
     *     engine.setMaximization();
     *
     *     // Solve the linear program
     *     var solution = engine.solve();
     *     if (!solution.isValid()) {
     *       Logger.log('No solution ' + solution.getStatus());
     *     } else {
     *       Logger.log('Objective  value: ' + solution.getObjectiveValue());
     *       Logger.log('Value of x: ' + solution.getVariableValue('x'));
     *       Logger.log('Value of y: ' + solution.getVariableValue('y'));
     *     }
     */
    interface LinearOptimizationSolution {

      /**
       * Gets the value of the objective function in the current solution.
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *
       *     // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
       *     engine.addVariable('x', 0, 10);
       *
       *     // ...
       *
       *     // Solve the linear program
       *     var solution = engine.solve();
       *     Logger.log('ObjectiveValue: ' + solution.getObjectiveValue());
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-solution#getObjectiveValue()
       */
      getObjectiveValue(): number;

      /**
       * Gets the status of the solution. Before solving a problem, the status will be NOT_SOLVED.
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *
       *     // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
       *     engine.addVariable('x', 0, 10);
       *
       *     // ...
       *
       *     // Solve the linear program
       *     var solution = engine.solve();
       *     if (solution.getStatus() != LinearOptimizationService.Status.FEASIBLE &&
       *         solution.getStatus() != LinearOptimizationService.Status.OPTIMAL) {
       *       throw 'No solution ' + status;
       *     }
       *     Logger.log('Status: ' + solution.getStatus());
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-solution#getStatus()
       */
      getStatus(): Status;

      /**
       * Gets the value of a variable in the solution created by the last call to LinearOptimizationEngine.solve().
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *
       *     // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
       *     engine.addVariable('x', 0, 10);
       *
       *     // ...
       *
       *     // Solve the linear program
       *     var solution = engine.solve();
       *     Logger.log('Value of x: ' + solution.getVariableValue('x'));
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-solution#getVariableValue(String)
       * @param variableName name of the variable
       */
      getVariableValue(variableName: string): number;

      /**
       * Determines whether the solution is either feasible or optimal.
       *
       *
       *     var engine = LinearOptimizationService.createEngine();
       *
       *     // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
       *     engine.addVariable('x', 0, 10);
       *
       *     // ...
       *
       *     // Solve the linear program
       *     var solution = engine.solve();
       *     if (!solution.isValid()) {
       *       throw 'No solution ' + status;
       *     }
       * https://developers.google.com/apps-script/reference/optimization/linear-optimization-solution#isValid()
       */
      isValid(): boolean;
    }
    /**
     * Status of the solution. Before solving a problem the status will be NOT_SOLVED;
     * afterwards it will take any of the other values depending if it successfully found a solution and
     * if the solution is optimal.
     */
    enum Status { OPTIMAL, FEASIBLE, INFEASIBLE, UNBOUNDED, ABNORMAL, MODEL_INVALID, NOT_SOLVED }
    /**
     * Type of variables created by the engine.
     */
    enum VariableType { INTEGER, CONTINUOUS }
  }
}

declare var LinearOptimizationService: GoogleAppsScript.Optimization.LinearOptimizationService;
