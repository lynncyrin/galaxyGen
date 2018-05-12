#![feature(proc_macro, wasm_custom_section, wasm_import_module)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Universe {
    size: u8,
    cells: Vec<u8>,
}

#[wasm_bindgen]
impl Universe {
    pub fn new(size: u8) -> Universe {
        return Universe {
            size,
            cells: vec![0; size.pow(2) as usize],
        };
    }
    pub fn new_stable_case_one() -> Universe {
        let size = (3 as u8).pow(2);
        let mut universe = Universe {
            size,
            cells: vec![1; size.pow(2) as usize],
        };
        universe.cells[4 as usize] = 10;
        return universe;
    }
    pub fn cells_pointer(&self) -> *const u8 {
        return self.cells.as_ptr();
    }
    pub fn seed(&mut self) {
        for cell_index in 0..self.size.pow(2) {
            if cell_index % 3 == 0 {
                self.cells[cell_index as usize] = 1;
            }
        }
    }
    pub fn tick(&mut self) {
        let mut next = self.cells.clone();
        for index in 0..(self.size - 1) {
            let cell = self.cells[index as usize];
        }
        self.cells = next;
    }
}

impl Universe {
    fn neighbours(&self, index: u8, reach: u8) -> Vec<u8> {
        let mut neighbours = Vec::new();

        let index_row = index % self.size;
        let index_col = index / self.size;

        let (row_start, row_end) = self.reach_range(index_row, reach);
        let (col_start, col_end) = self.reach_range(index_col, reach);

        neighbours.push(5);
        return neighbours;
    }
    fn reach_range(&self, index: u8, reach: u8) -> (u8, u8) {
        let start;
        let end;

        if index < reach {
            start = reach - index;
        } else {
            start = index - reach;
        }

        if index + reach > self.size {
            end = self.size - 1;
        } else {
            end = index + reach;
        }

        return (start, end);
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_inital_generation_no_panic() {
        Universe::new(10);
    }
    #[test]
    #[should_panic]
    #[allow(overflowing_literals)]
    fn test_out_of_bounds_input_panics() {
        Universe::new(100000);
    }
    #[test]
    fn test_seed_no_panic() {
        Universe::new(10).seed();
    }
    #[test]
    fn test_seed_tick_no_panic() {
        let mut universe = Universe::new(10);
        universe.seed();
        universe.tick();
    }
    #[test]
    fn test_seed_alters_data() {
        let mut universe = Universe::new(10);
        let cells_before = universe.cells.clone();
        universe.seed();
        let cells_after = universe.cells.clone();
        assert_ne!(cells_before, cells_after);
    }
    #[test]
    fn test_stable_case_one_no_panics() {
        Universe::new_stable_case_one();
    }
}
